import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TerrainDetailsComponent } from './terrain-details.component';

describe('TerrainDetailsComponent', () => {
  let component: TerrainDetailsComponent;
  let fixture: ComponentFixture<TerrainDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrainDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrainDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
