import { LoginService } from '../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    "username": '',
    "password": '',
  }

  constructor(private snack: MatSnackBar, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  formSubmit(loginForm: NgForm) {
    if (this.loginData.username.trim() == '' || this.loginData.username.trim() == null) {
      this.snack.open('El nombre de usuario es requerido', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['mat-toolbar', 'mat-warn']
      });
      return;
    }

    if (this.loginData.password.trim() == '' || this.loginData.password.trim() == null) {
      this.snack.open('La contraseña es requerida', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['mat-toolbar', 'mat-warn']
      });
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log(data);

        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user: any) => {
          this.loginService.setUser(user);
          console.log(user);

          if (this.loginService.getUserRole() == "ADMIN") {
            // Dashboard admin
            window.location.href = '/admin';
          }
          else if (this.loginService.getUserRole() == "NORMAL") {
            // Dashboard normal
            window.location.href = '/dashboard';
          }
          else {
            this.loginService.logout();
          }

        })
      }, (error) => {
        console.log(error);
        this.snack.open('Datos invalidos, vuelva a intentarlo', '', {
          duration: 4000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
          panelClass: ['mat-toolbar', 'mat-warn']
        });
      }
    )

    loginForm.resetForm();
  }

}
