import { TranslocoService } from '@jsverse/transloco';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigService } from 'src/app/business/services/config.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpiderlyLayoutComponent, SpiderlyMenuItem} from 'spiderly';
import { CommonModule } from '@angular/common';
import { BusinessPermissionCodes } from '../enums/business-enums.generated';
import { SecurityPermissionCodes } from 'spiderly';

@Component({
    selector: 'layout',
    templateUrl: './layout.component.html',
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        SpiderlyLayoutComponent,
    ]
})
export class LayoutComponent {
    menu: SpiderlyMenuItem[];

    constructor(
        private config: ConfigService,
        private translocoService: TranslocoService
    ) {
    }

    ngOnInit(): void {
        this.menu = [
            {
                items: [
                    { 
                        label: this.translocoService.translate('Home'), 
                        icon: 'pi pi-fw pi-home', 
                        routerLink: [''],
                    },
                    { 
                        label: 'Trips', 
                        icon: 'pi pi-fw pi-globe', 
                        routerLink: ['trips'], // this is important to match the specified path inside 'app.routes.ts'
                        // I deleted the 'hasPermission' check because it's not important in this simple app
                    },
                    {
                        label: this.translocoService.translate('Administration'),
                        icon: 'pi pi-fw pi-cog',
                        hasPermission: (permissionCodes: string[]): boolean => { 
                            return (
                                permissionCodes?.includes(BusinessPermissionCodes.ReadUser) ||
                                permissionCodes?.includes(SecurityPermissionCodes.ReadRole) ||
                                permissionCodes?.includes(BusinessPermissionCodes.ReadNotification)
                            )
                        },
                        items: [
                            {
                                label: this.translocoService.translate('UserList'),
                                icon: 'pi pi-fw pi-user',
                                routerLink: [`/${this.config.administrationSlug}/users`],
                                hasPermission: (permissionCodes: string[]): boolean => { 
                                    return (
                                        permissionCodes?.includes(BusinessPermissionCodes.ReadUser)
                                    )
                                },
                            },
                            {
                                label: this.translocoService.translate('RoleList'),
                                icon: 'pi pi-fw pi-id-card',
                                routerLink: [`/${this.config.administrationSlug}/roles`],
                                hasPermission: (permissionCodes: string[]): boolean => { 
                                    return (
                                        permissionCodes?.includes(SecurityPermissionCodes.ReadRole)
                                    )
                                },
                            },
                            {
                                label: this.translocoService.translate('NotificationList'),
                                icon: 'pi pi-fw pi-bell',
                                routerLink: [`/${this.config.administrationSlug}/notifications`],
                                hasPermission: (permissionCodes: string[]): boolean => { 
                                    return (
                                        permissionCodes?.includes(BusinessPermissionCodes.ReadNotification)
                                    )
                                },
                            },
                            {
                                label: 'Countries', // We don't need to do translations because our app is not multi-language
                                icon: 'pi pi-fw pi-compass',
                                routerLink: [`/${this.config.administrationSlug}/countries`],
                                // I deleted the 'hasPermission' check because it's not important in this simple app
                            },
                            {
                                label: 'Vehicles',
                                icon: 'pi pi-fw pi-car', // This is the icon which will be shown inside the side menu
                                routerLink: [`/${this.config.administrationSlug}/vehicles`],
                                // I deleted the 'hasPermission' check because it's not important in this simple app
                            },
                        ]
                    },
                ]
            },
        ];
    }

}

