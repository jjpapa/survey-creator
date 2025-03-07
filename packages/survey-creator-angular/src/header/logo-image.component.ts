import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { CreatorModelComponent } from "../creator-model.component";
import { SurveyModel } from "survey-core";
import { CreatorBase, LogoImageViewModel } from "survey-creator-core";
import { AngularComponentFactory } from "survey-angular-ui";

@Component({
  selector: "svc-logo-image",
  templateUrl: "./logo-image.component.html",
  styles: [":host { display: none; }"]
})
export class CreatorLogoImageComponent extends CreatorModelComponent<LogoImageViewModel> implements AfterViewInit {
  @Input() data!: CreatorBase;
  @ViewChild("container", { read: ElementRef }) container!: ElementRef<HTMLDivElement>;
  public model!: LogoImageViewModel;
  protected createModel(): void {
    this.model = new LogoImageViewModel(this.creator, null);
  }
  protected getModel(): LogoImageViewModel {
    return this.model;
  }
  protected getPropertiesToTrack(): string[] {
    return ["data"];
  }
  public get creator(): CreatorBase {
    return this.data;
  }
  public get survey(): SurveyModel {
    return this.creator.survey;
  }
  ngAfterViewInit(): void {
    this.model.root = this.container.nativeElement;
  }
}
AngularComponentFactory.Instance.registerComponent("svc-logo-image", CreatorLogoImageComponent);