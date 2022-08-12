import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundChangeInputComponent } from './background-change-input.component';

describe('BackgroundChangeInputComponent', () => {
  let component: BackgroundChangeInputComponent;
  let fixture: ComponentFixture<BackgroundChangeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundChangeInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundChangeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
