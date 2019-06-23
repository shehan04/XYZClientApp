import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsLandingComponent } from './assets-landing.component';

describe('AssetsLandingComponent', () => {
  let component: AssetsLandingComponent;
  let fixture: ComponentFixture<AssetsLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
