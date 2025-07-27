IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
CREATE TABLE [Notification] (
    [Id] bigint NOT NULL IDENTITY,
    [Title] nvarchar(100) NOT NULL,
    [Description] nvarchar(400) NOT NULL,
    [EmailBody] nvarchar(1000) NULL,
    [Version] int NOT NULL,
    [CreatedAt] datetime2 NOT NULL,
    [ModifiedAt] datetime2 NOT NULL,
    CONSTRAINT [PK_Notification] PRIMARY KEY ([Id])
);

CREATE TABLE [Permission] (
    [Id] int NOT NULL IDENTITY,
    [Name] nvarchar(100) NOT NULL,
    [Description] nvarchar(400) NULL,
    [Code] nvarchar(100) NOT NULL,
    CONSTRAINT [PK_Permission] PRIMARY KEY ([Id])
);

CREATE TABLE [Role] (
    [Id] int NOT NULL IDENTITY,
    [Name] nvarchar(255) NOT NULL,
    [Description] nvarchar(400) NULL,
    [Version] int NOT NULL,
    [CreatedAt] datetime2 NOT NULL,
    [ModifiedAt] datetime2 NOT NULL,
    CONSTRAINT [PK_Role] PRIMARY KEY ([Id])
);

CREATE TABLE [User] (
    [Id] bigint NOT NULL IDENTITY,
    [Email] nvarchar(70) NOT NULL,
    [HasLoggedInWithExternalProvider] bit NULL,
    [IsDisabled] bit NULL,
    [Version] int NOT NULL,
    [CreatedAt] datetime2 NOT NULL,
    [ModifiedAt] datetime2 NOT NULL,
    CONSTRAINT [PK_User] PRIMARY KEY ([Id])
);

CREATE TABLE [RolePermission] (
    [RoleId] int NOT NULL,
    [PermissionId] int NOT NULL,
    CONSTRAINT [PK_RolePermission] PRIMARY KEY ([RoleId], [PermissionId]),
    CONSTRAINT [FK_RolePermission_Permission_PermissionId] FOREIGN KEY ([PermissionId]) REFERENCES [Permission] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_RolePermission_Role_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [Role] ([Id]) ON DELETE CASCADE
);

CREATE TABLE [UserNotification] (
    [NotificationId] bigint NOT NULL,
    [UserId] bigint NOT NULL,
    [IsMarkedAsRead] bit NOT NULL,
    CONSTRAINT [PK_UserNotification] PRIMARY KEY ([NotificationId], [UserId]),
    CONSTRAINT [FK_UserNotification_Notification_NotificationId] FOREIGN KEY ([NotificationId]) REFERENCES [Notification] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_UserNotification_User_UserId] FOREIGN KEY ([UserId]) REFERENCES [User] ([Id]) ON DELETE CASCADE
);

CREATE TABLE [UserRole] (
    [RoleId] int NOT NULL,
    [UserId] bigint NOT NULL,
    CONSTRAINT [PK_UserRole] PRIMARY KEY ([RoleId], [UserId]),
    CONSTRAINT [FK_UserRole_Role_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [Role] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_UserRole_User_UserId] FOREIGN KEY ([UserId]) REFERENCES [User] ([Id]) ON DELETE CASCADE
);

CREATE UNIQUE INDEX [IX_Permission_Code] ON [Permission] ([Code]);

CREATE INDEX [IX_RolePermission_PermissionId] ON [RolePermission] ([PermissionId]);

CREATE UNIQUE INDEX [IX_User_Email] ON [User] ([Email]);

CREATE INDEX [IX_UserNotification_UserId] ON [UserNotification] ([UserId]);

CREATE INDEX [IX_UserRole_UserId] ON [UserRole] ([UserId]);

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20250711204305_InitialCreate', N'9.0.1');

ALTER TABLE [User] ADD [FullName] nvarchar(150) NULL;

ALTER TABLE [User] ADD [JMBG] nvarchar(13) NULL;

ALTER TABLE [User] ADD [PassportNumber] nvarchar(10) NULL;

