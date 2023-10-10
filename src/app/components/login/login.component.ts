import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  registerForm = this.fb.group({


    email:['',[Validators.required]],
    password:['',[Validators.required]],

  })

  constructor(private fb:FormBuilder){}


onSubmit(){

  console.log(this.registerForm.valid)
  console.log(this.registerForm.value)
}


}
