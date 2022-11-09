import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HeightsService } from 'src/app/services/materials/heights/heights.service';

@Component({
  selector: 'app-height',
  templateUrl: './height.component.html',
  styleUrls: ['./height.component.css']
})
export class HeightComponent implements OnInit {

  public heights = {
    height: ''
  }

  constructor(private snack: MatSnackBar, private heightService:HeightsService ){ }

  ngOnInit(): void {
  }

  formSubmit(signupForm: NgForm) {

    console.log(this.heights);
    if (this.heights.height == '' || this.heights.height == null) {
      this.snack.open('El calibre es requerido', '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: ['mat-toolbar', 'mat-warn']
      });
      return;
    }

    this.heightService.addHeight(this.heights).subscribe(
      (data) => {
        console.log(data);
        this.snack.open('Altura guardado exitosamente', '', {
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
