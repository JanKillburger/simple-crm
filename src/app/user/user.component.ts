import { Component, ElementRef, ViewChild, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { Firestore, collection, addDoc, getDoc, getDocs, doc } from '@angular/fire/firestore';
import { CdkTable } from '@angular/cdk/table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @ViewChild('userTable') userTable: any;
  private firestore: Firestore = inject(Firestore);
  user = new User();
  users: User[] = [];
  displayedColumns = ['first name', 'last name', 'birth date', 'city'];

  constructor(public dialog: MatDialog) { }
  async ngOnInit() {
    this.getUsers();
  }

  async saveUser() {
    const docRef = await addDoc(collection(this.firestore, "users"), {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      birthDate: this.user.birthDate?.getTime(),
      street: this.user.street,
      zipCode: this.user.zipCode,
      city: this.user.city
    });
  }

  async getUsers() {
    this.users = [];
    const querySnapshot = await getDocs(collection(this.firestore, "users"));
    querySnapshot.forEach((doc) => {
      const user = new User(doc.data());
      this.users.push(user);
    });
    this.userTable.renderRows();
  }

  async getUser() {
    const docRef = doc(this.firestore, "users", "kkXOsIqx6Bzjh7IYDHEG");
    let docSnap = await getDoc(docRef);
    this.user = new User(docSnap.data());
  }

  async openDialog() {
    // await this.getUser();
    const dialogRef = this.dialog.open(DialogAddUserComponent, { data: this.user });
    dialogRef.afterClosed().subscribe(
      async result => {
        if (result) {
          this.user = result;
          await this.saveUser();
          this.getUsers();
        }
      }
    )
  };
}
