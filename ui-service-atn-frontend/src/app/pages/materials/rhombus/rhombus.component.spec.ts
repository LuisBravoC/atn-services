import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhombusComponent } from './rhombus.component';

describe('RhombusComponent', () => {
  let component: RhombusComponent;
  let fixture: ComponentFixture<RhombusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhombusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhombusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
