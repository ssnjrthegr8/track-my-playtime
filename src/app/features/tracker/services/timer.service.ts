import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AddTimerInfo, HistoryListItem } from '../models';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class TimerService {

  constructor(private http: HttpClient) { }

  saveTimerInfo(info: AddTimerInfo): Observable<HistoryListItem> {
    return this.http.post<HistoryItemResponse>(environment.urls.saveTimerInfo, info)
      .map(res => res._data);
  }
}

interface HistoryItemResponse {
  _data: HistoryListItem;
}
