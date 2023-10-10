import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CustomValidator } from 'src/app/validators/custom-validator';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });


  // profileForm = this.fb.group({
  //   firstName: ['',
  //   //Validators.required,
  //   [Validators.required,Validators.minLength(3)]
  // ],
  //   lastName: ['',
  //   //Validators.required,
  //   [Validators.required,Validators.minLength(3),CustomValidator.checkFirstAndLastUppercase()]
  // ],
  //   address: this.fb.group({
  //     street: [''],
  //     city: [''],
  //     state: ['',CustomValidator.checkAddressUSA()],
  //     zip: ['']
  //   }),
  //   aliases: this.fb.array([
  //     this.fb.control('')
  //   ])
  // });


  registerForm = this.fb.group({

    username:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,CustomValidator.isPasswordValid()]],
    country:[''],
    yob:[new Date().getFullYear(),[Validators.required,CustomValidator.checkNotMinor()]],
    phoneNumber:[''],
    gender:['']
  })

  constructor(private fb:FormBuilder){}


onSubmit(){

  console.log(this.registerForm.valid)
  console.log(this.registerForm.value)
}


  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
  //   console.warn(JSON.stringify(this.profileForm.value,null,4));
  // }

  // updateProfile() {
  //   this.profileForm.patchValue({
  //     firstName: 'Nancy',
  //     address: {
  //       street: '123 Drew Street',
  //       city:'New York'
  //     }
  //   });
  // }

  // getAliases() {
  //   return this.profileForm.get('aliases') as FormArray;
  // }

  // addAlias() {
  //   this.getAliases().push(this.fb.control(''));
  // }

}
