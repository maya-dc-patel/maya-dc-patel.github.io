import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalChipComponent } from './journal-chip.component';

describe('JournalChipComponent', () => {
  let component: JournalChipComponent;
  let fixture: ComponentFixture<JournalChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalChipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
