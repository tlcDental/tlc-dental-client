import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  @Input('ref') ref: string = '/home';
  @Input('text') text: string = 'Home';
  @Input('tel') isTel: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
