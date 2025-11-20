import { Component, OnInit } from '@angular/core';  
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class SettingsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
