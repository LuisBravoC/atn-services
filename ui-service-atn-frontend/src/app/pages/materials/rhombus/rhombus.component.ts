import { RhombusService } from 'src/app/services/materials/rhombus/rhombus.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rhombus',
  templateUrl: './rhombus.component.html',
  styleUrls: ['./rhombus.component.css']
})
export class RhombusComponent implements OnInit {

  public rhombus = {
    rhombus: ''
  }

  constructor(private snack: MatSnackBar, private rhombusServices:RhombusService) { }

  ngOnInit(): void {
  }

  formSubmit(signupForm: NgForm) {

    console.log(this.rhombus);
    if (this.rhombus.rhombus == '' || this.rhombus.rhombus == null) {
      this.snack.open('La medida de rombo es requerida', '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: ['mat-toolbar', 'mat-warn']
      });
      return;
    }

    this.rhombusServices.addRhombus(this.rhombus).subscribe(
      (data) => {
        console.log(data);
        this.snack.open('Rombo guardado exitosamente', '', {
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
