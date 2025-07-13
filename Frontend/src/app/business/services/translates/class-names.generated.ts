import { Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Injectable({
  providedIn: 'root',
})
export class TranslateClassNamesGeneratedService {

    constructor(
        private translocoService: TranslocoService
    ) {
    }

    translate = (name: string): string => {
        switch(name) 
        {
            case 'AuthResult':
                return this.translocoService.translate('AuthResult');
            case 'BusinessObject':
                return this.translocoService.translate('BusinessObject');
            case 'Codebook':
                return this.translocoService.translate('Codebook');
            case 'Country':
                return this.translocoService.translate('Country');
            case 'CountryMainUIForm':
                return this.translocoService.translate('CountryMainUIForm');
            case 'CountrySaveBody':
                return this.translocoService.translate('CountrySaveBody');
            case 'CountryTrip':
                return this.translocoService.translate('CountryTrip');
            case 'CountryTripMainUIForm':
                return this.translocoService.translate('CountryTripMainUIForm');
            case 'CountryTripSaveBody':
                return this.translocoService.translate('CountryTripSaveBody');
            case 'ExcelReportOptions':
                return this.translocoService.translate('ExcelReportOptions');
            case 'ExternalProvider':
                return this.translocoService.translate('ExternalProvider');
            case 'Filter':
                return this.translocoService.translate('Filter');
            case 'FilterRule':
                return this.translocoService.translate('FilterRule');
            case 'FilterSortMeta':
                return this.translocoService.translate('FilterSortMeta');
            case 'JwtAuthResult':
                return this.translocoService.translate('JwtAuthResult');
            case 'LazyLoadSelectedIdsResult':
                return this.translocoService.translate('LazyLoadSelectedIdsResult');
            case 'Login':
                return this.translocoService.translate('Login');
            case 'LoginVerificationToken':
                return this.translocoService.translate('LoginVerificationToken');
            case 'Namebook':
                return this.translocoService.translate('Namebook');
            case 'Notification':
                return this.translocoService.translate('Notification');
            case 'NotificationMainUIForm':
                return this.translocoService.translate('NotificationMainUIForm');
            case 'NotificationSaveBody':
                return this.translocoService.translate('NotificationSaveBody');
            case 'PaginatedResult':
                return this.translocoService.translate('PaginatedResult');
            case 'Permission':
                return this.translocoService.translate('Permission');
            case 'PermissionMainUIForm':
                return this.translocoService.translate('PermissionMainUIForm');
            case 'PermissionSaveBody':
                return this.translocoService.translate('PermissionSaveBody');
            case 'ReadonlyObject':
                return this.translocoService.translate('ReadonlyObject');
            case 'RefreshToken':
                return this.translocoService.translate('RefreshToken');
            case 'RefreshTokenRequest':
                return this.translocoService.translate('RefreshTokenRequest');
            case 'Registration':
                return this.translocoService.translate('Registration');
            case 'RegistrationVerificationResult':
                return this.translocoService.translate('RegistrationVerificationResult');
            case 'RegistrationVerificationToken':
                return this.translocoService.translate('RegistrationVerificationToken');
            case 'Role':
                return this.translocoService.translate('Role');
            case 'RoleMainUIForm':
                return this.translocoService.translate('RoleMainUIForm');
            case 'RolePermission':
                return this.translocoService.translate('RolePermission');
            case 'RolePermissionMainUIForm':
                return this.translocoService.translate('RolePermissionMainUIForm');
            case 'RolePermissionSaveBody':
                return this.translocoService.translate('RolePermissionSaveBody');
            case 'RoleSaveBody':
                return this.translocoService.translate('RoleSaveBody');
            case 'SimpleSaveResult':
                return this.translocoService.translate('SimpleSaveResult');
            case 'Trip':
                return this.translocoService.translate('Trip');
            case 'TripMainUIForm':
                return this.translocoService.translate('TripMainUIForm');
            case 'TripSaveBody':
                return this.translocoService.translate('TripSaveBody');
            case 'UserBase':
                return this.translocoService.translate('UserBase');
            case 'User':
                return this.translocoService.translate('User');
            case 'UserMainUIForm':
                return this.translocoService.translate('UserMainUIForm');
            case 'UserNotification':
                return this.translocoService.translate('UserNotification');
            case 'UserNotificationMainUIForm':
                return this.translocoService.translate('UserNotificationMainUIForm');
            case 'UserNotificationSaveBody':
                return this.translocoService.translate('UserNotificationSaveBody');
            case 'UserRole':
                return this.translocoService.translate('UserRole');
            case 'UserRoleMainUIForm':
                return this.translocoService.translate('UserRoleMainUIForm');
            case 'UserRoleSaveBody':
                return this.translocoService.translate('UserRoleSaveBody');
            case 'UserSaveBody':
                return this.translocoService.translate('UserSaveBody');
            case 'Vehicle':
                return this.translocoService.translate('Vehicle');
            case 'VehicleMainUIForm':
                return this.translocoService.translate('VehicleMainUIForm');
            case 'VehicleSaveBody':
                return this.translocoService.translate('VehicleSaveBody');
            case 'VerificationTokenRequest':
                return this.translocoService.translate('VerificationTokenRequest');
            default:
                return null;
        }
    }
}

