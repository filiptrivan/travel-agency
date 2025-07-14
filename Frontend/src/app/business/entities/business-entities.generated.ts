import { BaseEntity, Filter, FilterRule, FilterSortMeta, MimeTypes, Namebook } from 'spiderly';



export class Citizen extends BaseEntity
{
    jmbg?: string;
	passportNumber?: string;
	version?: number;
	id?: number;
	createdAt?: Date;
	modifiedAt?: Date;

    constructor(
    {
        jmbg,
		passportNumber,
		version,
		id,
		createdAt,
		modifiedAt
    }:{
        jmbg?: string;
		passportNumber?: string;
		version?: number;
		id?: number;
		createdAt?: Date;
		modifiedAt?: Date;     
    } = {}
    ) {
        super('Citizen'); 

        this.jmbg = jmbg;
		this.passportNumber = passportNumber;
		this.version = version;
		this.id = id;
		this.createdAt = createdAt;
		this.modifiedAt = modifiedAt;
    }
}


export class CitizenSaveBody extends BaseEntity
{
    citizenDTO?: Citizen;

    constructor(
    {
        citizenDTO
    }:{
        citizenDTO?: Citizen;     
    } = {}
    ) {
        super('CitizenSaveBody'); 

        this.citizenDTO = citizenDTO;
    }
}


export class CitizenMainUIForm extends BaseEntity
{
    citizenDTO?: Citizen;

    constructor(
    {
        citizenDTO
    }:{
        citizenDTO?: Citizen;     
    } = {}
    ) {
        super('CitizenMainUIForm'); 

        this.citizenDTO = citizenDTO;
    }
}


export class Country extends BaseEntity
{
    name?: string;
	version?: number;
	id?: number;
	createdAt?: Date;
	modifiedAt?: Date;

    constructor(
    {
        name,
		version,
		id,
		createdAt,
		modifiedAt
    }:{
        name?: string;
		version?: number;
		id?: number;
		createdAt?: Date;
		modifiedAt?: Date;     
    } = {}
    ) {
        super('Country'); 

        this.name = name;
		this.version = version;
		this.id = id;
		this.createdAt = createdAt;
		this.modifiedAt = modifiedAt;
    }
}


export class CountrySaveBody extends BaseEntity
{
    countryDTO?: Country;

    constructor(
    {
        countryDTO
    }:{
        countryDTO?: Country;     
    } = {}
    ) {
        super('CountrySaveBody'); 

        this.countryDTO = countryDTO;
    }
}


export class CountryMainUIForm extends BaseEntity
{
    countryDTO?: Country;

    constructor(
    {
        countryDTO
    }:{
        countryDTO?: Country;     
    } = {}
    ) {
        super('CountryMainUIForm'); 

        this.countryDTO = countryDTO;
    }
}


export class CountryTrip extends BaseEntity
{
    countryDisplayName?: string;
	countryId?: number;
	tripDisplayName?: string;
	tripId?: number;

    constructor(
    {
        countryDisplayName,
		countryId,
		tripDisplayName,
		tripId
    }:{
        countryDisplayName?: string;
		countryId?: number;
		tripDisplayName?: string;
		tripId?: number;     
    } = {}
    ) {
        super('CountryTrip'); 

        this.countryDisplayName = countryDisplayName;
		this.countryId = countryId;
		this.tripDisplayName = tripDisplayName;
		this.tripId = tripId;
    }
}


export class CountryTripSaveBody extends BaseEntity
{
    countryTripDTO?: CountryTrip;

    constructor(
    {
        countryTripDTO
    }:{
        countryTripDTO?: CountryTrip;     
    } = {}
    ) {
        super('CountryTripSaveBody'); 

        this.countryTripDTO = countryTripDTO;
    }
}


export class CountryTripMainUIForm extends BaseEntity
{
    countryTripDTO?: CountryTrip;

    constructor(
    {
        countryTripDTO
    }:{
        countryTripDTO?: CountryTrip;     
    } = {}
    ) {
        super('CountryTripMainUIForm'); 

        this.countryTripDTO = countryTripDTO;
    }
}


export class Notification extends BaseEntity
{
    title?: string;
	description?: string;
	emailBody?: string;
	version?: number;
	id?: number;
	createdAt?: Date;
	modifiedAt?: Date;
	isMarkedAsRead?: boolean;

