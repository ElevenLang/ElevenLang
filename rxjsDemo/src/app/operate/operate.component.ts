import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, timer, combineLatest, from, of } from 'rxjs';
import { buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, concat, take, map, combineAll, delay, merge, concatAll } from 'rxjs/operators';
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
  }

}
