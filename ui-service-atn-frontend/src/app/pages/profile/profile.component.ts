import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login/login.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user = {
    username : '',
    password : '',
    name : '',
    lastname : '',
    email : '',
    phone : ''
  }


  constructor(private userService:UserService, private snack:MatSnackBar, private loginServices:LoginService) { }

  ngOnInit(): void {

  this.user = this.loginServices.getUser();

  }

  formSubmit(signupForm: NgForm) {

    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      this.snack.open('El nombre de usuario es requerido', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['mat-toolbar', 'mat-warn']
      });
      //Swal.fire('Error','Hubo un error','error');
      return;
    }

    this.userService.addUser(this.user).subscribe(
      (data) => {
        console.log(data);
        this.snack.open('Usuario guardado exitosamente', '', {
          duration: 5000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
          panelClass: ['mat-toolbar', 'mat-success-snack']
        });
      }, (error) => {
        console.log(error);
        this.snack.open('Ha ocurrido un error en el sistema', '', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
          panelClass: ['mat-toolbar', 'mat-warn']
        });
      }
    )

    signupForm.resetForm();
  }


}
