import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountIslandsComponent } from './count-islands.component';

describe('CountIslandsComponent', () => {
  let component: CountIslandsComponent;
  let fixture: ComponentFixture<CountIslandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountIslandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountIslandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
