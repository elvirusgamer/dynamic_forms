import { Component, ViewChild } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    standalone: true,
    imports: [SidebarModule, ButtonModule, RippleModule, AvatarModule, StyleClassModule]
})
export class SidebarHeadlessDemo {
    @ViewChild('sidebarRef') sidebarRef!: Sidebar;

    closeCallback(e : any): void {
        this.sidebarRef.close(e);
    }

    sidebarVisible: boolean = false;
}