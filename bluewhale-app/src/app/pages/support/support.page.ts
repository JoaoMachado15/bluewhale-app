import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-support',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
