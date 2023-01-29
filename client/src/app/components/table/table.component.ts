import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  @Input()
  title: any;

  @Input()
  tableData: any;
  tableHeaders: string[] = [];

  ngOnInit(): void {
    this.tableHeaders = Object.keys(this.tableData[0])
  }

}
