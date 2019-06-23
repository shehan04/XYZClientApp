import { Component,ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'XYZ Electricals';
  isShowHeader: boolean = true;

  constructor(private router: Router, vRef: ViewContainerRef){
   // this.toastr.setRootViewContainerRef(vRef);
  }

  ngOnInit() {
    // listenging to routing navigation event
    this.router.events.subscribe(event => this.modifyHeader(event));


   }

  modifyHeader(location) {
    if (location.url == "" || location.url == "/login" )
    {
        this.isShowHeader = false;
    } else {
          this.isShowHeader = true;
      }
 }

}
