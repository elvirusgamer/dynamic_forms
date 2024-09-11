import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { QuestionService } from './services/question.service';
import { QuestionBase } from './models/question-base/question-base.module';
import { Observable } from 'rxjs';
import { PanelModule } from 'primeng/panel';
import { SidebarHeadlessDemo } from './components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './custom_components/sidebar/sidebar.component' 
import { RouterModule, RouterOutlet } from '@angular/router';

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
        <router-outlet></router-outlet>
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
    RouterModule,
    RouterOutlet
  ],
})

export class AppComponent implements OnInit {
  private _serviceData = inject(QuestionService);

  sidebarItems$!: Observable<any>;

  ngOnInit(): void {
      this.sidebarItems$ = this._serviceData.getItemSidebard();
  }
}
