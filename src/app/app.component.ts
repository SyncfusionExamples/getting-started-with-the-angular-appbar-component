import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';

  navigateToPage(){
    window.location.href = 'https://www.syncfusion.com/account/manage-trials/start-trials';
  }
}
