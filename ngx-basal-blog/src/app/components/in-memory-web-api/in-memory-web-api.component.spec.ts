import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InMemoryWebApiComponent } from './in-memory-web-api.component';

describe('InMemoryWebApiComponent', () => {
  let component: InMemoryWebApiComponent;
  let fixture: ComponentFixture<InMemoryWebApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InMemoryWebApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InMemoryWebApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
