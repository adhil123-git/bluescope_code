import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,private authService: AuthenticationService,private router: Router) {}

    login() {
      if (this.loginForm.valid) {
        this.authService.login(this.loginForm.value).subscribe(
          (response: string) => {
            if (response === 'Login successful') {
     
              alert(response);
              this.router.navigate(['/home']);
            } else {
              alert(response);
            }
          },
          () => {
            alert('Login failed. Please try again.');
          }
        );
      }
    }
   
}
