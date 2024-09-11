import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { DynamicFormComponent } from '../../components/dynamic-form/dynamic-form.component';
import { QuestionService } from '../../services/question.service';
import { QuestionBase } from '../../models/question-base/question-base.module';
import { Observable } from 'rxjs';
import { PanelModule } from 'primeng/panel';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-component1',
  standalone: true,
  template: `
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
`,
  styleUrl: './component1.component.scss',
  providers: [QuestionService],
  imports: [AsyncPipe, DynamicFormComponent, CommonModule, PanelModule,HttpClientModule, RouterModule, RouterOutlet],
})
export class Component1 implements OnInit {
  private _serviceData = inject(QuestionService);
  
  questions$!: Observable<QuestionBase<string>[]>;

  ngOnInit(): void {
      this.questions$ = this._serviceData.getQuestions();
  }
}