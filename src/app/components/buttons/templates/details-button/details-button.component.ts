import {Component, Input} from '@angular/core';
import {UniversalButton} from "../../universal-button/universal-button";
import {IButtonTemplate} from "../button-template";

@Component({
  selector: 'app-details-button',
  templateUrl: './details-button.component.html',
  styleUrl: './details-button.component.css'
})
export class DetailsButtonComponent implements IButtonTemplate{
  @Input({required: true}) button!: UniversalButton
  @Input({required: true}) entity: any
}
