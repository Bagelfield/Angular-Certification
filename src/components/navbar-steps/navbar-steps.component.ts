import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../../app/app.routes';
import { TeslaService } from '../../services/tesla.service';

@Component({
  selector: 'app-navbar-steps',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar-steps.component.html',
  styleUrl: './navbar-steps.component.scss',
})
export class NavbarStepsComponent {
  routes: Routes = routes;

  stepOne: string;
  stepTwo: string;
  stepThree: string;

  constructor(public teslaService: TeslaService) {
    this.stepOne = 'Step 1';
    this.stepTwo = 'Step 2';
    this.stepThree = 'Step 3';
  }
}
