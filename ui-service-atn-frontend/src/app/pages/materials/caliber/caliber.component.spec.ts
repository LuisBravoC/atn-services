import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaliberComponent } from './caliber.component';

describe('CaliberComponent', () => {
  let component: CaliberComponent;
  let fixture: ComponentFixture<CaliberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaliberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaliberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
