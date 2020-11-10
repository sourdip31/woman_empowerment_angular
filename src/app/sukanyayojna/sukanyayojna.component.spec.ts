import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukanyayojnaComponent } from './sukanyayojna.component';

describe('SukanyayojnaComponent', () => {
  let component: SukanyayojnaComponent;
  let fixture: ComponentFixture<SukanyayojnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukanyayojnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukanyayojnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
