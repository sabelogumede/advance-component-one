import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrreleventImplementationComponent } from './irrelevent-implementation.component';

describe('IrreleventImplementationComponent', () => {
  let component: IrreleventImplementationComponent;
  let fixture: ComponentFixture<IrreleventImplementationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrreleventImplementationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IrreleventImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
