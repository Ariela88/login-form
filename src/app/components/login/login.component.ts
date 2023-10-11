import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomValidator } from 'src/app/validators/custom-validator';
import { FormsModule } from '@angular/forms'
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  showPassword: boolean = false;

  loginForm = this.fb.group({


    username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    password: ['', [Validators.required, CustomValidator.CustomPasswordValidator(), CustomValidator.KeywordValidator()]],

  })

  constructor(private fb: FormBuilder, private storage: StorageService, private router: Router) { }


  onSubmit() {


    const isUserValid = this.storage.checkUser(this.loginForm.value.username as string, this.loginForm.value.password as string)
console.log(isUserValid)
    if (isUserValid) {
      this.storage.saveLogin()

      this.router.navigateByUrl('/secret')


    }

  }



  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


}
