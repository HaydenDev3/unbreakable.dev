import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignsPageComponent } from './designs-page.component';

describe('DesignsPageComponent', () => {
  let component: DesignsPageComponent;
  let fixture: ComponentFixture<DesignsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
