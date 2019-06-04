import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular Application';
  myFirstMethod(){
    console.log("This is getting executed");
    this.title="My application is getting changed";
  }
}
