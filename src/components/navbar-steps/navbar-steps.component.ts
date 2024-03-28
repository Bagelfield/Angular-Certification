import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../../app/app.routes';
import { TeslaService } from '../../services/tesla.service';
import { CONSTANTS } from '../../constants/Constants';

@Component({
  selector: 'app-navbar-steps',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar-steps.component.html',
  styleUrl: './navbar-steps.component.scss',
})
export class NavbarStepsComponent {
  routes: Routes = routes;
  readonly CONSTANTS = CONSTANTS;

  constructor(public teslaService: TeslaService) {}
}
