import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild('container') container!: ElementRef;

  constructor() {}

  generarPDF() {

    const anchoMax = 794;
    const altoMax = 1123;
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [anchoMax,altoMax]
    });

    const content = this.container.nativeElement.querySelector('.dashboard-content') as HTMLElement;

    content.style.maxWidth = anchoMax+"px";

    doc.html(content, {
      callback: (pdf) =>  {
        pdf.save('Dashboard.pdf');
        content.style.maxWidth = "100%";
      }
    })
  }

}
