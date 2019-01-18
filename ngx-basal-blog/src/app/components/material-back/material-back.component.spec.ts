import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialBackComponent } from './material-back.component';

describe('MaterialBackComponent', () => {
  let component: MaterialBackComponent;
  let fixture: ComponentFixture<MaterialBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
