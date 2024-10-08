import { Injectable } from '@angular/core';
import { DropdownQuestion } from '../models/question-form/question-form.module';
import { QuestionBase } from '../models/question-base/question-base.module';
import { TextboxQuestion } from '../models/question-form/question-form.module';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, Subscription } from 'rxjs';

interface SidebarResponse {
  sidebar: Array<Record<string, Array<Record<string, Array<{ component: string }>>>>>;
}

@Injectable()
export class QuestionService {
  constructor(private http: HttpClient) {}

  configUrl = 'https://360f61b3-f218-4700-b82d-d8ea385acb8a.mock.pstmn.io/dinamyc_form';

  sidebarUrl = "https://360f61b3-f218-4700-b82d-d8ea385acb8a.mock.pstmn.io/sidebard"

  getConfig(): Observable<QuestionBase<string>[]> {
    return this.http.get<QuestionBase<string>[]>(this.configUrl).pipe(
      map(value => value.sort((a, b) => a.order - b.order))
    );
  }
  
  public getQuestions(): Observable<QuestionBase<string>[]> {
    return this.getConfig();
  }

  public getItemSidebard(): Observable<SidebarResponse> {
    return this.http.get<SidebarResponse>(this.sidebarUrl);
  }
}
