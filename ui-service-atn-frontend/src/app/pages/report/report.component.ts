import { Material, MaterialService } from 'src/app/services/materials/material/material.service';
import { ReportService } from './../../services/report/report.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { Caliber, CaliberService } from 'src/app/services/materials/caliber/caliber.service';
import { Height, HeightsService } from 'src/app/services/materials/heights/heights.service';
import { Rhombus, RhombusService } from 'src/app/services/materials/rhombus/rhombus.service';

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
    rhombus: '',
    meters: '',
    quantity: '',
    author: '',
    date: ''
  }


  materialList: Material[];
  caliberList: Caliber[];
  heightList: Height[];
  rhombusList: Rhombus[];
  user: any = null;

  constructor(private snack: MatSnackBar, private reportService: ReportService, private loginService: LoginService,
    private materialServices:MaterialService, private caliberServices:CaliberService, private heightService:HeightsService,
    private rhombusServices:RhombusService, private router: Router) {
    this.materialList = [];
    this.caliberList = [];
    this.heightList = [];
    this.rhombusList = [];
  }

  ngOnInit(): void {

    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(['']);
    }

    this.materialServices.getAllMaterials$().subscribe(materials => {
      this.materialList = materials;
      console.log(this.materialList);
    });

    this.caliberServices.getAllCalibers$().subscribe(calibers => {
      this.caliberList = calibers;
      console.log(this.caliberList);
    });

    this.heightService.getAllHeights$().subscribe(height => {
      this.heightList = height;
      console.log(this.heightList);
    });

    this.rhombusServices.getAllRhombus$().subscribe(rhombus => {
      this.rhombusList = rhombus;
      console.log(this.rhombusList);
    });

    if(this.loginService.isLoggedIn()){
      this.user = this.loginService.getUser();
      this.report.author = this.user.name + ' ' + this.user.lastname;
    }

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

    if (this.report.rhombus == '' || this.report.rhombus == null) {
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
