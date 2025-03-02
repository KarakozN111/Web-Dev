import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';


describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({//await acинхронная операция
      imports: [AboutComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //test
  it('create an instance of AboutComponent', () => {
    expect(component).toBeTruthy();
  });
});