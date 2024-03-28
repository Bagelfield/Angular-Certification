import { Component, OnDestroy, OnInit } from '@angular/core';
import { TeslaService } from '../../services/tesla.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../image/image.component';
import { Options } from '../../models/options';
import { ConfigPipe } from '../../pipes/config.pipe';

@Component({
  selector: 'app-step-two',
  standalone: true,
  imports: [FormsModule, CommonModule, ImageComponent, ConfigPipe],
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.scss',
})
export class StepTwoComponent implements OnInit {
  title: string;
  configLabel: string;
  rangeLabel: string;
  speedLabel: string;
  costLabel: string;
  towHitchLabel: string;
  yokeWheelLabel: string;

  displayTowHitch?: boolean;
  displayYokeWheel?: boolean;
  checkedTowHitch?: boolean;
  checkedYokeWheel?: boolean;

  selectConfig: number;

  constructor(public teslaService: TeslaService) {
    this.title = 'Step 2: Select your config and options';
    this.configLabel = 'Config:';
    this.rangeLabel = 'Range: ';
    this.towHitchLabel = 'Tow hitch?';
    this.yokeWheelLabel = 'Yoke steering wheel?';
    this.speedLabel = 'Max speed: ';
    this.costLabel = 'Cost: ';
    this.displayTowHitch = false;
    this.displayYokeWheel = false;
    this.checkedTowHitch = false;
    this.checkedYokeWheel = false;
    this.selectConfig = 0;
  }

  ngOnInit(): void {
    if (!this.teslaService.stepTwoValuesInitialized()) {
      this.teslaService.getOptions().subscribe((options: Options) => {
        this.teslaService.initializeStepTwoValues(options);
        this.displayTowHitch = options.towHitch;
        this.displayYokeWheel = options.yoke;
      });
    } else {
      this.initializeValuesStep();
    }
  }

  configIdSelected(configId: number): void {
    this.teslaService.updateSelectedConfig(configId);
    this.selectConfig = configId;
  }

  initializeValuesStep(): void {
    this.selectConfig = this.teslaService.selectedConfig
      ? this.teslaService.selectedConfig.id
      : 0;
    this.displayTowHitch =
      this.teslaService.optionsOfSelectedModelAvailable?.towHitch;
    this.displayYokeWheel =
      this.teslaService.optionsOfSelectedModelAvailable?.yoke;
    this.checkedTowHitch = this.teslaService.checkedTowHitch;
    this.checkedYokeWheel = this.teslaService.checkedYokeWheel;
  }

  saveTowHitch(): void {
    this.teslaService.saveTowHitch(this.checkedTowHitch);
  }

  saveYokeWheel(): void {
    this.teslaService.saveYokeWheel(this.checkedYokeWheel);
  }
}
