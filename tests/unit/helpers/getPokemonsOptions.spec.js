import getPokemonsOptions, {
	getPokemons,
	getPokemonsNames,
} from '@/helpers/getPokemonsOptions'

describe('getPokemonOptions helpers', () => {
	const pokemonArr = getPokemons()
	test('should return an array of numbers', () => {
		expect(pokemonArr.length).toBe(650)
		expect(pokemonArr.every((item) => typeof item === 'number')).toBeTruthy()
		expect(pokemonArr[0]).toBe(1)
		expect(pokemonArr[pokemonArr.length - 1]).toBe(650)
	})

	test('should return 4 elements with "name" property', async () => {
		const pokemons = await getPokemonsNames([1, 2, 3, 4])
		expect(pokemons).toStrictEqual([
			{ name: 'bulbasaur', id: 1 },
			{ name: 'ivysaur', id: 2 },
			{ name: 'venusaur', id: 3 },
			{ name: 'charmander', id: 4 },
		])
	})

	test('getPokemonsOptions should return a mixed array', async () => {
		const pokemons = await getPokemonsOptions()
		expect(pokemons).toEqual([
			{ name: expect.any(String), id: expect.any(Number) },
			{ name: expect.any(String), id: expect.any(Number) },
			{ name: expect.any(String), id: expect.any(Number) },
			{ name: expect.any(String), id: expect.any(Number) },
		])
	})
})
