import {UniversalButton} from "../universal-button/universal-button";

export class ActionButton extends UniversalButton{
  action: (entity:any) => void

  constructor(action: (entity:any) => void) {
    super();
    this.action = action
  }

  override execute(entity:any): void {
    this.action(entity);
  }
}
