import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent implements OnChanges {
  @Input() modelCode?: string;
  @Input() colorCode?: string;

  basePath: string;
  fullPath: string | null;

  constructor() {
    this.basePath = 'https://interstate21.com/tesla-app/images/';
    this.fullPath = null;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.modelCode && this.colorCode && this.modelCode !== '') {
      this.fullPath =
        this.basePath + this.modelCode + '/' + this.colorCode + '.jpg';
    } else {
      this.fullPath = null;
    }
  }
}
