import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumDetailComponent } from './album-detail.component';

describe('AlbumDetailComponent', () => {
  let component: AlbumDetailComponent;
  let fixture: ComponentFixture<AlbumDetailComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumDetailComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AlbumDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  //test
  it('test creating', () => {
    expect(component).toBeTruthy();
  });
  
});