import { Gyogyszer } from './gyogyszer';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'gyogyszer-detail',
  templateUrl: './gyogyszer-detail.component.html'
})
export class GyogyszerDetailComponent {
	 @Input() gyogyszer: Gyogyszer;
}