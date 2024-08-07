import {QuestionBase} from '../question-base/question-base.module';
export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'textbox';
}