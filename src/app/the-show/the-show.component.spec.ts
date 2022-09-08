import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheShowComponent } from './the-show.component';

describe('TheShowComponent', () => {
  let component: TheShowComponent;
  let fixture: ComponentFixture<TheShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
