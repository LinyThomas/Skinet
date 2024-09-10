import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusyService {

  loading = false;
  busyrequestCount = 0;

  busy() {
    this.busyrequestCount++;
    this.loading = true;
  }

  idle() {
    this.busyrequestCount--;
    if (this.busyrequestCount <= 0)
    {
      this.busyrequestCount = 0;
      this.loading = false;
    }
  }
}