CREATE TABLE [Country] (
    [Id] bigint NOT NULL IDENTITY,
    [Name] nvarchar(100) NOT NULL,
    [Version] int NOT NULL,
    [CreatedAt] datetime2 NOT NULL,
    [ModifiedAt] datetime2 NOT NULL,
    CONSTRAINT [PK_Country] PRIMARY KEY ([Id])
);

CREATE TABLE [Vehicle] (
    [Id] bigint NOT NULL IDENTITY,
    [Name] nvarchar(100) NOT NULL,
    [Version] int NOT NULL,
    [CreatedAt] datetime2 NOT NULL,
    [ModifiedAt] datetime2 NOT NULL,
    CONSTRAINT [PK_Vehicle] PRIMARY KEY ([Id])
);

CREATE TABLE [Trip] (
    [Id] bigint NOT NULL IDENTITY,
    [EntryDate] datetime2 NOT NULL,
    [ExitDate] datetime2 NOT NULL,
    [ShouldPayTripFee] bit NULL,
    [UserId] bigint NOT NULL,
    [VehicleId] bigint NOT NULL,
    [Version] int NOT NULL,
    [CreatedAt] datetime2 NOT NULL,
    [ModifiedAt] datetime2 NOT NULL,
    CONSTRAINT [PK_Trip] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Trip_User_UserId] FOREIGN KEY ([UserId]) REFERENCES [User] ([Id]),
    CONSTRAINT [FK_Trip_Vehicle_VehicleId] FOREIGN KEY ([VehicleId]) REFERENCES [Vehicle] ([Id])
);

CREATE TABLE [CountryTrip] (
    [CountryId] bigint NOT NULL,
    [TripId] bigint NOT NULL,
    CONSTRAINT [PK_CountryTrip] PRIMARY KEY ([CountryId], [TripId]),
    CONSTRAINT [FK_CountryTrip_Country_CountryId] FOREIGN KEY ([CountryId]) REFERENCES [Country] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_CountryTrip_Trip_TripId] FOREIGN KEY ([TripId]) REFERENCES [Trip] ([Id]) ON DELETE CASCADE
);

CREATE INDEX [IX_CountryTrip_TripId] ON [CountryTrip] ([TripId]);

CREATE INDEX [IX_Trip_UserId] ON [Trip] ([UserId]);

CREATE INDEX [IX_Trip_VehicleId] ON [Trip] ([VehicleId]);

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20250711211327_AddedTripFeature', N'9.0.1');

EXEC sp_rename N'[User].[JMBG]', N'Jmbg', 'COLUMN';

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20250711220849_JmbgAttributeCaseChange', N'9.0.1');

DECLARE @var sysname;
SELECT @var = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Trip]') AND [c].[name] = N'ShouldPayTripFee');
IF @var IS NOT NULL EXEC(N'ALTER TABLE [Trip] DROP CONSTRAINT [' + @var + '];');
ALTER TABLE [Trip] DROP COLUMN [ShouldPayTripFee];

DECLARE @var1 sysname;
SELECT @var1 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[User]') AND [c].[name] = N'PassportNumber');
IF @var1 IS NOT NULL EXEC(N'ALTER TABLE [User] DROP CONSTRAINT [' + @var1 + '];');
ALTER TABLE [User] ALTER COLUMN [PassportNumber] nvarchar(9) NULL;

ALTER TABLE [User] ADD [BirthDate] datetime2 NULL;

CREATE TABLE [Citizen] (
    [Id] bigint NOT NULL IDENTITY,
    [Jmbg] nvarchar(13) NULL,
    [PassportNumber] nvarchar(9) NULL,
    [Version] int NOT NULL,
    [CreatedAt] datetime2 NOT NULL,
    [ModifiedAt] datetime2 NOT NULL,
    CONSTRAINT [PK_Citizen] PRIMARY KEY ([Id])
);

CREATE UNIQUE INDEX [IX_User_Jmbg] ON [User] ([Jmbg]) WHERE [Jmbg] IS NOT NULL;

CREATE UNIQUE INDEX [IX_User_PassportNumber] ON [User] ([PassportNumber]) WHERE [PassportNumber] IS NOT NULL;

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20250714194958_Citizen', N'9.0.1');

COMMIT;
GO

