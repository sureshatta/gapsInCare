import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-model-popup',
  templateUrl: './model-popup.component.html',
  styleUrls: ['./model-popup.component.scss']
})
export class ModelPopupComponent implements OnInit {
  @ViewChild('lgModel', {static: false}) lgModel: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  showModal() {
    $(this.lgModel.nativeElement).modal('show');
  }

}
