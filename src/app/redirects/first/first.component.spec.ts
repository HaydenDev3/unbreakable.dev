import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectComponent1 } from './first.component';

describe('RedirectComponent1', () => {
  let component: RedirectComponent1;
  let fixture: ComponentFixture<RedirectComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectComponent1 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
