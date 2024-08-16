import {Component, inject, Input, OnInit} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {QuestionBase} from '../../models/question-base/question-base.module';
import { PanelModule } from 'primeng/panel';
import { QuestionService } from '../../services/question.service';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { PasswordModule } from 'primeng/password';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  standalone: true,
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  imports:[CommonModule, 
            ReactiveFormsModule,
            PanelModule, FormsModule, 
            CheckboxModule, 
            InputTextareaModule, 
            InputSwitchModule, 
            CalendarModule, 
            PasswordModule,
            InputNumberModule
          ],
})
export class DynamicFormQuestionComponent {


  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;


  get isValid() {
    return this.form.controls[this.question.key].valid;
  }


}
