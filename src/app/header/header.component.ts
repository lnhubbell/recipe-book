import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onPageChange = new EventEmitter<{page: string}>();

  constructor() { }

  ngOnInit() {
  }

  pageChange(pageName: string) {
    this.onPageChange.emit(pageName)
  }

}
