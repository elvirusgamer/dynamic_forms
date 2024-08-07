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
        key: 'ejemplo',
        label: 'esto es un ejemplo',
        required: false,
        order: 1,
      }),
      new DropdownQuestion({
        key: 'favoriteAnimal',
        label: 'Favorite Animal',
        options: [
          {key: 'cat', value: 'Cat'},
          {key: 'dog', value: 'Dog'},
          {key: 'horse', value: 'Horse'},
          {key: 'capybara', value: 'Capybara'},
        ],
        order: 5,
      }),
      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        required: true,
        order: 2,
      }),
      new TextboxQuestion({
        key: 'ejemplo',
        label: 'ejemplo',
        required: true,
        order: 6,
      }),
      new TextboxQuestion({
        key: 'SecundtName',
        label: 'Secund name',
        required: true,
        order: 3,
      }),
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        required: true,
        order: 4,
      }),
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
}