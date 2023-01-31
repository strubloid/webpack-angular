import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    public title = 'WebpackAngular';
    public currentTimeFRLocale: string | undefined;

    ngOnInit(): void {
        moment.locale('fr');
        this.currentTimeFRLocale = moment().format('LLL');
    }
}