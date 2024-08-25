import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { QuestionService } from './services/question.service';
import { QuestionBase } from './models/question-base/question-base.module';
import { Observable } from 'rxjs';
import { PanelModule } from 'primeng/panel';
import { SidebarHeadlessDemo } from './components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarResponse } from './models/sidebar-response/sidebar-response.module';
import { SidebarComponent } from './custom_components/sidebar/sidebar.component' 
import { RouterModule } from '@angular/router';  // Importa RouterModule

@Component({
  standalone: true,
  selector: 'app-root',
  template: ` 
      <div class="grid">
      <div class="col-1">
        <div class="p-3 border-round-sm font-bold">
          <ng-container *ngIf="sidebarItems$ | async as sidebarItems; else loadingSidebar">
            <app-sidebar [sidebarData]="sidebarItems$ | async"></app-sidebar>
          </ng-container>
          <ng-template #loadingSidebar>
            <p>Loading sidebar...</p>
          </ng-template>
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
    SidebarComponent,
    RouterModule,  // Asegúrate de que esté importado aquí
  ],
})

export class AppComponent implements OnInit {
  private _serviceData = inject(QuestionService);
  
  questions$!: Observable<QuestionBase<string>[]>;
  sidebarItems$!: Observable<any>;

  ngOnInit(): void {
      this.questions$ = this._serviceData.getQuestions();
      this.sidebarItems$ = this._serviceData.getItemSidebard();
  }
}
