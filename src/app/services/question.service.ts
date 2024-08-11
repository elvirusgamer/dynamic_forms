import {Injectable} from '@angular/core';
import {DropdownQuestion} from '../models/question-dropdown/question-dropdown.module';
import {QuestionBase} from '../models/question-base/question-base.module';
import {TextboxQuestion} from '../models/question-texbox/question-texbox.module';
import {of} from 'rxjs';
@Injectable()
export class QuestionService {
  // TODO: get from a remote source of question metadata
  getQuestions() {
    const questions: QuestionBase<string>[] = [
      new TextboxQuestion({
        key: 'firstName',
        label: 'Firstname',
        required: true,
        order: 1,
        sizeInput: 'field col-6',
      }),
      new TextboxQuestion({
        key: 'lastName',
        label: 'Lastname',
        required: true,
        order: 2,
        sizeInput: 'field col-6',
      }),
      new TextboxQuestion({
        key: 'address',
        label: 'Address',
        required: true,
        order: 3,
        sizeInput: 'field col-12',
      }),
      new TextboxQuestion({
        key: 'city',
        label: 'City',
        required: true,
        order: 4,
        sizeInput: 'field col-4',
      }),
      new DropdownQuestion({
        key: 'state',
        label: 'State',
        options: [
          {key: 'arizona', value: 'Arizona'},
          {key: 'california', value: 'California'},
          {key: 'florida', value: 'Florida'},
          {key: 'ohio', value: 'Ohio'},
          {key: 'washington', value: 'Washington'},
        ],
        required: true,
        order: 5,
        sizeInput: 'field col-3',
      }),
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
}