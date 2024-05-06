import {AfterViewInit, Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef} from '@angular/core';
import {ButtonCreationOptions} from "../../app.component";
import {ButtonFactory} from "../buttons/button-factory";

@Component({
  selector: 'app-fucking-button-block',
  templateUrl: './fucking-button-block.component.html',
  styleUrl: './fucking-button-block.component.css'
})
export class FuckingButtonBlockComponent implements AfterViewInit{
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  @Input({required: true}) options!: ButtonCreationOptions[]
  @Input({required: true}) entity: any

  private buttonFactory: ButtonFactory

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.buttonFactory = new ButtonFactory(componentFactoryResolver)
  }

  ngAfterViewInit(): void {
    for (let i = 0; i < this.options.length; i++){
      this.buttonFactory.create(this.options[i], this.entity, this.container)
    }
  }
}
