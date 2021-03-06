import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MarkdownModule } from 'ngx-markdown';
import { AngularDraggableModule } from 'ngx-draggable-resize';

@NgModule({
  imports: [
    CommonModule,
    AngularDraggableModule,
    TabsModule.forRoot(),
    MarkdownModule.forRoot()
  ],
  exports: [
    AngularDraggableModule,
    TabsModule,
    MarkdownModule
  ],
  declarations: []
})
export class SharedModule { }
