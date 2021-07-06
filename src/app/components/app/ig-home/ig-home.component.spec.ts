import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgHomeComponent } from './ig-home.component';

describe('IgHomeComponent', () => {
  let component: IgHomeComponent;
  let fixture: ComponentFixture<IgHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
