import { MaterialService } from './../../../services/material/material.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  public material = {
    name : '',
    size : '',
    measure : '',
    quantity : ''
  }

  constructor(private materialService:MaterialService) { }

  ngOnInit(): void {
  }

  formSubmit(signupForm: NgForm){

    console.log(this.material);
    if(this.material.name == '' || this.material.name == null){
      alert('El nombre de usuario es requerido !!');
      return;
    }

    this.materialService.añadirUsuario(this.material).subscribe(
      (data) => {
        console.log(data);
        alert('Usuario guardado exitosamente');
      },(error) => {
        console.log(error);
        alert('Ha ocurrido un error en el sistema');
      }
    )

    signupForm.resetForm();
  }

}
