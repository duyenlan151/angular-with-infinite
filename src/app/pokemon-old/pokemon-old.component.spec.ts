import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonOldComponent } from './pokemon-old.component';

describe('PokemonOldComponent', () => {
  let component: PokemonOldComponent;
  let fixture: ComponentFixture<PokemonOldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonOldComponent]
    });
    fixture = TestBed.createComponent(PokemonOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
