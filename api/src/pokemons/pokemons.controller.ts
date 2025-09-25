import { Controller, Get, Param, Query } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Get(':idOrName')
  async getOne(@Param('idOrName') idOrName: string) {
    return this.pokemonsService.getOne(idOrName);
  }
}
