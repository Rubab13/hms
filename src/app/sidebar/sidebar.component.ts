import { Component, OnInit } from '@angular/core';
import { MenuState } from '../services/MenuState';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private menuState: MenuState) { }

  sideBarOpen: boolean = false;
  ngOnInit(): void {
    this.menuState.booleanValue$.subscribe((value: boolean) => {
      console.log(value);
      this.sideBarOpen = value;
    });
  }

}
