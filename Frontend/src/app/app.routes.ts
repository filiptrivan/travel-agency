import { InMemoryScrollingOptions, RouterConfigOptions, Routes } from '@angular/router';
import { AuthGuard, NotAuthGuard } from 'spiderly';
import { LayoutComponent } from './business/layout/layout.component';

const layoutRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/homepage/homepage.component').then(c => c.HomepageComponent),
        canActivate: [AuthGuard]
    },
    {
        path: 'trips',
        loadComponent: () => import('./pages/trip/trip-list.component').then(c => c.TripListComponent),
        canActivate: [AuthGuard],
    },
    {
        path: 'trips/:id',
        loadComponent: () => import('./pages/trip/trip-details.component').then(c => c.TripDetailsComponent),
        canActivate: [AuthGuard],
    },
    {
        path: 'administration/users',
        loadComponent: () => import('./pages/administration/user/user-list.component').then(c => c.UserListComponent),
        canActivate: [AuthGuard],
    },
    {
        path: 'administration/users/:id',
        loadComponent: () => import('./pages/administration/user/user-details.component').then(c => c.UserDetailsComponent),
        canActivate: [AuthGuard],
    },
    {
        path: 'administration/countries',
        loadComponent: () => import('./pages/country/country-list.component').then(c => c.CountryListComponent),
        canActivate: [AuthGuard],
    },
    {
        path: 'administration/countries/:id',
        loadComponent: () => import('./pages/country/country-details.component').then(c => c.CountryDetailsComponent),
        canActivate: [AuthGuard],
    },
    {
        path: 'administration/vehicles',
        loadComponent: () => import('./pages/vehicle/vehicle-list.component').then(c => c.VehicleListComponent),
        canActivate: [AuthGuard],
    },
    {
        path: 'administration/vehicles/:id',
        loadComponent: () => import('./pages/vehicle/vehicle-details.component').then(c => c.VehicleDetailsComponent),
        canActivate: [AuthGuard],
    },
    {
        path: 'administration/citizens',
        loadComponent: () => import('./pages/citizen/citizen-list.component').then(c => c.CitizenListComponent),
        canActivate: [AuthGuard],
    },
    {
        path: 'administration/citizens/:id',
        loadComponent: () => import('./pages/citizen/citizen-details.component').then(c => c.CitizenDetailsComponent),
        canActivate: [AuthGuard],
    },
    {
        path: 'administration/roles',
        loadComponent: () => import('./pages/administration/role/role-list.component').then(c => c.RoleListComponent),
        canActivate: [AuthGuard],
    },
    {
        path: 'administration/roles/:id',
        loadComponent: () => import('./pages/administration/role/role-details.component').then(c => c.RoleDetailsComponent),
        canActivate: [AuthGuard],
    },
    {
        path: 'administration/notifications',
        loadComponent: () => import('./pages/administration/notification/notification-list.component').then(c => c.NotificationListComponent),
        canActivate: [AuthGuard],
    },
    {
        path: 'administration/notifications/:id',
        loadComponent: () => import('./pages/administration/notification/notification-details.component').then(c => c.NotificationDetailsComponent),
        canActivate: [AuthGuard],
    },
    { 
        path: 'notifications',
        loadComponent: () => import('./pages/notifications-view/notifications-view.component').then(c => c.NotificationsViewComponent),
        canActivate: [AuthGuard]
    },
];

export const routes: Routes = [
    {
        path: '', 
        component: LayoutComponent,
        children: layoutRoutes,
    },
    {
        path: 'login',
        loadComponent: () => import('spiderly').then(c => c.LoginComponent),
        canActivate: [NotAuthGuard],
    },
    {
        path: 'registration', loadComponent: () => import('spiderly').then(c => c.RegistrationComponent),
        canActivate: [NotAuthGuard],
    },
    { path: 'privacy-policy', loadComponent: () => import('./pages/privacy-policy/privacy-policy.component').then(c => c.PrivacyPolicyComponent) },
    { path: 'user-agreement', loadComponent: () => import('./pages/user-agreement/user-agreement.component').then(c => c.UserAgreementComponent) },
    { path: 'not-found', loadComponent: () => import('spiderly').then(c => c.NotFoundComponent) },
    { path: '**', redirectTo: 'not-found' },
];

export const scrollConfig: InMemoryScrollingOptions = {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
};

export const routerConfigOptions: RouterConfigOptions = {
    onSameUrlNavigation: 'reload',
};
