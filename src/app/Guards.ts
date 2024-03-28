import { inject } from '@angular/core';
import { TeslaService } from '../services/tesla.service';
import { Router } from '@angular/router';

export const ModelAndColorChoosenGuard = () => {
  const teslaService: TeslaService = inject(TeslaService);
  const router: Router = inject(Router);

  if (teslaService.stepOneCompleted()) {
    return true;
  } else {
    router.navigateByUrl('/step-one');
    return false;
  }
};

export const ConfigChoosenGuard = () => {
  const teslaService: TeslaService = inject(TeslaService);
  const router: Router = inject(Router);

  if (teslaService.stepTwoCompleted()) {
    return true;
  } else {
    router.navigateByUrl('/step-two');
    return false;
  }
};
