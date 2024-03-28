import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TeslaService } from '../../services/tesla.service';
import { HttpClientModule } from '@angular/common/http';
import { ImageComponent } from '../image/image.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-step-one',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ImageComponent, FormsModule],
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.scss',
})
export class StepOneComponent implements OnInit {
  title: string;
  modelLabel: string;
  colorLabel: string;
  selectModel: string;
  selectColor: string;

  constructor(public teslaService: TeslaService) {
    this.title = 'Step 1: Choose your Model and color';
    this.modelLabel = 'Model:';
    this.colorLabel = 'Color: ';
    this.selectModel = '';
    this.selectColor = '';
  }

  ngOnInit(): void {
    this.selectModel = this.teslaService.selectedModel
      ? this.teslaService.selectedModel.code
      : '';
    this.selectColor = this.teslaService.selectedColor
      ? this.teslaService.selectedColor.code
      : '';
  }

  modelDescriptionSelected(modelCode: string): void {
    if (modelCode !== '') {
      this.teslaService.updateSelectedModel(modelCode);
      this.selectModel = modelCode;
      this.selectColor = this.teslaService.selectedColor!.code;
    } else {
      this.teslaService.reinitializeSelectedValues();
    }
  }

  colorDescriptionSelected(colorCode: string): void {
    this.teslaService.updateSelectedColor(colorCode);
    this.selectColor = colorCode;
  }
}
