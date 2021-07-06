import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupVerifyComponent } from './signup-verify.component';

describe('SignupVerifyComponent', () => {
  let component: SignupVerifyComponent;
  let fixture: ComponentFixture<SignupVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
