import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, timer, combineLatest, from, of, zip, empty, Observable } from 'rxjs';
import {
    buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, concat,
    take, map, combineAll, delay, merge, concatAll, mergeAll, pairwise, mapTo, race, startWith, scan, withLatestFrom, defaultIfEmpty, every
} from 'rxjs/operators';
@Component({
    selector: 'app-operate',
    templateUrl: './operate.component.html',
    styleUrls: ['./operate.component.css']
})
export class OperateComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        // buffer
        // // 创建每1秒发出值的 observable
        // const myInterval = interval(1000);
        // // 创建页面点击事件的 observable
        // const bufferBy = fromEvent(document, 'click');
        // /*
        //   收集由 myInterval 发出的所有值，直到我们点击页面。此时 bufferBy 会发出值以完成缓存。
        //   将自上次缓冲以来收集的所有值传递给数组。
        // */
        // const myBufferedInterval = myInterval.pipe(buffer(bufferBy));
        // // 打印值到控制台
        // // 例如 输出: [1,2,3] ... [4,5,6,7,8]
        // const subscribe = myBufferedInterval.subscribe(val =>
        //   console.log(' Buffered Values:', val)
        // );

        // bufferCount
        // interval(1000).pipe(bufferCount(3)).subscribe(v => console.log(v));
        // interval(1000).pipe(bufferCount(3, 1)).subscribe(v => console.log(v));

        // bufferTime ?
        // interval(500).pipe(bufferTime(2000)).subscribe(v => console.log(v));
        // interval(500).pipe(bufferTime(2000, 1000)).subscribe(v => console.log('Start Buffer Every 1s:', v));

        // bufferToggle ?
        // const sourceInterval = interval(1000);
        // const startInterval = interval(5000);
        // const closingInterval = val => {
        //   console.log(`Value ${val} emitted, starting buffer! Closing in 3s!`);
        //   return interval(3000);
        // };
        // const bufferToggleInterval = sourceInterval.pipe(
        //   bufferToggle(startInterval, closingInterval)
        // );
        // bufferToggleInterval.subscribe(val => console.log('Emitted Buffer:', val));

        // bufferWhen
        // interval(1000).pipe(bufferWhen(() => interval(5000))).subscribe(val => console.log('Emitted Buffer: ', val));

        // combineAll
        // const source = interval(1000).pipe(take(2));
        // const example = source.pipe(
        //   map(val => interval(1000).pipe(map(i => `Result (${val}): ${i}`), take(5)))
        // );
        // const combined = example.pipe(combineAll());
        // combined.subscribe(val => console.log(val));

        // combineLatest
        // const timeOne = timer(1000, 4000);
        // const timeTwo = timer(2000, 4000);
        // const timeThree = timer(3000, 4000);
        // const combined = combineLatest(timeOne, timeTwo, timeThree);
        // combined.subscribe(latestValues => {
        //   const [timerValOne, timerValTwo, timerValThree] = latestValues;
        //   console.log(
        //     `Timer One Latest: ${timerValOne},
        //      Timer Two Latest: ${timerValTwo},
        //      Timer Three Latest: ${timerValThree}`
        //   );
        // });

        // of from
        // const a = of([{name: 'Joe', age: 30}, {name: 'Frank', age: 20},{name: 'Ryan', age: 50}]);
        // a.pipe(map(item => {
        //   console.log(item);
        // })).subscribe();

        // of(1, 2, 3).subscribe(item => console.log(item));
        // of('hello').subscribe(item => console.log(item));



        // combineAll
        // interval(1000).pipe(
        //   take(2),
        //   // map(item => item * 10)
        //   map(item => interval(1000).pipe(map(i => `Result (${item}): ${i}`), take(5))),
        //   combineAll()
        // ).subscribe(v => console.log(v));


        // combineLatest
        // combineLatest(interval(1000).pipe(take(3)),
        // interval(1000).pipe(take(5)), (s, d) => `source: ${s} and dist: ${d}`).subscribe(v => console.log(v));

        // const source = interval(1000).pipe(take(3));
        // const dist = interval(1000).pipe(take(5));
        // source.combineLatest(dist, (s, d) => `source: ${s} and dist: ${d}`);

        // concat 按照时间顺序，前一个observable完成了再订阅下一个observable并发出值
        // 如果不需要关心产生值的顺序，可以用merge来代替
        // const sourceOne = of(1, 2, 3);
        // const sourceTwo = of(4, 5, 6);
        // sourceOne.pipe(concat(sourceTwo))
        // .subscribe(v => console.log('Example: Basic concat:', v));
        // sourceOne.subscribe(v => console.log(v));
        // concat(sourceOne, sourceTwo).subscribe(v => console.log(v));
        // const sourceThree = sourceOne.pipe(delay(3000));
        // const example = sourceThree.pipe(concat(sourceTwo));
        // example.subscribe(val => console.log('Example: Delayed source one:', val));
        // sourceThree.pipe(
        //   merge(sourceTwo)
        // ).subscribe(v => console.log(v));


        // concatAll
        // const source = interval(2000);
        // const example = source.pipe(
        //   // 为了演示，增加10并作为 observable 返回
        //   map(val => of(val + 10)),
        //   // 合并内部 observables 的值
        //   concatAll()
        // );
        // example.pipe(
        //   map(item => console.log(item))
        // ).subscribe();

        // const samplePromise = val => new Promise(resolve => resolve(val));
        // const source = interval(2000);
        // source.pipe(
        //   map(val => samplePromise(val)),
        //   concatAll()
        // ).subscribe(v => console.log('Example with Promise:', v))

        // const obs1 = interval(1000).pipe(take(5));
        // const obs2 = interval(500).pipe(take(2));
        // const obs3 = interval(2000).pipe(take(1));
        // // 发出3个 observables
        // const source = of(obs1, obs2, obs3);
        // source
        // .pipe(combineAll())
        // .subscribe(v => console.log(v));
        // const source = interval(2000);
        // const example = source.pipe(
        //   // 为了演示，增加10并作为 observable 返回
        //   map(val => of(val + 10)),
        //   // 合并内部 observables 的值
        //   // concatAll()
        // );
        // example.pipe(
        //   map(item => console.log(item))
        // ).subscribe();


        // mergeAll
        // const myPromise = val =>
        //     new Promise(resolve => setTimeout(() => resolve(`Result: ${val}`), 2000));
        // const source = of(1, 2, 3);
        // source.pipe(
        //     map(val => myPromise(val)),
        //     mergeAll()
        // ).subscribe(v => console.log(v));

        // const source = interval(500).pipe(take(5));
        // source.pipe(
        //     map(val =>
        //         source.pipe(
        //             delay(1000),
        //             take(3)
        //         )
        //     ),
        //     mergeAll(2)
        // ).subscribe(v => console.log(v));


        // pairwise
        // interval(1000).pipe(
        //     pairwise(),
        //     take(5)
        // ).subscribe(console.log);

        // race
        // interval(1500).pipe(
        //     race(
        //         interval(1000).pipe(mapTo('is won!')),
        //         interval(2000),
        //         interval(2500)
        //     )
        // ).subscribe(console.log);

        // const first = of('first').pipe(
        //     delay(100),
        //     map(_ => {
        //         throw 'error';
        //     })
        // );
        // const second = of('second').pipe(delay(200));
        // const third = of('third').pipe(delay(300));

        // first.pipe(
        //     race(second, third)
        // ).subscribe(console.log);


        // startWith
        // of(1, 2, 3).pipe(
        //     startWith(-1)
        // ).subscribe(console.log);

        // of('World!', 'Goodbye', 'World!').pipe(
        //     startWith('Hello'),
        //     scan((acc, curr) => `${acc} ${curr}`)
        // ).subscribe(console.log);

        // interval(1000).pipe(
        //     startWith(-3, -2, -1)
        // ).subscribe(console.log);



        // withLatestForm
        // interval(5000).pipe(
        //     withLatestFrom(interval(1000)),
        //     map(([first, second]) => {
        //         return `First Source (5s): ${first} Second Source (1s): ${second}`;
        //     })
        // ).subscribe(console.log);

        // // 两个 observable 在发出值前要确保至少都有1个值 (需要等待5秒)
        // interval(1000).pipe(
        //     withLatestFrom(interval(5000)),
        //     map(([first, second]) => {
        //         return `Source (1s): ${first} Latest From (5s): ${second}`;
        //       })
        // ).subscribe(console.log);


        // zip
        // const sourceOne = of('Hello');
        // const sourceTwo = of('World!');
        // const sourceThree = of('Goodbye');
        // const sourceFour = of('World!');
        // zip(
        //     sourceOne,
        //     sourceTwo.pipe(delay(1000)),
        //     sourceThree.pipe(delay(2000)),
        //     sourceFour.pipe(delay(3000))
        // ).subscribe(console.log);

        // const source = interval(1000);
        // zip(
        //     source,
        //     source.pipe(take(2))
        // ).subscribe(console.log);

        // defaultIfEmpty
        // of().pipe(
        //     defaultIfEmpty('Observable.of() Empty!')
        // ).subscribe(console.log);

        // empty().pipe(
        //     defaultIfEmpty('Observable.empty()!')
        // ).subscribe(console.log);


        // every
        // of(1, 2, 3, 4, 5).pipe(
        //     every(val => val % 2 === 0)
        // ).subscribe(console.log);

        // of(2, 4, 6, 8, 10).pipe(
        //     every(val => val % 2 === 0)
        // ).subscribe(console.log);


        // observable
        // const hello = Observable.create(function (observer) {
        //     observer.next('Hello');
        //     observer.next('World');
        // });

        // const subscribe = hello.subscribe(val => console.log(val));

        const evenNumbers = Observable.create(function(observer) {
            let value = 0;
            const interval = setInterval(() => {
              if (value % 2 === 0) {
                observer.next(value);
              }
              value++;
            }, 1000);
          
            // return () => clearInterval(interval);
          });
          // 输出: 0...2...4...6...8
          const subscribe = evenNumbers.subscribe(val => console.log(val));
          // 10秒后取消订阅
          setTimeout(() => {
            subscribe.unsubscribe();
          }, 10000);











    }

}
