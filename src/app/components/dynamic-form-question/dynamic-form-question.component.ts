import {Component, Input} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {QuestionBase} from '../../models/question-base/question-base.module';
@Component({
  standalone: true,
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  imports: [CommonModule, ReactiveFormsModule],
})
export class DynamicFormQuestionComponent {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}