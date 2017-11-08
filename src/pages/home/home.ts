import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public loginForm: any;
  messageEmail = ""
  messagePassword = "";
  errorEmail = false;
  errorPassword = false;

  constructor(formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20),
      Validators.required])],
    });
  }

  login() {
    let { email, password } = this.loginForm.controls;

    if (!this.loginForm.valid) {
      if (!email.valid) {
        this.errorEmail = true;
        this.messageEmail = "Ops! Email inválido";
      } else {
        this.messageEmail = "";
      }

      if (!password.valid) {
        this.errorPassword = true;
        this.messagePassword ="A senha precisa ter de 6 a 20 caracteres"
      } else {
        this.messagePassword = "";
      }
    }
    else {
      alert("Login Realizado");
    }
  }

}
