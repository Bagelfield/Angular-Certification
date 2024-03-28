import { Component, Input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../../app/app.routes';
import { CONSTANTS } from '../../constants/Constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-previous-step-button',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './previous-step-button.component.html',
  styleUrl: './previous-step-button.component.scss',
})
export class PreviousStepButtonComponent {
  @Input() stepIdTarget?: number;

  routes: Routes = routes;
  readonly CONSTANTS = CONSTANTS;
}
