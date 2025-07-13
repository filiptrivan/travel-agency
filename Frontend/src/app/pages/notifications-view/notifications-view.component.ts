import { LayoutService } from './../../business/services/layout/layout.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/business/services/api/api.service';
import { MenuItem } from 'primeng/api';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { Notification } from 'src/app/business/entities/business-entities.generated';
import { Menu, MenuModule } from 'primeng/menu';
import { PaginatedResult, Filter, SpiderlyMessageService } from 'spiderly';

@Component({
  templateUrl: './notifications-view.component.html',
  imports: [
    TranslocoDirective,
    MenuModule,
    PaginatorModule
  ],
})
export class NotificationsViewComponent implements OnInit {
  currentUserNotifications: PaginatedResult<Notification>;

  crudMenu: MenuItem[] = [];
  @ViewChild('menu') menu: Menu;
  lastMenuToggledNotification: Notification;

  filter = new Filter<Notification>({
    first: 0,
    rows: 10,
  });

  constructor(
    private apiService: ApiService,
    private translocoService: TranslocoService,
    private messageService: SpiderlyMessageService,
    private layoutService: LayoutService,
  ) {}

  ngOnInit() {
    this.crudMenu = [
      {label: this.translocoService.translate('Delete'), command: this.deleteNotificationForCurrentUser, icon: 'pi pi-trash'},
      {label: this.translocoService.translate('MarkAsRead'), command: this.markNotificationAsReadForCurrentUser, icon: 'pi pi-eye'},
      {label: this.translocoService.translate('MarkAsUnread'), command: this.markNotificationAsUnreadForCurrentUser, icon: 'pi pi-eye-slash'},
    ]

    this.getNotificationsForCurrentUser();
  }

  onLazyLoad(event: PaginatorState){
    this.filter.first = event.first;
    this.filter.rows = event.rows;
    this.getNotificationsForCurrentUser();
  }

  getNotificationsForCurrentUser(){
    this.apiService.getNotificationsForCurrentUser(this.filter).subscribe((notifications) => {
      this.currentUserNotifications = notifications;
    });
  }

  menuToggle($event: MouseEvent, notification: Notification) {
    this.menu.toggle($event);
    this.lastMenuToggledNotification = notification;
  }

  deleteNotificationForCurrentUser = () => {
    this.apiService.deleteNotificationForCurrentUser(this.lastMenuToggledNotification.id, this.lastMenuToggledNotification.version).subscribe(() => {
      this.messageService.successMessage(this.translocoService.translate('SuccessfulAction'));
      this.onAfterNotificationCrudOperation();
    });
  }

  markNotificationAsReadForCurrentUser = () => {
    this.apiService.markNotificationAsReadForCurrentUser(this.lastMenuToggledNotification.id, this.lastMenuToggledNotification.version).subscribe(() => {
      this.messageService.successMessage(this.translocoService.translate('SuccessfulAction'));
      this.onAfterNotificationCrudOperation();
    });
  }

  markNotificationAsUnreadForCurrentUser = () => {
    this.apiService.markNotificationAsUnreadForCurrentUser(this.lastMenuToggledNotification.id, this.lastMenuToggledNotification.version).subscribe(() => {
      this.messageService.successMessage(this.translocoService.translate('SuccessfulAction'));
      this.onAfterNotificationCrudOperation();
    });
  }

  onAfterNotificationCrudOperation = () => {
    this.getNotificationsForCurrentUser();
    this.layoutService.setUnreadNotificationsCountForCurrentUser().subscribe(); // Don't need to unsubscribe from the http observable
  }

}

