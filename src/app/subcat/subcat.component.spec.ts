import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SUBcatComponent } from './subcat.component';

describe('SUBcatComponent', () => {
  let component: SUBcatComponent;
  let fixture: ComponentFixture<SUBcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SUBcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SUBcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
