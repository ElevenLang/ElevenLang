import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, timer, combineLatest } from 'rxjs';
import { buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, take, map, combineAll } from 'rxjs/operators';
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
    const timeOne = timer(1000, 4000);
    const timeTwo = timer(2000, 4000);
    const timeThree = timer(3000, 4000);
    const combined = combineLatest(timeOne, timeTwo, timeThree);
    combined.subscribe(latestValues => {
      const [timerValOne, timerValTwo, timerValThree] = latestValues;
      console.log(
        `Timer One Latest: ${timerValOne},
         Timer Two Latest: ${timerValTwo},
         Timer Three Latest: ${timerValThree}`
      );
    });





  }

}
