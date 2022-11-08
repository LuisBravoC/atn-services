import { Material, MaterialService } from './../../services/material/material.service';
import { ReportService } from './../../services/report/report.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  public report = {
    material: '',
    caliber: '',
    height: '',
    rhomb: '',
    meters: '',
    quantity: '',
    author: '',
    date: ''
  }

  
  materialList: Material[];
  user: any = null;

  constructor(private snack: MatSnackBar, private reportService: ReportService, private loginService: LoginService, private materialServices:MaterialService, private router: Router) {
    this.materialList = [];
  }

  ngOnInit(): void {

    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(['']);
    }
    
    this.materialServices.getAllMaterials$().subscribe(materials => {
      this.materialList = materials;
      console.log(this.materialList);
    });

    this.user = this.loginService.getUser();
    this.report.author = this.user.name + ' ' + this.user.lastname;

    var today = new Date();
    var date;
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    date = dd + '-' + mm + '-' + yyyy;
    this.report.date = date;

    console.log("Autor: ", this.report.author);
    console.log("Fecha: ", date);

  }

  formSubmit(signupForm: NgForm) {

    console.log(this.report);
    if (this.report.material == '' || this.report.material == null) {
      this.snack.open('El nombre material es requerido', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['mat-toolbar', 'mat-warn']
      });
      return;
    }

    if (this.report.caliber == '' || this.report.caliber == null) {
      this.snack.open('El calibre es requerido', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['mat-toolbar', 'mat-warn']
      });
      return;
    }

    if (this.report.height == '' || this.report.height == null) {
      this.snack.open('La altura es requerida', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['mat-toolbar', 'mat-warn']
      });
      return;
    }

    if (this.report.rhomb == '' || this.report.rhomb == null) {
      this.snack.open('Los rombos son requeridos', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['mat-toolbar', 'mat-warn']
      });
      return;
    }

    if (this.report.meters == '' || this.report.meters == null) {
      this.snack.open('Los metros son requeridos', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['mat-toolbar', 'mat-warn']
      });
      return;
    }

    if (this.report.quantity == '' || this.report.quantity == null) {
      this.snack.open('La cantidad es requerida', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['mat-toolbar', 'mat-warn']
      });
      return;
    }

    this.reportService.addReport(this.report).subscribe(
      (data) => {
        console.log(data);
        this.snack.open('Reporte guardado exitosamente', '', {
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
