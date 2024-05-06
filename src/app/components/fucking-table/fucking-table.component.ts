import {Component, ComponentFactoryResolver, QueryList, ViewChildren} from '@angular/core';
import {DetailsButtonComponent} from "../buttons/templates/details-button/details-button.component";
import {DeleteButtonComponent} from "../buttons/templates/delete-button/delete-button.component";
import {ButtonCreationOptions} from "../../app.component";
import {UniversalButton} from "../buttons/universal-button/universal-button";
import {RedirectButton} from "../buttons/redirect-button/redirect-button";
import {ActionButton} from "../buttons/action-button/action-button";
import {ButtonFactory} from "../buttons/button-factory";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
  selector: 'app-fucking-table',
  templateUrl: './fucking-table.component.html',
  styleUrl: './fucking-table.component.css'
})
export class FuckingTableComponent {
  items:{id: number, name: string}[] = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Alice Cooper'},
    {id: 3, name: 'Ben Parker'}
  ];

  details: UniversalButton = new RedirectButton('some-path')
  delete: UniversalButton = new ActionButton((entity: {id: number, name: string}) => console.log(entity))

  options: ButtonCreationOptions[] = [
    {template: DetailsButtonComponent, universalButton: this.details},
    {template: DeleteButtonComponent, universalButton: this.delete},
    {template: DetailsButtonComponent, universalButton: this.details},
    {template: DeleteButtonComponent, universalButton: this.delete},
    {template: DetailsButtonComponent, universalButton: this.details},
    {template: DeleteButtonComponent, universalButton: this.delete},
  ]
}
