import { Component, Input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../../app/app.routes';
import { CONSTANTS } from '../../constants/Constants';
import { CommonModule } from '@angular/common';
import { TeslaService } from '../../services/tesla.service';

@Component({
  selector: 'app-next-step-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './next-step-button.component.html',
  styleUrl: './next-step-button.component.scss',
})
export class NextStepButtonComponent {
  @Input() stepIdTarget?: number;
  @Input() actualStepCompleted?: boolean;

  routes: Routes = routes;
  readonly CONSTANTS = CONSTANTS;

  constructor(public teslaService: TeslaService) {}
}
