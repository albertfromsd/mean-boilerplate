import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CountIslandsAction } from '../../store/algo-visual/count-islands/count-islands.action';
import { selectCountIslandsBoard, selectCountIslandsOutput } from '../../store/algo-visual/count-islands/count-islands.selector';

@Injectable({
  providedIn: 'root'
})
export class CountIslandsService {

  constructor( private store: Store ) { }

  getBoard(): Observable<number[][]> {
    return this.store.select(selectCountIslandsBoard);
  }

  createNewBoard(rows: number, columns: number): void {
    const board: number[][] = [];

    for( let i=0; i<rows; i++ ) {
      const row:number[] = [];
      for( let j=0; j<columns; j++ ) row.push(0)

      board.push(row);
    }
    this.store.dispatch(CountIslandsAction.setBoard({board}));
  }

  updateBoard( board: number[][] ): void {
    this.store.dispatch(CountIslandsAction.setBoard({board}));
  }

  getOutput(): Observable<number | undefined> {
    return this.store.select(selectCountIslandsOutput);
  }
  setOutput(output: number | undefined): void {
    this.store.dispatch(CountIslandsAction.setOutput({output}));
  }

}
