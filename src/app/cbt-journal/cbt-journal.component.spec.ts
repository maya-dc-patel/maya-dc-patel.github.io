import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbtJournalComponent } from './cbt-journal.component';

describe('CbtJournalComponent', () => {
  let component: CbtJournalComponent;
  let fixture: ComponentFixture<CbtJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbtJournalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CbtJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
