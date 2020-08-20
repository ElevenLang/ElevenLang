import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app222';
  phoneNumber;
<<<<<<< HEAD
  condition = false;
=======
  color: string;
>>>>>>> d8a0598e041935c71588a9b309d8d0fe2737ab21
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'angular',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/angular_solidBlack.svg'));
      this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
