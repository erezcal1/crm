import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  template: `
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">
          <i [ngClass]="icon"></i>
          {{ title | titlecase }}
        </h3>
        <p class="card-text">{{ description | paragraph }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';

  constructor() {}

  ngOnInit(): void {}
}
