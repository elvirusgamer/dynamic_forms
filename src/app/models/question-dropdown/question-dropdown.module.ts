import {QuestionBase} from '../question-base/question-base.module';
export class DropdownQuestion extends QuestionBase<string> {
  override controlType = 'dropdown';
}