import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMoreOpenComponent } from './menu-more-open.component';

describe('MenuMoreOpenComponent', () => {
  let component: MenuMoreOpenComponent;
  let fixture: ComponentFixture<MenuMoreOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuMoreOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMoreOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
