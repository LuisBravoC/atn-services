import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CaliberService } from 'src/app/services/materials/caliber/caliber.service';

@Component({
  selector: 'app-caliber',
  templateUrl: './caliber.component.html',
  styleUrls: ['./caliber.component.css']
})
export class CaliberComponent implements OnInit {

  public calibers = {
    caliber: ''
  }

  constructor(private snack: MatSnackBar, private caliberService: CaliberService) { }

  ngOnInit(): void {
  }

  formSubmit(signupForm: NgForm) {

    console.log(this.calibers);
    if (this.calibers.caliber == '' || this.calibers.caliber == null) {
      this.snack.open('El calibre es requerido', '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: ['mat-toolbar', 'mat-warn']
      });
      return;
    }

    this.caliberService.addCaliber(this.calibers).subscribe(
      (data) => {
        console.log(data);
        this.snack.open('Calibre guardado exitosamente', '', {
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
