import {Component, Input} from '@angular/core';
import {UniversalButton} from "../../universal-button/universal-button";
import {IButtonTemplate} from "../button-template";

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.css'
})
export class DeleteButtonComponent implements IButtonTemplate{
  @Input({required: true}) button!: UniversalButton
  @Input({required: true}) entity: any
}
