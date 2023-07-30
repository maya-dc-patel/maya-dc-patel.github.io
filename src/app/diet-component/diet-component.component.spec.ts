import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietComponentComponent } from './diet-component.component';

describe('DietComponentComponent', () => {
  let component: DietComponentComponent;
  let fixture: ComponentFixture<DietComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
