import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoVisualViewComponent } from './algo-visual-view.component';

describe('AlgoVisualViewComponent', () => {
  let component: AlgoVisualViewComponent;
  let fixture: ComponentFixture<AlgoVisualViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgoVisualViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoVisualViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
