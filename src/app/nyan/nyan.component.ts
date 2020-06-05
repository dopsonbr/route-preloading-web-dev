import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nyan',
  template: `
    <img src="/assets/nyan.png">
    <div><button routerLink="./nested">nested</button> </div>
    <div><button routerLink="../about">about</button> </div>
    <li *ngFor="let l of list;index as i"> {{i}}</li>
  `,
  styleUrls: ['./nyan.component.css']
})
export class NyanComponent {
  list = Array(50);
  constructor(private router: Router) {
  }

}
