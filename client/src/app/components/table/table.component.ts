import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges{
  @Input()
  title: any;

  @Input()
  tableData: any;
  tableHeaders: string[] = [];

  ngOnInit(): void {
    if( this.tableData.length )
      this.tableHeaders = Object.keys(this.tableData[0]);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if( this.tableData.length && changes['tableData'] )
      this.tableHeaders = Object.keys(this.tableData[0]);
  }


}
