import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectComponent2 } from './subscribe.component';

describe('RedirectComponent2', () => {
  let component: RedirectComponent2;
  let fixture: ComponentFixture<RedirectComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectComponent2 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