    constructor(
    {
        title,
		description,
		emailBody,
		version,
		id,
		createdAt,
		modifiedAt,
		isMarkedAsRead
    }:{
        title?: string;
		description?: string;
		emailBody?: string;
		version?: number;
		id?: number;
		createdAt?: Date;
		modifiedAt?: Date;
		isMarkedAsRead?: boolean;     
    } = {}
    ) {
        super('Notification'); 

        this.title = title;
		this.description = description;
		this.emailBody = emailBody;
		this.version = version;
		this.id = id;
		this.createdAt = createdAt;
		this.modifiedAt = modifiedAt;
		this.isMarkedAsRead = isMarkedAsRead;
    }
}


export class NotificationSaveBody extends BaseEntity
{
    notificationDTO?: Notification;
	selectedRecipientsIds?: number[];
	unselectedRecipientsIds?: number[];
	areAllRecipientsSelected?: boolean;
	recipientsTableFilter?: Filter;
	isMarkedAsRead?: boolean;

    constructor(
    {
        notificationDTO,
		selectedRecipientsIds,
		unselectedRecipientsIds,
		areAllRecipientsSelected,
		recipientsTableFilter,
		isMarkedAsRead
    }:{
        notificationDTO?: Notification;
		selectedRecipientsIds?: number[];
		unselectedRecipientsIds?: number[];
		areAllRecipientsSelected?: boolean;
		recipientsTableFilter?: Filter;
		isMarkedAsRead?: boolean;     
    } = {}
    ) {
        super('NotificationSaveBody'); 

        this.notificationDTO = notificationDTO;
		this.selectedRecipientsIds = selectedRecipientsIds;
		this.unselectedRecipientsIds = unselectedRecipientsIds;
		this.areAllRecipientsSelected = areAllRecipientsSelected;
		this.recipientsTableFilter = recipientsTableFilter;
		this.isMarkedAsRead = isMarkedAsRead;
    }
}


export class NotificationMainUIForm extends BaseEntity
{
    notificationDTO?: Notification;

    constructor(
    {
        notificationDTO
    }:{
        notificationDTO?: Notification;     
    } = {}
    ) {
        super('NotificationMainUIForm'); 

        this.notificationDTO = notificationDTO;
    }
}


export class Trip extends BaseEntity
{
    entryDate?: Date;
	exitDate?: Date;
	userDisplayName?: string;
	userId?: number;
	vehicleDisplayName?: string;
	vehicleId?: number;
	version?: number;
	id?: number;
	createdAt?: Date;
	modifiedAt?: Date;

    constructor(
    {
        entryDate,
		exitDate,
		userDisplayName,
		userId,
		vehicleDisplayName,
		vehicleId,
		version,
		id,
		createdAt,
		modifiedAt
    }:{
        entryDate?: Date;
		exitDate?: Date;
		userDisplayName?: string;
		userId?: number;
		vehicleDisplayName?: string;
		vehicleId?: number;
		version?: number;
		id?: number;
		createdAt?: Date;
		modifiedAt?: Date;     
    } = {}
    ) {
        super('Trip'); 

        this.entryDate = entryDate;
		this.exitDate = exitDate;
		this.userDisplayName = userDisplayName;
		this.userId = userId;
		this.vehicleDisplayName = vehicleDisplayName;
		this.vehicleId = vehicleId;
		this.version = version;
		this.id = id;
		this.createdAt = createdAt;
		this.modifiedAt = modifiedAt;
    }
}


export class TripSaveBody extends BaseEntity
{
    tripDTO?: Trip;
	selectedCountriesIds?: number[];

    constructor(
    {
        tripDTO,
		selectedCountriesIds
    }:{
        tripDTO?: Trip;
		selectedCountriesIds?: number[];     
    } = {}
    ) {
        super('TripSaveBody'); 

        this.tripDTO = tripDTO;
		this.selectedCountriesIds = selectedCountriesIds;
    }
}


export class TripMainUIForm extends BaseEntity
{
    tripDTO?: Trip;
	countriesNamebookDTOList?: Namebook[];

    constructor(
    {
        tripDTO,
		countriesNamebookDTOList
    }:{
        tripDTO?: Trip;
		countriesNamebookDTOList?: Namebook[];     
    } = {}
    ) {
        super('TripMainUIForm'); 

        this.tripDTO = tripDTO;
		this.countriesNamebookDTOList = countriesNamebookDTOList;
    }
}


export class User extends BaseEntity
{
    email?: string;
	hasLoggedInWithExternalProvider?: boolean;
	isDisabled?: boolean;
	jmbg?: string;
	passportNumber?: string;
	fullName?: string;
	birthDate?: Date;
	version?: number;
	id?: number;
	createdAt?: Date;
	modifiedAt?: Date;

