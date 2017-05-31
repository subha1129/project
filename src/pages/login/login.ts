import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  submitAttempt: boolean = false; 
  RegisterForm : FormGroup;
  

  public login: {email?: any, password?: any} = {};
 // submitted = false;

  constructor(public navCtrl: NavController ,
              private formBuilder: FormBuilder) {
    this.RegisterForm = formBuilder.group({
            'email': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(25)])],
            'password': ['', [Validators.required, Validators.minLength(5), Validators.maxLength(45)]]
            });
    
  }
 ionViewDidLoad() {
  }

  onLogin() {
  
   if (!this.RegisterForm.valid) {
      this.submitAttempt = true; 
    }
 
    else {
        this.navCtrl.push(HomePage,{userobj: this.login});
        console.log("Success!")
        console.log(this.RegisterForm.value);
    }
   

  }

}