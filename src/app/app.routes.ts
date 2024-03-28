import { Routes } from '@angular/router';
import { StepOneComponent } from '../components/step-one/step-one.component';
import { StepTwoComponent } from '../components/step-two/step-two.component';
import { StepThreeComponent } from '../components/step-three/step-three.component';
import { ConfigChoosenGuard, ModelAndColorChoosenGuard } from './Guards';

export const routes: Routes = [
  {
    path: 'step-one',
    component: StepOneComponent,
  },
  {
    path: 'step-two',
    component: StepTwoComponent,
    canActivate: [ModelAndColorChoosenGuard],
  },
  {
    path: 'step-three',
    component: StepThreeComponent,
    canActivate: [ModelAndColorChoosenGuard, ConfigChoosenGuard],
  },
  { path: '**', redirectTo: '/step-one', pathMatch: 'full' },
];
