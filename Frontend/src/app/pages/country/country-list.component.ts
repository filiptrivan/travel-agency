import { ApiService } from 'src/app/business/services/api/api.service';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/business/entities/business-entities.generated';
import { Column, SpiderlyDataTableComponent } from 'spiderly';

@Component({
    selector: 'country-list',
    templateUrl: './country-list.component.html',
    imports: [
        TranslocoDirective,
        SpiderlyDataTableComponent,
    ]
})
export class CountryListComponent implements OnInit {
    cols: Column<Country>[];

    getPaginatedCountryListObservableMethod = this.apiService.getPaginatedCountryList;
    exportCountryListToExcelObservableMethod = this.apiService.exportCountryListToExcel;
    deleteCountryObservableMethod = this.apiService.deleteCountry;

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