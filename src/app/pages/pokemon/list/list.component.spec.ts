import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPokemonComponent } from './list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonService } from 'src/services/pokemon.service';
import { of } from 'rxjs';

describe('ListPokemonComponent', () => {
  let component: ListPokemonComponent;
  let fixture: ComponentFixture<ListPokemonComponent>;
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListPokemonComponent, HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(ListPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.inject(PokemonService);
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(ListPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create ListPokemonComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call the getListPokemon() method', () => {
      spyOn(service, 'getListPokemon').and.returnValue(of());
      // Call the method that should trigger doSomething() with specific arguments
      service.getListPokemon({ page: component.page });

      expect(service.getListPokemon).toHaveBeenCalled();
      expect(service.getListPokemon).toHaveBeenCalledWith({ page: component.page });
    });

    it('should call the getPokemon() method', () => {
      spyOn(service, 'getPokemon').and.returnValue(of());
      // Call the method that should trigger doSomething() with specific arguments
      service.getPokemon('https://pokeapi.co/api/v2/pokemon/bulbasaur');

      expect(service.getPokemon).toHaveBeenCalled();
      expect(service.getPokemon).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/bulbasaur');
    });

    it('should load more list of pokemon with page = 1', () => {
      component.loadMoreItems();
      expect(component.page).toEqual(2);
    });

    it('should load list on Near End of pokemon with page = 1', () => {
      component.onNearEndScroll();
      expect(component.page).toEqual(2);
    });
    // it('should call getListPeople', () => {
    //   expect(pokemonServiceSpy.getListPeople)
    //     .toHaveBeenCalledWith({page: component.page, pageSize: component.pageSize});
    // });
    // it('should total equal 100', () => {
    //   expect(component.total).toEqual(SAMPLE_TOTAL);
    // });
    // it('should list of person have value', () => {
    //   expect(component.peoples).toEqual(SAMPLE_PAGINATION.peoples);
    // });
  })
});
