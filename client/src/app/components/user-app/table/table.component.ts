import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges{
  @Input() title: any;
  @Input() tableData: Array<any> = [];
  tableHeaders: string[] = [];

  constructor( private userService: UserService ) {}

  ngOnInit(): void {
    if( this.tableData.length && typeof this.tableData[0] === 'object' ) {
      this.tableHeaders = Object.keys(this.tableData[0]).filter( header => header !== '_id');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if( this.tableData.length
        && typeof this.tableData[0] === 'object'
        && changes['tableData']
    ) {
      this.tableHeaders = Object.keys(this.tableData[0]).filter( header => header !== '_id' );
    }
  }

  edit(): void {

  }

  delete(_id: string): void {
    this.userService.deleteUser(_id);
  }
}
