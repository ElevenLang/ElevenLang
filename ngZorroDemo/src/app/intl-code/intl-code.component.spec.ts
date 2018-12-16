import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntlCodeComponent } from './intl-code.component';

describe('IntlCodeComponent', () => {
  let component: IntlCodeComponent;
  let fixture: ComponentFixture<IntlCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntlCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntlCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
