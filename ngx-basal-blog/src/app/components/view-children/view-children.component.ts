import { AfterViewInit, Component, Directive, Input, QueryList, ViewChildren } from '@angular/core';
import { PaneComponent } from './pane/pane.component';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrls: ['./view-children.component.css']
})
export class ViewChildrenComponent implements AfterViewInit {
  shouldShow = false;
  serializedPanes: String = '';

  // TODO(issue/24571): remove '!'.
  @ViewChildren(PaneComponent) panes: QueryList<PaneComponent>;


  show() { this.shouldShow = !this.shouldShow; }

  ngAfterViewInit() {
    this.calculateSerializedPanes();
    this.panes.changes.subscribe((r) => { this.calculateSerializedPanes(); });
  }

  calculateSerializedPanes() {
    setTimeout(() => { this.serializedPanes = this.panes.map(p => p.id).join(', '); }, 0);
  }

}
