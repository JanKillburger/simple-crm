import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  private firestore: Firestore = inject(Firestore);
  user = new User();

  constructor(public dialog: MatDialog) { }
  ngOnInit() {
    // this.user.firstName = 'Jan';
  }

  async saveUser() {
    const docRef = await addDoc(collection(this.firestore, "users"), {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      birthDate: this.user.birthDate,
      street: this.user.street,
      zipCode: this.user.zipCode,
      city: this.user.city
    });
    console.log("Document written with ID: ", docRef.id);
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogAddUserComponent, { data: this.user });
    dialogRef.afterClosed().subscribe(
      result => {
        this.user = result;
        this.saveUser();
      }
    )
  };
}
