import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { filter, map, scan, take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // interval(1000)
    //   .pipe(
    //     filter(item => item % 2 === 0),
    //     map(x => x + x),
    //     scan((acc, curr) => acc + curr)
    //   )
    //   .subscribe(v =>
    //     console.log(v)

    //   )

    /**
 * 取每第N个值的操作符
 */
    const takeEveryNth = (n: number) => <T>(source: Observable<T>) =>
      new Observable<T>(observer => {
        let count = 0;
        return source.subscribe({
          next(x) {
            if (count++ % n === 0) observer.next(x);
          },
          error(err) { observer.error(err); },
          complete() { observer.complete(); }
        })
      });

    /**
    * 还可以使用现有的操作符
    */
    const takeEveryNthSimple = (n: number) => <T>(source: Observable<T>) =>
      source.pipe(filter((value, index) => index % n === 0))

    /**
     * 因为 pipeable 操作符返回的是函数，还可以进一步简化
     */
    const takeEveryNthSimplest = (n: number) => filter((value, index) => index % n === 0);

    interval(1000).pipe(
      takeEveryNth(2),
      map(x => x + x),
      takeEveryNthSimple(3),
      map(x => x * x),
      takeEveryNthSimplest(4),
      take(3),
      toArray()
    )
    .subscribe(x => console.log(x));
    // [0, 12, 24]


  }

}
