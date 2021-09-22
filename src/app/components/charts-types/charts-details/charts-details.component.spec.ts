import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsDetailsComponent } from './charts-details.component';

describe('ChartsDetailsComponent', () => {
  let component: ChartsDetailsComponent;
  let fixture: ComponentFixture<ChartsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
