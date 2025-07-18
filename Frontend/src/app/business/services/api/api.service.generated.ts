import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiSecurityService, Filter, PaginatedResult, Namebook, Codebook, LazyLoadSelectedIdsResult, VerificationTokenRequest, AuthResult, ExternalProvider } from 'spiderly';
import { ConfigService } from '../config.service';
import { Notification } from '../../entities/business-entities.generated';
import { NotificationSaveBody } from '../../entities/business-entities.generated';
import { Citizen } from '../../entities/business-entities.generated';
import { CitizenSaveBody } from '../../entities/business-entities.generated';
import { CitizenMainUIForm } from '../../entities/business-entities.generated';
import { Country } from '../../entities/business-entities.generated';
import { CountrySaveBody } from '../../entities/business-entities.generated';
import { CountryMainUIForm } from '../../entities/business-entities.generated';
import { CountryTrip } from '../../entities/business-entities.generated';
import { CountryTripSaveBody } from '../../entities/business-entities.generated';
import { CountryTripMainUIForm } from '../../entities/business-entities.generated';
import { NotificationMainUIForm } from '../../entities/business-entities.generated';
import { Trip } from '../../entities/business-entities.generated';
import { TripSaveBody } from '../../entities/business-entities.generated';
import { TripMainUIForm } from '../../entities/business-entities.generated';
import { User } from '../../entities/business-entities.generated';
import { UserSaveBody } from '../../entities/business-entities.generated';
import { UserMainUIForm } from '../../entities/business-entities.generated';
import { UserNotification } from '../../entities/business-entities.generated';
import { UserNotificationSaveBody } from '../../entities/business-entities.generated';
import { UserNotificationMainUIForm } from '../../entities/business-entities.generated';
import { Vehicle } from '../../entities/business-entities.generated';
import { VehicleSaveBody } from '../../entities/business-entities.generated';
import { VehicleMainUIForm } from '../../entities/business-entities.generated';

@Injectable({
    providedIn: 'root'
})
export class ApiGeneratedService extends ApiSecurityService {

    constructor(
        protected override http: HttpClient,
        protected override config: ConfigService
    ) {
        super(http, config);
    }

    sendNotificationEmail = (notificationId: number, notificationVersion: number): Observable<any> => { 
        return this.http.get(`${this.config.apiUrl}/Notification/SendNotificationEmail?notificationId=${notificationId}&notificationVersion=${notificationVersion}`, this.config.httpOptions);
    }

    deleteNotificationForCurrentUser = (notificationId: number, notificationVersion: number): Observable<any> => { 
        return this.http.delete(`${this.config.apiUrl}/Notification/DeleteNotificationForCurrentUser?notificationId=${notificationId}&notificationVersion=${notificationVersion}`, this.config.httpOptions);
    }

    markNotificationAsReadForCurrentUser = (notificationId: number, notificationVersion: number): Observable<any> => { 
        return this.http.get(`${this.config.apiUrl}/Notification/MarkNotificationAsReadForCurrentUser?notificationId=${notificationId}&notificationVersion=${notificationVersion}`, this.config.httpOptions);
    }

    markNotificationAsUnreadForCurrentUser = (notificationId: number, notificationVersion: number): Observable<any> => { 
        return this.http.get(`${this.config.apiUrl}/Notification/MarkNotificationAsUnreadForCurrentUser?notificationId=${notificationId}&notificationVersion=${notificationVersion}`, this.config.httpOptions);
    }

    getNotificationsForCurrentUser = (filterDTO: Filter): Observable<PaginatedResult<Notification>> => { 
        return this.http.post<PaginatedResult<Notification>>(`${this.config.apiUrl}/Notification/GetNotificationsForCurrentUser`, filterDTO, this.config.httpSkipSpinnerOptions);
    }

    getCurrentUser = (): Observable<User> => { 
        return this.http.get<User>(`${this.config.apiUrl}/User/GetCurrentUser`, this.config.httpSkipSpinnerOptions);
    }

    getPaginatedNotificationList = (filterDTO: Filter): Observable<PaginatedResult<Notification>> => { 
        return this.http.post<PaginatedResult<Notification>>(`${this.config.apiUrl}/Notification/GetPaginatedNotificationList`, filterDTO, this.config.httpSkipSpinnerOptions);
    }

