import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSUBCATComponent } from './sub-subcat.component';

describe('SubSUBCATComponent', () => {
  let component: SubSUBCATComponent;
  let fixture: ComponentFixture<SubSUBCATComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubSUBCATComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubSUBCATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
