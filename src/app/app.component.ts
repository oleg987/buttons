import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  reflectComponentType,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {UniversalButton} from "./components/buttons/universal-button/universal-button";
import {RedirectButton} from "./components/buttons/redirect-button/redirect-button";
import {ActionButton} from "./components/buttons/action-button/action-button";
import {DetailsButtonComponent} from "./components/buttons/templates/details-button/details-button.component";
import {DeleteButtonComponent} from "./components/buttons/templates/delete-button/delete-button.component";
import {ButtonFactory} from "./components/buttons/button-factory";
import {FuckingWrongComponentComponent} from "./components/fucking-wrong-component/fucking-wrong-component.component";
import {IButtonTemplate} from "./components/buttons/templates/button-template";

export interface ButtonCreationOptions{
  template: Type<IButtonTemplate>
  universalButton: UniversalButton
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

}
