import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryCardsComponent } from './secondary-cards.component';

describe('SecondaryCardsComponent', () => {
  let component: SecondaryCardsComponent;
  let fixture: ComponentFixture<SecondaryCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondaryCardsComponent]
    });
    fixture = TestBed.createComponent(SecondaryCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
