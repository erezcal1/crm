import { Component, OnInit } from '@angular/core';

interface Nav_Item {
  title: string;
  icon: string;
  link?: string;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  nav_Items: Nav_Item[] = [
    {
      title: 'costumers',
      icon: 'fas fa-users',
      link: 'customers',
    },
    {
      title: 'contacts',
      icon: 'fas fa-address-book',
      link: 'contacts',
    },
    {
      title: 'leads',
      icon: 'fas fa-hand-point-up',
      link: 'leads',
    },
    {
      title: 'reports',
      icon: 'fa fa-flag',
      link: 'reports',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
