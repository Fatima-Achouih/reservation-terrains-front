import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainDetailsComponent } from './terrain-details.component';

describe('TerrainDetailsComponent', () => {
  let component: TerrainDetailsComponent;
  let fixture: ComponentFixture<TerrainDetailsComponent>;

  beforeEach(async(() => {
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
