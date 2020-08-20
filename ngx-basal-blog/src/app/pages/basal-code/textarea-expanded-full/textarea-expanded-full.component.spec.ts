import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaExpandedFullComponent } from './textarea-expanded-full.component';

describe('TextareaExpandedFullComponent', () => {
  let component: TextareaExpandedFullComponent;
  let fixture: ComponentFixture<TextareaExpandedFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextareaExpandedFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaExpandedFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
