import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef,MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User
  ) {}
  birthDate = new Date();

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveUser() {
    // this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);
  }
}
