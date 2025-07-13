import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, KeyValueDiffers, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { ApiService } from 'src/app/business/services/api/api.service';
import { Trip } from 'src/app/business/entities/business-entities.generated';
import { TripBaseDetailsComponent } from 'src/app/business/components/base-details/business-base-details.generated';
import { BaseFormCopy, SpiderlyFormGroup, SpiderlyMessageService, BaseFormService, SpiderlyPanelsModule, SpiderlyControlsModule, toCommaSeparatedString } from 'spiderly';
import * as FileSaver from 'file-saver';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'trip-details',
    templateUrl: './trip-details.component.html',
    imports: [
        TranslocoDirective,
        SpiderlyPanelsModule,
        SpiderlyControlsModule,
        TripBaseDetailsComponent
    ]
})
export class TripDetailsComponent extends BaseFormCopy implements OnInit {
    tripFormGroup = new SpiderlyFormGroup<Trip>({});

    constructor(
        protected override differs: KeyValueDiffers,
        protected override http: HttpClient,
        protected override messageService: SpiderlyMessageService, 
        protected override changeDetectorRef: ChangeDetectorRef,
        protected override router: Router, 
        protected override route: ActivatedRoute,
        protected override translocoService: TranslocoService,
        protected override baseFormService: BaseFormService,
        private apiService: ApiService,
    ) {
        super(differs, http, messageService, changeDetectorRef, router, route, translocoService, baseFormService);
    }

    override ngOnInit() {

    }

    override onBeforeSave = (): void => {

    }

    override onAfterSave = (): void => {
        forkJoin({
            user: this.apiService.getUser(this.tripFormGroup.controls.userId.value),
            countries: this.apiService.getCountriesNamebookListForTrip(this.tripFormGroup.controls.id.value),
        })
        .subscribe(({ user, countries }) => {
            const daysStaying = (this.tripFormGroup.controls.exitDate.value.getTime() - this.tripFormGroup.controls.entryDate.value.getTime()) / (1000 * 60 * 60 * 24);
            const text = `Full Name: ${user.fullName}
JMBG: ${user.jmbg}
Passport Number: ${user.passportNumber}
Countries: ${toCommaSeparatedString(countries.map(x => x.displayName))}
Entry Date: ${this.tripFormGroup.controls.entryDate.value}
Expected Number of Days Staying: ${daysStaying}
Should Pay The Trip Fee: ${this.tripFormGroup.controls.shouldPayTripFee.value ?? false}
`
            let blob = new Blob([
                text
            ], {type: "text/plain;charset=utf-8"});
            FileSaver.saveAs(blob, "Trip_Summary.txt");
        });
    }

}