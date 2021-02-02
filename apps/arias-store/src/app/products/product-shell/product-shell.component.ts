import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'angular-ngrx-demo-product-shell',
  templateUrl: './product-shell.component.html',
  styleUrls: ['./product-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductShellComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
