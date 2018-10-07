import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  sidebarIsActive : boolean;

  ngOnInit(){
    this.sidebarIsActive = false;
  }

  toggleSidebar(){
    this.sidebarIsActive = !this.sidebarIsActive;
  }
  
}
