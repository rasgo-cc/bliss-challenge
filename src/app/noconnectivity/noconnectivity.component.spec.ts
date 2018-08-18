import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoconnectivityComponent } from './noconnectivity.component';

describe('NoconnectivityComponent', () => {
  let component: NoconnectivityComponent;
  let fixture: ComponentFixture<NoconnectivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoconnectivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoconnectivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
