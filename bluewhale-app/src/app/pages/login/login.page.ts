import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private router: Router) {}

  onSubmit() {
    // protótipo estático → só navega para "home"
    this.router.navigateByUrl('/tabs/dashboard');
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
  }


  googleLogin() {
  console.log("teste login");
}
}
