import { ApiService } from 'src/app/business/services/api/api.service';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/business/entities/business-entities.generated';
import { Column, SpiderlyDataTableComponent } from 'spiderly';

@Component({
    selector: 'trip-list',
    templateUrl: './trip-list.component.html',
    imports: [
        TranslocoDirective,
        SpiderlyDataTableComponent,
    ]
})
export class TripListComponent implements OnInit {
    cols: Column<Trip>[];

    getPaginatedTripListObservableMethod = this.apiService.getPaginatedTripList;
    exportTripListToExcelObservableMethod = this.apiService.exportTripListToExcel;
    deleteTripObservableMethod = this.apiService.deleteTrip;

    constructor(
        private apiService: ApiService,
        private translocoService: TranslocoService,
    ) { }

    ngOnInit(){
        this.cols = [
            {name: 'User', filterType: 'text', field: 'userDisplayName'},
            {name: 'Entry Date', filterType: 'date', field: 'entryDate', showMatchModes: true},
            {name: 'Exit Date', filterType: 'date', field: 'exitDate', showMatchModes: true},
            {actions:[
                {name: this.translocoService.translate('Details'), field: 'Details'},
                {name:  this.translocoService.translate('Delete'), field: 'Delete'},
            ]},
        ]
    }
}