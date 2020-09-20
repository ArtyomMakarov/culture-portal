import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkLogComponent } from './work-log.component';

@NgModule({
  declarations: [WorkLogComponent],
  imports: [CommonModule],
  exports: [WorkLogComponent],
})
export class WorkLogModule {}
