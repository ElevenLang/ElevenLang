import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {

  }

  ngOnInit() {
    // this.matIconRegistry.addSvgIconInNamespace(
    //   'custom-svg',
    //   'angular',
    //   this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/angular_solidBlack.svg'));
    //   this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

}
