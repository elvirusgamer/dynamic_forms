import {QuestionBase} from '../question-base/question-base.module';

export class DropdownQuestion extends QuestionBase<string> {
  override controlType = 'dropdown';
}

export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'textbox';
}

export class CheckboxQuestion extends QuestionBase<string> {
  override controlType = 'checkbox';
}

export class TextareaQuestion extends QuestionBase<string> {
  override controlType = 'texarea';
}

export class InputswitchQuestion extends QuestionBase<string> {
  override controlType = 'imputswitch';
}

export class CalendarQuestion extends QuestionBase<string> {
  override controlType = 'calendar';
}

export class PasswordQuestion extends QuestionBase<string> {
  override controlType = 'password';
}

export class InputnumberQuestion extends QuestionBase<string> {
  override controlType = 'inputnumber';
}

export class PricesQuestion extends QuestionBase<string> {
  override controlType = 'prices';
}

