import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {


  @Output() OnClick: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('click', ['$event.target'])
  onClick(btn: any) {
    console.log('button', btn);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
