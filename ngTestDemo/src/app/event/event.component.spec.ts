import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventComponent } from './event.component';

describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should set 😜 on click', () => {
  //   // const fixture = TestBed.createComponent(EventComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   // expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');

  //   const h1 = compiled.querySelector('h1');
  //   h1.trigger('click');
  //   // h1.triggerEventHandler('click', {});
  //   fixture.detectChanges();
  
  //   expect(
  //     h1.textContent
  //   ).toEqual('😜');
  // });
  it('click event', async(() => {
    spyOn(component, 'onEditButtonClick');

    const h1 = fixture.debugElement.nativeElement.querySelector('h1');
    h1.click();

    fixture.whenStable().then(() => {
      expect(component.onEditButtonClick).toHaveBeenCalled();
    });
  }));
});

///https://stackoverflow.com/questions/40093013/unit-testing-click-event-in-angular