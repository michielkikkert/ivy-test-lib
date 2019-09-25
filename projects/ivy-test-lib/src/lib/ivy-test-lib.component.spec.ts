import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvyTestLibComponent } from './ivy-test-lib.component';

describe('IvyTestLibComponent', () => {
  let component: IvyTestLibComponent;
  let fixture: ComponentFixture<IvyTestLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvyTestLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvyTestLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
