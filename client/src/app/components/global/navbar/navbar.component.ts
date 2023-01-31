import { Component, OnInit, Input } from '@angular/core';
import { RootAppService } from '../../../shared/services/root-app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  @Input() rootTitle: string = '';
  @Input() message: string = '';

  title: string = 'Navbar';

  constructor( public rootAppService: RootAppService ) {}

  ngOnInit(): void {
    this.rootAppService.getCurrentAppTitle().subscribe( (res: string) => {
      this.title = res;
    } )
  }
}
