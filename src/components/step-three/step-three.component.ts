import { Component } from '@angular/core';
import { TeslaService } from '../../services/tesla.service';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../image/image.component';
import { ConfigPipe } from '../../pipes/config.pipe';

@Component({
  selector: 'app-step-three',
  standalone: true,
  imports: [CommonModule, ImageComponent, ConfigPipe],
  templateUrl: './step-three.component.html',
  styleUrl: './step-three.component.scss',
})
export class StepThreeComponent {
  title: string;
  modelLabel: string;
  packageTowHitch: string;
  packageYokeWheel: string;

  constructor(public teslaService: TeslaService) {
    this.title = 'Step 3: Summary';
    this.modelLabel = 'Your Tesla ' + teslaService.selectedModel?.description;
    this.packageTowHitch = teslaService.checkedTowHitch
      ? 'Tow Hitch Package'
      : '';
    this.packageYokeWheel = teslaService.checkedYokeWheel
      ? 'Yoke Steering Wheel Package'
      : '';
  }
}
