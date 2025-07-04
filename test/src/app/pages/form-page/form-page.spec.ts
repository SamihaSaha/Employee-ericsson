import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPage } from './form-page';

describe('FormPage', () => {
  let component: FormPage;
  let fixture: ComponentFixture<FormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
