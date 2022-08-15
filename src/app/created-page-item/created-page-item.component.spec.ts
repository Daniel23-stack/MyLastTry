import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedPageItemComponent } from './created-page-item.component';

describe('CreatedPageItemComponent', () => {
  let component: CreatedPageItemComponent;
  let fixture: ComponentFixture<CreatedPageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedPageItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedPageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
