import { TestBed, async, ComponentFixtureAutoDetect, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.debugElement.componentInstance;
    });
  }));
  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    // fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});



// describe('The "toBe" matcher compares with ===', function() {
//   it('and has a positive case', function() {
//     expect(true).toBe(true);
//   });
//   it('and can have a negative case', function() {
//     expect(false).not.toBe(true);
//   });
// });


// describe('Included matchers:', function () {

//   it('The "toBe" matcher compares with ===', function () {
//     const a = 12;
//     const b = a;

//     expect(a).toBe(b);
//     expect(a).not.toBe(null);
//   });

//   describe('The "toEqual" matcher', function () {

//     it('works for simple literals and variables', function () {
//       const a = 12;
//       expect(a).toEqual(12);
//     });

//     it('should work for objects', function () {
//       const foo = {
//         a: 12,
//         b: 34
//       };
//       const bar = {
//         a: 12,
//         b: 34
//       };
//       expect(foo).not.toEqual(bar);
//     });
//   });

//   it('The "toMatch" matcher is for regular expressions', function () {
//     const message = 'foo bar baz';

//     expect(message).toMatch(/bar/);
//     expect(message).toMatch('bar');
//     expect(message).not.toMatch(/quux/);
//   });

//   it('The "toBeDefined" matcher compares against `undefined`', function () {
//     const a = {
//       foo: 'foo'
//     };

//     expect(a.foo).toBeDefined();
//     expect(a.bar).not.toBeDefined();
//   });

//   it('The `toBeUndefined` matcher compares against `undefined`', function () {
//     const a = {
//       foo: 'foo'
//     };

//     expect(a.foo).not.toBeUndefined();
//     expect(a.bar).toBeUndefined();
//   });

//   it('The \'toBeNull\' matcher compares against null', function () {
//     const a = null;
//     const foo = 'foo';

//     expect(null).toBeNull();
//     expect(a).toBeNull();
//     expect(foo).not.toBeNull();
//   });

//   it('The \'toBeTruthy\' matcher is for boolean casting testing', function () {
//     var a, foo = 'foo';

//     expect(foo).toBeTruthy();
//     expect(a).not.toBeTruthy();
//   });

//   it('The \'toBeFalsy\' matcher is for boolean casting testing', function () {
//     var a, foo = 'foo';

//     expect(a).toBeFalsy();
//     expect(foo).not.toBeFalsy();
//   });

//   describe('The \'toContain\' matcher', function () {
//     it('works for finding an item in an Array', function () {
//       const a = ['foo', 'bar', 'baz'];

//       expect(a).toContain('bar');
//       expect(a).not.toContain('quux');
//     });

//     it('also works for finding a substring', function () {
//       const a = 'foo bar baz';

//       expect(a).toContain('bar');
//       expect(a).not.toContain('quux');
//     });
//   });

//   it('The \'toBeLessThan\' matcher is for mathematical comparisons', function () {
//     const pi = 3.1415926,
//       e = 2.78;

//     expect(e).toBeLessThan(pi);
//     expect(pi).not.toBeLessThan(e);
//   });

//   it('The \'toBeGreaterThan\' matcher is for mathematical comparisons', function () {
//     const pi = 3.1415926,
//       e = 2.78;

//     expect(pi).toBeGreaterThan(e);
//     expect(e).not.toBeGreaterThan(pi);
//   });

//   it('The \'toBeCloseTo\' matcher is for precision math comparison', function () {
//     const pi = 3.1415926,
//       e = 2.78;

//     expect(pi).not.toBeCloseTo(3.1966, 2);
//     expect(pi).toBeCloseTo(e, 0);

//     const a = 1.1;
//     const b = 1.5;
//     const c = 1.455;
//     const d = 1.459;

//     expect(a).toBeCloseTo(b, 0);
//     expect(a).not.toBeCloseTo(c, 1);
//     expect(c).toBeCloseTo(d);
//   });

//   it('The \'toThrow\' matcher is for testing if a function throws an exception', function () {
//     const foo = function () {
//       return 1 + 2;
//     };
//     const bar = function () {
//       return a + 1;
//     };
//     const baz = function () {
//       throw 'what';
//     };

//     expect(foo).not.toThrow();
//     expect(bar).toThrow();
//     expect(baz).toThrow('what');
//   });

//   it('The \'toThrowError\' matcher is for testing a specific thrown exception', function () {
//     const foo = function () {
//       throw new TypeError('foo bar baz');
//     };

//     expect(foo).toThrowError('foo bar baz');
//     expect(foo).toThrowError(/bar/);
//     expect(foo).toThrowError(TypeError);
//     expect(foo).toThrowError(TypeError, 'foo bar baz');
//   });
// });


