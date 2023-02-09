import { Component, OnInit } from '@angular/core';
import { RootAppService } from '../../shared/services/root-app.service';

@Component({
  selector: 'app-algo-visual-view',
  templateUrl: './algo-visual-view.component.html',
  styleUrls: ['./algo-visual-view.component.scss']
})
export class AlgoVisualViewComponent implements OnInit{
  constructor( private rootAppService: RootAppService ){}
  title: string = 'Algo Visual'
  ngOnInit(): void {
      this.rootAppService.setCurrentAppTitle(this.title);
  }
}
