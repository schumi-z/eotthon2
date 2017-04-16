import { Component, OnInit  } from '@angular/core';

import { Gyogyszer } from './gyogyszer';

import { GyogyszerService } from './gyogyszer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GyogyszerService]
})


export class AppComponent implements OnInit{
  title = 'Gyogyszerek!';
  selectedGyogyszer: Gyogyszer;
  gyogyszerek: Gyogyszer[];
  
  constructor(private gyogyszerService: GyogyszerService) { }
  
  
   getGyogyszerek(): void {
    this.gyogyszerService.getGyogyszerekSlowly().then(gyogyszerek => this.gyogyszerek = gyogyszerek);
  }
  
  ngOnInit(): void {
    this.getGyogyszerek();
  }
  
   onSelect(gyogyszer: Gyogyszer): void {
		this.selectedGyogyszer = gyogyszer;
  }
}
