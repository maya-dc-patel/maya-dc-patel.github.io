import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbtThinkingPatternComponent } from './cbt-thinking-pattern.component';

describe('CbtThinkingPatternComponent', () => {
  let component: CbtThinkingPatternComponent;
  let fixture: ComponentFixture<CbtThinkingPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbtThinkingPatternComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CbtThinkingPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
