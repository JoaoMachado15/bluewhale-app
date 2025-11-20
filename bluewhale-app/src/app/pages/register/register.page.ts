import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RegisterPage {
  name = '';
  email = '';
  password = '';
  agree = false;

  constructor(private router: Router) {}

  onSubmit() {
    // protótipo estático → finge que criou conta e volta ao login
    this.router.navigateByUrl('/login');
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }

  googleRegister() {
  console.log("teste register");
}

 
text:String = 'Fill your information below or register with your social accounts.';

}
