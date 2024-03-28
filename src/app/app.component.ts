import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarStepsComponent } from '../components/navbar-steps/navbar-steps.component';
import { ImageComponent } from '../components/image/image.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    RouterModule,
    NavbarStepsComponent,
    ImageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['../styles.scss', './app.component.scss'],
})
export class AppComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(' ');
  }
}
