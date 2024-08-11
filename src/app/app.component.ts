import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { QuestionService } from './services/question.service';
import { QuestionBase } from './models/question-base/question-base.module';
import { Observable } from 'rxjs';
import { PanelModule } from 'primeng/panel';
import { SidebarHeadlessDemo } from './components/sidebar/sidebar.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <!-- <div>
      <app-sidebar class="grid"></app-sidebar>
      <p-panel
        header="Dynamic Form"
        [toggleable]="true"
        class="grid card flex justify-content-center"
      >
        <app-dynamic-form [questions]="questions$ | async"></app-dynamic-form>
      </p-panel>
    </div> -->

    <div class="grid">
    <div class="col-3">
        <div class="p-3 border-round-sm font-bold">
          <app-sidebar class="grid"></app-sidebar>
        </div>
      </div>    
      <div class="col-12">
        <div class="p-3 border-round-sm font-bold">
          <p-panel header="Dynamic Form" [toggleable]="true">
              <app-dynamic-form [questions]="questions$ | async"></app-dynamic-form>
          </p-panel>
        </div>
      </div>     
    </div>
  `,
  providers: [QuestionService],
  imports: [
    AsyncPipe,
    DynamicFormComponent,
    CommonModule,
    PanelModule,
    SidebarHeadlessDemo,
  ],
})
export class AppComponent {
  questions$: Observable<QuestionBase<any>[]>;
  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
