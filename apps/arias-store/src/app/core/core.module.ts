import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { ShellComponent } from './components/shell/shell.component';

@NgModule({
  declarations: [ShellComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [ShellComponent],
})
export class CoreModule {}
