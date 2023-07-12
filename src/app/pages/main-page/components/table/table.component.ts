import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { IPost } from './../../../../interfaces/post.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableComponent {

  @Input() posts!: IPost[];

  @Output() navigateToPostPage = new EventEmitter<number>();

  public columnsToDisplay = ['id', 'title'];

  public columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand', 'link']

  public expandedElement: IPost | null | undefined;

  public navigateToPost(id: number): void {
    this.navigateToPostPage.emit(id);
  }
}
