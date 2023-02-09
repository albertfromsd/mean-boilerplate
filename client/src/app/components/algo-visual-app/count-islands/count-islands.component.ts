import { Component, OnInit } from '@angular/core';
import { CountIslandsService } from '../../../shared/services/count-islands.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-count-islands',
  templateUrl: './count-islands.component.html',
  styleUrls: ['./count-islands.component.scss']
})
export class CountIslandsComponent implements OnInit {
  board: number[][] = [];
  visited: {[key:string]: boolean} = {};
  output: number | undefined = undefined;

  constructor( private countIslandsService: CountIslandsService ) {}

  ngOnInit(): void {
    this.countIslandsService.createNewBoard(5, 5);
    this.countIslandsService.getBoard().subscribe(
      (board: number[][]) => this.board = board
    );
    this.countIslandsService.getOutput().subscribe(
      (output: number | undefined) => this.output = output
    )
  }

  boardForm = new FormBuilder().nonNullable.group({
    rows: [5],
    columns: [5]
  })

  createRange(size: number) {
    return new Array(size).fill(null);
  }

  createNewBoard(): void {
    const {rows, columns} = this.boardForm.getRawValue();
    this.countIslandsService.createNewBoard( rows, columns );
  }

  updateBoard(i: number, j: number, cell: number) {
    let val = cell === 0 ? 1 : 0;
    // create copy of array
    let tempBoard = this.board.slice();
    // create copy of row
    let tempRow = tempBoard[i].slice();
    // reassign value on single layered arrays only;
    // reassigning value on nested array with [i][j] results in read-only error
    tempRow[j] = val;
    tempBoard[i] = tempRow;

    this.countIslandsService.updateBoard(tempBoard);
  }

  resetBoard(): void {
    this.countIslandsService.createNewBoard(5, 5);
    this.countIslandsService.setOutput(undefined);
  }

  solve(): void {
    // enter algorithm code here
    // dispatch to store after solving

    let boardCopy = this.board.slice();
    let visited = this.visited;
    function scanner(i: number, j: number): void {
      const idxKey: string = `${i},${j}`;
      if( i<0 || j<0
        || i>boardCopy.length-1
        || j>boardCopy[0].length-1
        || visited[idxKey]
      ) {
        return;
      }

      visited[idxKey] = true;
      if( boardCopy[i][j] == 1 ) {
        scanner(i+1, j);
        scanner(i-1, j);
        scanner(i, j+1);
        scanner(i, j-1);
      }
    }
    let count = 0;
    for( let k=0; k<boardCopy.length; k++ ) {
      for( let l=0; l<boardCopy[0].length; l++ ) {
        const idxKey: string = `${k},${l}`;
        if( !visited[idxKey] && boardCopy[k][l] == 1 ) {
          count++;
          scanner(k, l);
        } else {
          visited[idxKey] = true;
        }
      }
    }

    this.countIslandsService.setOutput(count);
  }
}