    constructor(
    {
        email,
		hasLoggedInWithExternalProvider,
		isDisabled,
		jmbg,
		passportNumber,
		fullName,
		birthDate,
		version,
		id,
		createdAt,
		modifiedAt
    }:{
        email?: string;
		hasLoggedInWithExternalProvider?: boolean;
		isDisabled?: boolean;
		jmbg?: string;
		passportNumber?: string;
		fullName?: string;
		birthDate?: Date;
		version?: number;
		id?: number;
		createdAt?: Date;
		modifiedAt?: Date;     
    } = {}
    ) {
        super('User'); 

        this.email = email;
		this.hasLoggedInWithExternalProvider = hasLoggedInWithExternalProvider;
		this.isDisabled = isDisabled;
		this.jmbg = jmbg;
		this.passportNumber = passportNumber;
		this.fullName = fullName;
		this.birthDate = birthDate;
		this.version = version;
		this.id = id;
		this.createdAt = createdAt;
		this.modifiedAt = modifiedAt;
    }
}


export class UserSaveBody extends BaseEntity
{
    userDTO?: User;

    constructor(
    {
        userDTO
    }:{
        userDTO?: User;     
    } = {}
    ) {
        super('UserSaveBody'); 

        this.userDTO = userDTO;
    }
}


export class UserMainUIForm extends BaseEntity
{
    userDTO?: User;

    constructor(
    {
        userDTO
    }:{
        userDTO?: User;     
    } = {}
    ) {
        super('UserMainUIForm'); 

        this.userDTO = userDTO;
    }
}


export class UserNotification extends BaseEntity
{
    notificationDisplayName?: string;
	notificationId?: number;
	userDisplayName?: string;
	userId?: number;
	isMarkedAsRead?: boolean;

    constructor(
    {
        notificationDisplayName,
		notificationId,
		userDisplayName,
		userId,
		isMarkedAsRead
    }:{
        notificationDisplayName?: string;
		notificationId?: number;
		userDisplayName?: string;
		userId?: number;
		isMarkedAsRead?: boolean;     
    } = {}
    ) {
        super('UserNotification'); 

        this.notificationDisplayName = notificationDisplayName;
		this.notificationId = notificationId;
		this.userDisplayName = userDisplayName;
		this.userId = userId;
		this.isMarkedAsRead = isMarkedAsRead;
    }
}


export class UserNotificationSaveBody extends BaseEntity
{
    userNotificationDTO?: UserNotification;

    constructor(
    {
        userNotificationDTO
    }:{
        userNotificationDTO?: UserNotification;     
    } = {}
    ) {
        super('UserNotificationSaveBody'); 

        this.userNotificationDTO = userNotificationDTO;
    }
}


export class UserNotificationMainUIForm extends BaseEntity
{
    userNotificationDTO?: UserNotification;

    constructor(
    {
        userNotificationDTO
    }:{
        userNotificationDTO?: UserNotification;     
    } = {}
    ) {
        super('UserNotificationMainUIForm'); 

        this.userNotificationDTO = userNotificationDTO;
    }
}


export class Vehicle extends BaseEntity
{
    name?: string;
	version?: number;
	id?: number;
	createdAt?: Date;
	modifiedAt?: Date;

    constructor(
    {
        name,
		version,
		id,
		createdAt,
		modifiedAt
    }:{
        name?: string;
		version?: number;
		id?: number;
		createdAt?: Date;
		modifiedAt?: Date;     
    } = {}
    ) {
        super('Vehicle'); 

        this.name = name;
		this.version = version;
		this.id = id;
		this.createdAt = createdAt;
		this.modifiedAt = modifiedAt;
    }
}


export class VehicleSaveBody extends BaseEntity
{
    vehicleDTO?: Vehicle;

    constructor(
    {
        vehicleDTO
    }:{
        vehicleDTO?: Vehicle;     
    } = {}
    ) {
        super('VehicleSaveBody'); 

        this.vehicleDTO = vehicleDTO;
    }
}


export class VehicleMainUIForm extends BaseEntity
{
    vehicleDTO?: Vehicle;

    constructor(
    {
        vehicleDTO
    }:{
        vehicleDTO?: Vehicle;     
    } = {}
    ) {
        super('VehicleMainUIForm'); 

        this.vehicleDTO = vehicleDTO;
    }
}

