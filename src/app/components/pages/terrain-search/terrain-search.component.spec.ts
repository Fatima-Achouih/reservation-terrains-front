import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainSearchComponent } from './terrain-search.component';

describe('TerrainSearchComponent', () => {
  let component: TerrainSearchComponent;
  let fixture: ComponentFixture<TerrainSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrainSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrainSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
