import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTypeComponent } from './pokemon-type.component';

describe('PokemonTypeComponent', () => {
  let component: PokemonTypeComponent;
  let fixture: ComponentFixture<PokemonTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PokemonTypeComponent]
    });
    fixture = TestBed.createComponent(PokemonTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return class', () => {
    const testInputValue = 'normal';
    component.type = testInputValue;
    fixture.detectChanges();

    const result = component.hbTypeClass;
    console.log('result: ', result);
    expect(result).toBe('badge-normal');
  });
});
