import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from '../models/model';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { Options } from '../models/options';
import { Config } from '../models/config';

@Injectable({
  providedIn: 'root',
})
export class TeslaService {
  baseModelPath: string;
  baseOptionPath: string;
  modelsAvailable: Model[];
  selectedModel!: Model | null;
  selectedColor!: Color | null;
  selectedConfig?: Config | undefined;
  colorsOfSelectedModelAvailable: Color[];
  optionsOfSelectedModelAvailable?: Options | undefined;
  checkedTowHitch?: boolean;
  checkedYokeWheel?: boolean;
  totalPrice?: number;

  models$!: Observable<Model[]>;

  constructor(private http: HttpClient) {
    this.baseModelPath = '/models';
    this.baseOptionPath = '/options/';
    this.modelsAvailable = [];
    this.colorsOfSelectedModelAvailable = [];
    this.models$ = this.getModels();
    this.setModels();
  }

  getModels(): Observable<Model[]> {
    return this.http.get<Model[]>(this.baseModelPath);
  }

  getOptions(): Observable<Options> {
    return this.http.get<Options>(
      this.baseOptionPath + this.selectedModel?.code
    );
  }

  setModels(): void {
    this.getModels().subscribe((models: Model[]) => {
      this.modelsAvailable = models;
    });
  }

  initializeStepTwoValues(options: Options): void {
    this.optionsOfSelectedModelAvailable = options;
  }

  updateSelectedModel(modelCode: string): void {
    this.selectedModel = this.modelsAvailable.filter(
      (model: Model) => model.code === modelCode
    )[0];
    this.updateColorsOfSelectedModel(this.selectedModel);
    this.updateSelectedColor(this.colorsOfSelectedModelAvailable[0].code);
    this.reinitializeSelectedValuesStepTwo();
  }

  updateColorsOfSelectedModel(model: Model): void {
    this.colorsOfSelectedModelAvailable = model.colors;
  }

  updateSelectedColor(colorCode: string): void {
    this.selectedColor = this.colorsOfSelectedModelAvailable.filter(
      (color: Color) => color.code === colorCode
    )[0];
    this.reinitializeSelectedValuesStepTwo();
  }

  updateSelectedConfig(configId: number): void {
    if (configId === 0) {
      this.selectedConfig = undefined;
    } else {
      this.selectedConfig =
        this.optionsOfSelectedModelAvailable?.configs.filter(
          (config: Config) => config.id == configId
        )[0];
    }
  }

  saveYokeWheel(checked?: boolean): void {
    this.checkedYokeWheel = checked;
  }

  saveTowHitch(checked?: boolean): void {
    this.checkedTowHitch = checked;
  }

  calculateTotalPrice(): number {
    const totalPrice: number =
      this.selectedColor && this.selectedConfig
        ? this.selectedColor.price +
          this.selectedConfig.price +
          (this.checkedTowHitch ? 1000 : 0) +
          (this.checkedYokeWheel ? 1000 : 0)
        : 0;
    this.totalPrice = totalPrice;
    return totalPrice;
  }

  reinitializeSelectedValues(): void {
    this.selectedColor = null;
    this.selectedModel = null;
    this.colorsOfSelectedModelAvailable = [];
  }

  reinitializeSelectedValuesStepTwo(): void {
    this.selectedConfig = undefined;
    this.optionsOfSelectedModelAvailable = undefined;
    this.checkedTowHitch = undefined;
    this.checkedYokeWheel = undefined;
  }

  stepTwoValuesInitialized(): boolean {
    return !!this.optionsOfSelectedModelAvailable;
  }

  stepOneCompleted(): boolean {
    return !!this.selectedModel && !!this.selectedColor;
  }

  stepTwoCompleted(): boolean {
    return this.selectedConfig !== undefined;
  }
}
