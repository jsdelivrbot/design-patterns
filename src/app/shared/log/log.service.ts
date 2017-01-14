import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class LogService {
  private Source = new Subject<any>();

  streams$ = this.Source.asObservable();

  add(results) {
    this.Source.next(results);
  }
}
