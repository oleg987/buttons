import {ComponentFactoryResolver, inject, ViewContainerRef} from "@angular/core";
import {ButtonCreationOptions} from "../../app.component";

export class ButtonFactory{

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }

  create(options: ButtonCreationOptions, entity: any, container: ViewContainerRef){
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(options.template);
    const componentRef = container.createComponent(componentFactory);
    componentRef.instance.button = options.universalButton;
    componentRef.instance.entity = entity;
  }
}
