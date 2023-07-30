import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeaPageComponent } from './add-tea-page.component';

describe('AddTeaPageComponent', () => {
  let component: AddTeaPageComponent;
  let fixture: ComponentFixture<AddTeaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTeaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTeaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
