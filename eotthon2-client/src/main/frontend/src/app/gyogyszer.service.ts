import { Injectable } from '@angular/core';

import { Gyogyszer } from './gyogyszer';

import { GYOGYSZEREK } from './mock-gyogyszerek';

@Injectable()
export class GyogyszerService {
	getGyogyszerek(): Promise<Gyogyszer[]> {
    return Promise.resolve(GYOGYSZEREK);
  }
 
 getGyogyszerekSlowly(): Promise<Gyogyszer[]> {
  return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(this.getGyogyszerek()), 2000);
  });
}
 
}