    exportNotificationListToExcel = (filterDTO: Filter): Observable<any> => { 
        return this.http.post(`${this.config.apiUrl}/Notification/ExportNotificationListToExcel`, filterDTO, { observe: 'response', responseType: 'blob' });
    }

    getNotificationList = (): Observable<Notification[]> => { 
        return this.http.get<Notification[]>(`${this.config.apiUrl}/Notification/GetNotificationList`, this.config.httpOptions);
    }

    getNotificationMainUIFormDTO = (id: number): Observable<NotificationMainUIForm> => { 
        return this.http.get<NotificationMainUIForm>(`${this.config.apiUrl}/Notification/GetNotificationMainUIFormDTO?id=${id}`, this.config.httpOptions);
    }

    getNotification = (id: number): Observable<Notification> => { 
        return this.http.get<Notification>(`${this.config.apiUrl}/Notification/GetNotification?id=${id}`, this.config.httpOptions);
    }







    getPaginatedRecipientsListForNotification = (filterDTO: Filter): Observable<PaginatedResult<User>> => { 
        return this.http.post<PaginatedResult<User>>(`${this.config.apiUrl}/Notification/GetPaginatedRecipientsListForNotification`, filterDTO, this.config.httpSkipSpinnerOptions);
    }

    exportRecipientsListToExcelForNotification = (filterDTO: Filter): Observable<any> => { 
        return this.http.post(`${this.config.apiUrl}/Notification/ExportRecipientsListToExcelForNotification`, filterDTO, { observe: 'response', responseType: 'blob' });
    }

    lazyLoadSelectedRecipientsIdsForNotification = (filterDTO: Filter): Observable<LazyLoadSelectedIdsResult> => { 
        return this.http.post<LazyLoadSelectedIdsResult>(`${this.config.apiUrl}/Notification/LazyLoadSelectedRecipientsIdsForNotification`, filterDTO, this.config.httpSkipSpinnerOptions);
    }

    saveNotification = (saveBodyDTO: NotificationSaveBody): Observable<NotificationSaveBody> => { 
        return this.http.put<NotificationSaveBody>(`${this.config.apiUrl}/Notification/SaveNotification`, saveBodyDTO, this.config.httpOptions);
    }



    deleteNotification = (id: number): Observable<any> => { 
        return this.http.delete(`${this.config.apiUrl}/Notification/DeleteNotification?id=${id}`, this.config.httpOptions);
    }




    getPaginatedCountryList = (filterDTO: Filter): Observable<PaginatedResult<Country>> => { 
        return this.http.post<PaginatedResult<Country>>(`${this.config.apiUrl}/Country/GetPaginatedCountryList`, filterDTO, this.config.httpSkipSpinnerOptions);
    }

    exportCountryListToExcel = (filterDTO: Filter): Observable<any> => { 
        return this.http.post(`${this.config.apiUrl}/Country/ExportCountryListToExcel`, filterDTO, { observe: 'response', responseType: 'blob' });
    }

    getCountryList = (): Observable<Country[]> => { 
        return this.http.get<Country[]>(`${this.config.apiUrl}/Country/GetCountryList`, this.config.httpOptions);
    }

    getCountryMainUIFormDTO = (id: number): Observable<CountryMainUIForm> => { 
        return this.http.get<CountryMainUIForm>(`${this.config.apiUrl}/Country/GetCountryMainUIFormDTO?id=${id}`, this.config.httpOptions);
    }

    getCountry = (id: number): Observable<Country> => { 
        return this.http.get<Country>(`${this.config.apiUrl}/Country/GetCountry?id=${id}`, this.config.httpOptions);
    }









    saveCountry = (saveBodyDTO: CountrySaveBody): Observable<CountrySaveBody> => { 
        return this.http.put<CountrySaveBody>(`${this.config.apiUrl}/Country/SaveCountry`, saveBodyDTO, this.config.httpOptions);
    }



    deleteCountry = (id: number): Observable<any> => { 
        return this.http.delete(`${this.config.apiUrl}/Country/DeleteCountry?id=${id}`, this.config.httpOptions);
    }




