import {Component} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {DynamicFormComponent} from './components/dynamic-form/dynamic-form.component';
import {QuestionService} from './services/question.service';
import {QuestionBase} from './models/question-base/question-base.module';
import {Observable} from 'rxjs';
@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div>
      <h2>test dinamy form</h2>
      <app-dynamic-form [questions]="questions$ | async"></app-dynamic-form>
    </div>
  `,
  providers: [QuestionService],
  imports: [AsyncPipe, DynamicFormComponent],
})
export class AppComponent {
  questions$: Observable<QuestionBase<any>[]>;
  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}