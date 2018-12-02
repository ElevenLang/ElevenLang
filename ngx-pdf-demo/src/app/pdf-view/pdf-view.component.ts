import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.css']
})
export class PdfViewComponent implements OnInit {
  pdfSrc: string = '../../assets/doctor.pdf';
  constructor() { }

  ngOnInit() {
  }

}