    getPaginatedVehicleList = (filterDTO: Filter): Observable<PaginatedResult<Vehicle>> => { 
        return this.http.post<PaginatedResult<Vehicle>>(`${this.config.apiUrl}/Vehicle/GetPaginatedVehicleList`, filterDTO, this.config.httpSkipSpinnerOptions);
    }

    exportVehicleListToExcel = (filterDTO: Filter): Observable<any> => { 
        return this.http.post(`${this.config.apiUrl}/Vehicle/ExportVehicleListToExcel`, filterDTO, { observe: 'response', responseType: 'blob' });
    }

    getVehicleList = (): Observable<Vehicle[]> => { 
        return this.http.get<Vehicle[]>(`${this.config.apiUrl}/Vehicle/GetVehicleList`, this.config.httpOptions);
    }

    getVehicleMainUIFormDTO = (id: number): Observable<VehicleMainUIForm> => { 
        return this.http.get<VehicleMainUIForm>(`${this.config.apiUrl}/Vehicle/GetVehicleMainUIFormDTO?id=${id}`, this.config.httpOptions);
    }

    getVehicle = (id: number): Observable<Vehicle> => { 
        return this.http.get<Vehicle>(`${this.config.apiUrl}/Vehicle/GetVehicle?id=${id}`, this.config.httpOptions);
    }









    saveVehicle = (saveBodyDTO: VehicleSaveBody): Observable<VehicleSaveBody> => { 
        return this.http.put<VehicleSaveBody>(`${this.config.apiUrl}/Vehicle/SaveVehicle`, saveBodyDTO, this.config.httpOptions);
    }



    deleteVehicle = (id: number): Observable<any> => { 
        return this.http.delete(`${this.config.apiUrl}/Vehicle/DeleteVehicle?id=${id}`, this.config.httpOptions);
    }


    getPaginatedTripList = (filterDTO: Filter): Observable<PaginatedResult<Trip>> => { 
        return this.http.post<PaginatedResult<Trip>>(`${this.config.apiUrl}/Trip/GetPaginatedTripList`, filterDTO, this.config.httpSkipSpinnerOptions);
    }

    exportTripListToExcel = (filterDTO: Filter): Observable<any> => { 
        return this.http.post(`${this.config.apiUrl}/Trip/ExportTripListToExcel`, filterDTO, { observe: 'response', responseType: 'blob' });
    }

    getTripList = (): Observable<Trip[]> => { 
        return this.http.get<Trip[]>(`${this.config.apiUrl}/Trip/GetTripList`, this.config.httpOptions);
    }

    getTripMainUIFormDTO = (id: number): Observable<TripMainUIForm> => { 
        return this.http.get<TripMainUIForm>(`${this.config.apiUrl}/Trip/GetTripMainUIFormDTO?id=${id}`, this.config.httpOptions);
    }

    getTrip = (id: number): Observable<Trip> => { 
        return this.http.get<Trip>(`${this.config.apiUrl}/Trip/GetTrip?id=${id}`, this.config.httpOptions);
    }

    getUserAutocompleteListForTrip = (limit: number, filter: string, tripId?: number): Observable<Namebook[]> => { 
        return this.http.get<Namebook[]>(`${this.config.apiUrl}/Trip/GetUserAutocompleteListForTrip?limit=${limit}&filter=${filter}&tripId=${tripId}`, this.config.httpSkipSpinnerOptions);
    }
    getVehicleAutocompleteListForTrip = (limit: number, filter: string, tripId?: number): Observable<Namebook[]> => { 
        return this.http.get<Namebook[]>(`${this.config.apiUrl}/Trip/GetVehicleAutocompleteListForTrip?limit=${limit}&filter=${filter}&tripId=${tripId}`, this.config.httpSkipSpinnerOptions);
    }


    getCountriesDropdownListForTrip = (tripId?: number): Observable<Namebook[]> => { 
        return this.http.get<Namebook[]>(`${this.config.apiUrl}/Trip/GetCountriesDropdownListForTrip?tripId=${tripId}`, this.config.httpSkipSpinnerOptions);
    }




