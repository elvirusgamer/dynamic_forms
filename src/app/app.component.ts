import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { QuestionService } from './services/question.service';
import { QuestionBase } from './models/question-base/question-base.module';
import { Observable } from 'rxjs';
import { PanelModule } from 'primeng/panel';
import { SidebarHeadlessDemo } from './components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';

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
          <!-- <app-sidebar class="grid"></app-sidebar> -->
        </div>
      </div>
      <div class="col-12">
        <div class="p-3 border-round-sm font-bold">
          <p-panel header="Dynamic Form" [toggleable]="true">
            <ng-container *ngIf="questions$ | async as questions; else loading">
              <app-dynamic-form [questions]="questions"></app-dynamic-form>
            </ng-container>
            <ng-template #loading>
              <p>Loading...</p>
            </ng-template>
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
    HttpClientModule,
  ],
})
export class AppComponent implements OnInit {
  private _serviceData = inject(QuestionService);

  questions$!: Observable<QuestionBase<string>[]>;

  ngOnInit(): void {
    this.questions$ = this._serviceData.getQuestions();
  }
}
