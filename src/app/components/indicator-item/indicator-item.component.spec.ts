import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorItemComponent } from './indicator-item.component';

describe('IndicatorItemComponent', () => {
  let component: IndicatorItemComponent;
  let fixture: ComponentFixture<IndicatorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