    getCountriesNamebookListForTrip = (id: number): Observable<Namebook[]> => { 
        return this.http.get<Namebook[]>(`${this.config.apiUrl}/Trip/GetCountriesNamebookListForTrip?id=${id}`, this.config.httpSkipSpinnerOptions);
    }

    saveTrip = (saveBodyDTO: TripSaveBody): Observable<TripSaveBody> => { 
        return this.http.put<TripSaveBody>(`${this.config.apiUrl}/Trip/SaveTrip`, saveBodyDTO, this.config.httpOptions);
    }



    deleteTrip = (id: number): Observable<any> => { 
        return this.http.delete(`${this.config.apiUrl}/Trip/DeleteTrip?id=${id}`, this.config.httpOptions);
    }


    getPaginatedCitizenList = (filterDTO: Filter): Observable<PaginatedResult<Citizen>> => { 
        return this.http.post<PaginatedResult<Citizen>>(`${this.config.apiUrl}/Citizen/GetPaginatedCitizenList`, filterDTO, this.config.httpSkipSpinnerOptions);
    }

    exportCitizenListToExcel = (filterDTO: Filter): Observable<any> => { 
        return this.http.post(`${this.config.apiUrl}/Citizen/ExportCitizenListToExcel`, filterDTO, { observe: 'response', responseType: 'blob' });
    }

    getCitizenList = (): Observable<Citizen[]> => { 
        return this.http.get<Citizen[]>(`${this.config.apiUrl}/Citizen/GetCitizenList`, this.config.httpOptions);
    }

    getCitizenMainUIFormDTO = (id: number): Observable<CitizenMainUIForm> => { 
        return this.http.get<CitizenMainUIForm>(`${this.config.apiUrl}/Citizen/GetCitizenMainUIFormDTO?id=${id}`, this.config.httpOptions);
    }

    getCitizen = (id: number): Observable<Citizen> => { 
        return this.http.get<Citizen>(`${this.config.apiUrl}/Citizen/GetCitizen?id=${id}`, this.config.httpOptions);
    }









    saveCitizen = (saveBodyDTO: CitizenSaveBody): Observable<CitizenSaveBody> => { 
        return this.http.put<CitizenSaveBody>(`${this.config.apiUrl}/Citizen/SaveCitizen`, saveBodyDTO, this.config.httpOptions);
    }



    deleteCitizen = (id: number): Observable<any> => { 
        return this.http.delete(`${this.config.apiUrl}/Citizen/DeleteCitizen?id=${id}`, this.config.httpOptions);
    }


    getPaginatedUserList = (filterDTO: Filter): Observable<PaginatedResult<User>> => { 
        return this.http.post<PaginatedResult<User>>(`${this.config.apiUrl}/User/GetPaginatedUserList`, filterDTO, this.config.httpSkipSpinnerOptions);
    }

    exportUserListToExcel = (filterDTO: Filter): Observable<any> => { 
        return this.http.post(`${this.config.apiUrl}/User/ExportUserListToExcel`, filterDTO, { observe: 'response', responseType: 'blob' });
    }

    getUserList = (): Observable<User[]> => { 
        return this.http.get<User[]>(`${this.config.apiUrl}/User/GetUserList`, this.config.httpOptions);
    }

    getUserMainUIFormDTO = (id: number): Observable<UserMainUIForm> => { 
        return this.http.get<UserMainUIForm>(`${this.config.apiUrl}/User/GetUserMainUIFormDTO?id=${id}`, this.config.httpOptions);
    }

    getUser = (id: number): Observable<User> => { 
        return this.http.get<User>(`${this.config.apiUrl}/User/GetUser?id=${id}`, this.config.httpOptions);
    }









    saveUser = (saveBodyDTO: UserSaveBody): Observable<UserSaveBody> => { 
        return this.http.put<UserSaveBody>(`${this.config.apiUrl}/User/SaveUser`, saveBodyDTO, this.config.httpOptions);
    }



    deleteUser = (id: number): Observable<any> => { 
        return this.http.delete(`${this.config.apiUrl}/User/DeleteUser?id=${id}`, this.config.httpOptions);
    }


}
