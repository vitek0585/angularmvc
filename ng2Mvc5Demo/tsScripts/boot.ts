import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app';
import { AppVitComponent } from './appvit';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
//import * as angular from 'angular';

declare var angular: any;
angular.module('app').directive('myAppVit',downgradeComponent({ component: AppVitComponent }));


@NgModule({
    imports: [BrowserModule, UpgradeModule],
    declarations: [AppComponent, AppVitComponent],
    bootstrap: [AppComponent],
    exports: [AppVitComponent],
    entryComponents: [AppVitComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }