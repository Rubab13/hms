import { Component, OnInit } from '@angular/core';
import { MenuState } from '../services/MenuState';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private menuState: MenuState) { }

  ngOnInit(): void {
  }

  menuStatus: boolean = false;
  openMenu () {
    this.menuStatus = !this.menuStatus;
    this.menuState.update(this.menuStatus);
  }

}
