import { Injectable } from '@angular/core';
import { DropdownQuestion } from '../models/question-form/question-form.module';
import { QuestionBase } from '../models/question-base/question-base.module';
import { TextboxQuestion } from '../models/question-form/question-form.module';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, Subscription } from 'rxjs';

@Injectable()
export class QuestionService {
  constructor(private http: HttpClient) {}

  configUrl = 'https://360f61b3-f218-4700-b82d-d8ea385acb8a.mock.pstmn.io/dinamyc_form';

  getConfig(): Observable<QuestionBase<string>[]> {
    return this.http.get<QuestionBase<string>[]>(this.configUrl).pipe(
      map(value => value.sort((a, b) => a.order - b.order))
    );
  }
  
  public getQuestions(): Observable<QuestionBase<string>[]> {
    return this.getConfig();
  }
}
