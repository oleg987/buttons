import {UniversalButton} from "../universal-button/universal-button";
import {Router} from "@angular/router";
import {inject} from "@angular/core";

export class RedirectButton extends UniversalButton{
  path: string
  private router: Router

  constructor(path: string) {
    super();
    this.path = path
    this.router = inject(Router)
  }

  override execute(entity: any): void {
    this.router.navigate([this.path])
  }
}
