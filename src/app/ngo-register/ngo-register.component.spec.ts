import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgoRegisterComponent } from './ngo-register.component';

describe('NgoRegisterComponent', () => {
  let component: NgoRegisterComponent;
  let fixture: ComponentFixture<NgoRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
