import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteWodComponent } from './execute-wod.component';

describe('ExecuteWodComponent', () => {
  let component: ExecuteWodComponent;
  let fixture: ComponentFixture<ExecuteWodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecuteWodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteWodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
