import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosPresenterComponent } from './photos-presenter.component';

describe('PhotosPresenterComponent', () => {
  let component: PhotosPresenterComponent;
  let fixture: ComponentFixture<PhotosPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
