import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoAboutusComponent } from './ngo-aboutus.component';

describe('NgoAboutusComponent', () => {
  let component: NgoAboutusComponent;
  let fixture: ComponentFixture<NgoAboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoAboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
