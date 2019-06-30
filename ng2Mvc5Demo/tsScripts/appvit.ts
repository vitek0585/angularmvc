import { Component } from '@angular/core';
@Component({
    selector: 'my-app-vit',
    template: '<div>Title {{title}}</div>'

})
export class AppVitComponent {
    title = 'ASP.NET MVC 5 with Angular 2';
    skills = ['MVC 5', 'Angular 2', 'TypeScript', 'Visual Studio 2015'];
    myskills = this.skills[2];
}
