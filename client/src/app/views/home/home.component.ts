import { Component, OnInit } from '@angular/core';
import { RootAppService } from '../../shared/services/root-app.service';
import { selectAppTitle } from '../../store/app/app.selector';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  title: string = 'Home'
  constructor( public rootAppService: RootAppService ) {}

  ngOnInit(): void {
    this.rootAppService.setCurrentAppTitle(this.title);
  }
}
