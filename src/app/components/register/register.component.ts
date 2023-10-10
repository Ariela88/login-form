import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CustomValidator } from 'src/app/validators/custom-validator';
import {FormsModule } from '@angular/forms'
import { StorageService } from 'src/app/services/storage.service';
import {ErrorStateMatcher} from '@angular/material/core';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,NgIf,MatInputModule,MatFormFieldModule,MatOptionModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  emailFormControl = new FormControl;
  matcher = new ErrorStateMatcher();
  showPassword: boolean = false;

  registerForm = this.fb.group({

    username:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    email:['',[Validators.required,Validators.email]],
    password: ['', [Validators.required, CustomValidator.CustomPasswordValidator(), CustomValidator.KeywordValidator()]],
    showPassword: [false],
    country:[''],
    yob: [2023, [Validators.required, CustomValidator.checkNotMinor()]],
    gender:[''],
    phoneNumber:['']
  })

  constructor(private fb:FormBuilder, private storage:StorageService){}


onSubmit(){

  console.log(this.registerForm.valid)
  console.log(this.registerForm.value)
  this.storage.saveUser(this.registerForm.value)

}

togglePasswordVisibility() {
  this.showPassword = !this.showPassword;
} 
}