describe('A spec', function () {
  it('is just a function, so it can contain any code', function () {
    let foo = 0;
    foo += 1;
    expect(foo).toEqual(1);
  });

  it('', function () {
    let foo = 0;
    foo += 1;
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });
});


describe('A spec (with setup and tear-down)', function () {
  let foo;
  beforeEach(function () {
    foo = 0;
    foo += 1;
  });
  // afterEach(function () {
  //   foo = 0;
  // });

  it('is just a function, so it can contain any code', function () {
    expect(foo).toEqual(1);
  });

  it('can have more than one expectation', function () {
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });
});



describe('A spec this', function() {
  beforeEach(function() {
    this.foo = 0;
  });

  it('can use the `this` to share state', function() {
    expect(this.foo).toEqual(0);
    this.bar = 'test pollution?';
  });

  it('prevents test pollution by having an empty `this` created for the next spec', function() {
    expect(this.foo).toEqual(0);
    expect(this.bar).toBe(undefined);
    // expect(this.bar).toBeNull();
  });
});


describe('A spec nesting describe blocks', function() {
  let foo;

  beforeEach(function() {
    foo = 0;
    foo += 1;
  });

  afterEach(function() {
    foo = 0;
  });

  it('is just a function, so it can contain any code', function() {
    expect(foo).toEqual(1);
  });

  it('can have more than one expectation', function() {
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });

  describe('nested inside a second describe', function() {
    let bar;

    beforeEach(function() {
      bar = 1;
    });

    it('can reference both scopes as needed', function() {
      expect(foo).toEqual(bar);
    });
  });
});


xdescribe('A spec xdescribe', function() {
  let foo;

  beforeEach(function() {
    foo = 0;
    foo += 1;
  });

  it('is just a function, so it can contain any code', function() {
    expect(foo).toEqual(1);
  });
});

describe('Pending specs', function() {
  xit('can be declared \'xit\'', function() {
    expect(true).toBe(false);
  });
  it('can be declared with \'it\' but without a function');
  it('can be declared by calling \'pending\' in the spec body', function() {
    expect(true).toBe(false);
    pending();
  });
});


describe('A spy', function() {
  var foo, bar = null;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };
    // bar += 1;
    spyOn(foo, 'setBar');

    foo.setBar(123);
    foo.setBar(456, 'another param');
  });

  it('tracks that the spy was called', function() {
    expect(foo.setBar).toHaveBeenCalled();
  });

  it('tracks all the arguments of its calls', function() {
    expect(foo.setBar).toHaveBeenCalledWith(123);
    expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
  });

  it('stops all execution on a function', function() {
    expect(bar).toBeNull();
    expect(bar).toEqual(1);
  });
});


describe('A spy, when configured to call through', function() {
  var foo, bar, fetchedBar;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      },
      getBar: function() {
        return bar;
      }
    };

    spyOn(foo, 'getBar').and.callThrough();

    foo.setBar(123);
    fetchedBar = foo.getBar();
  });

  it('tracks that the spy was called', function() {
    expect(foo.getBar).toHaveBeenCalled();
  });

  it('should not affect other functions', function() {
    expect(bar).toEqual(123);
  });

  it('when called returns the requested value', function() {
    expect(fetchedBar).toEqual(123);
  });
});


describe('A spy, when configured to fake a return value', function() {
  var foo, bar, fetchedBar;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      },
      getBar: function() {
        return bar;
      }
    };

    spyOn(foo, 'getBar').and.returnValue(745);

    foo.setBar(123);
    fetchedBar = foo.getBar();
  });

  it('tracks that the spy was called', function() {
    expect(foo.getBar).toHaveBeenCalled();
  });

  it('should not affect other functions', function() {
    expect(bar).toEqual(123);
  });

  it('when called returns the requested value', function() {
    expect(fetchedBar).toEqual(745);
  });
});


describe('A spy, when configured with an alternate implementation', function() {
  var foo, bar, fetchedBar;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      },
      getBar: function() {
        return bar;
      }
    };


    spyOn(foo, 'getBar').and.callFake(function(_arguments: any, can: any, be: any, received: any) {
      return 1001;
    });

    foo.setBar(123);
    fetchedBar = foo.getBar();
  });

  it('tracks that the spy was called', function() {
    expect(foo.getBar).toHaveBeenCalled();
  });

  it('should not affect other functions', function() {
    expect(bar).toEqual(123);
  });

  it('when called returns the requested value', function() {
    expect(fetchedBar).toEqual(1001);
  });
});


