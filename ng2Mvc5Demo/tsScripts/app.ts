
import { Component } from '@angular/core';
import { UpgradeModule } from "@angular/upgrade/static";

declare var config: any;

@Component({
    selector: 'my-app',
    templateUrl: '/home/navbar',
    providers: [UpgradeModule]

})
export class AppComponent {
    title = 'ASP.NET MVC 5 with Angular 2';
    skills = ['MVC 5', 'Angular 2', 'TypeScript', 'Visual Studio 2015'];
    myskills = this.skills[2];

    constructor(private upgrade: UpgradeModule) { }
    ngOnInit() {
        this.upgrade.bootstrap(document.body, ['app']);
        // this.upgrade.bootstrap(document.getElementById('app-js'), ['phonecatApp']);
    }
}

