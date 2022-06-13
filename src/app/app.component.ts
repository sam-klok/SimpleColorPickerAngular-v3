import { Component } from '@angular/core';
//import { H8kNavbar } from 'h8k-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SimpleColorPickerAngular-v3';
  colorOptions: string[] = ['darkblue','#5d77f5', '#0fd085', '#ffba5b', '#f95e62','black', 'lightpink'];
  initialColor: string = 'black';
}
