import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ivy-test-lib',
  template: `
    <p *ngIf="true">
      ivy-test-lib works!
    </p>
  `,
  styles: []
})
export class IvyTestLibComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
