import { ApiService } from 'src/app/business/services/api/api.service';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/business/entities/business-entities.generated';
import { Column, SpiderlyDataTableComponent } from 'spiderly';

@Component({
    selector: 'vehicle-list',
    templateUrl: './vehicle-list.component.html',
    imports: [
        TranslocoDirective,
        SpiderlyDataTableComponent,
    ]
})
export class VehicleListComponent implements OnInit {
    cols: Column<Vehicle>[];

    getPaginatedVehicleListObservableMethod = this.apiService.getPaginatedVehicleList;
    exportVehicleListToExcelObservableMethod = this.apiService.exportVehicleListToExcel;
    deleteVehicleObservableMethod = this.apiService.deleteVehicle;

    constructor(
        private apiService: ApiService,
        private translocoService: TranslocoService,
    ) { }

    ngOnInit(){
        this.cols = [
            {name: 'Name', filterType: 'text', field: 'name'},
            {actions:[
                {name: this.translocoService.translate('Details'), field: 'Details'},
                {name:  this.translocoService.translate('Delete'), field: 'Delete'},
            ]},
        ]
    }
}