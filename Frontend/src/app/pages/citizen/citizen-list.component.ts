import { ApiService } from 'src/app/business/services/api/api.service';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { Component, OnInit } from '@angular/core';
import { Citizen } from 'src/app/business/entities/business-entities.generated';
import { Column, SpiderlyDataTableComponent } from 'spiderly';

@Component({
    selector: 'citizen-list',
    templateUrl: './citizen-list.component.html',
    imports: [
        TranslocoDirective,
        SpiderlyDataTableComponent,
    ]
})
export class CitizenListComponent implements OnInit {
    cols: Column<Citizen>[];

    getPaginatedCitizenListObservableMethod = this.apiService.getPaginatedCitizenList;
    exportCitizenListToExcelObservableMethod = this.apiService.exportCitizenListToExcel;
    deleteCitizenObservableMethod = this.apiService.deleteCitizen;

    constructor(
        private apiService: ApiService,
        private translocoService: TranslocoService,
    ) { }

    ngOnInit(){
        this.cols = [
            {name: 'JMBG', filterType: 'text', field: 'jmbg'},
            {name: 'Passport Number', filterType: 'text', field: 'passportNumber'},
            {actions:[
                {name: this.translocoService.translate('Details'), field: 'Details'},
                {name:  this.translocoService.translate('Delete'), field: 'Delete'},
            ]},
        ]
    }
}