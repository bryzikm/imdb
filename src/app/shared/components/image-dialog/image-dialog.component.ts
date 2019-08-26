import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss']
})
export class ImageDialogComponent {
  @Input() header: string;
  @Input() imageSource: string;
  @Output() closeDialog = new EventEmitter();

  constructor() {
  }

  close(): void {
    this.closeDialog.emit();
  }
}
