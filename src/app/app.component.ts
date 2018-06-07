import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  page = 'recipes';

  pageChanged(pageEvt) {
    console.log(pageEvt);
    this.page = pageEvt;
  }
}
