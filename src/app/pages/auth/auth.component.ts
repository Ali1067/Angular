import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatRadioModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  isRegister = false;



  registrationForm=new FormGroup({
    fullName:new FormControl("",[Validators.required]),
email:new FormControl("",[Validators.required, Validators.email]),
password:new FormControl("",[Validators.required, Validators.minLength(6),])

  })
 
  
  loginForm=new FormGroup({
    email:new FormControl("",[Validators.required, Validators.email]),
    password:new FormControl("",[Validators.required,])
    
      })

  // onSubmit(){
  //   console.log("Values submitted", this.recipeItem)
  // }

  handleRegister(){
    console.log("register", this.registrationForm.value);
    // this.isRegister = true;
  }

  handleLogin(){
    console.log("login", this.loginForm.value);
    // this.isRegister = false;
  }

  togglePanel(){
    this.isRegister=!this.isRegister
  }
}
