import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAppComponent } from './user-app.component';

describe('UserAppViewComponent', () => {
  let component: UserAppComponent;
  let fixture: ComponentFixture<UserAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
