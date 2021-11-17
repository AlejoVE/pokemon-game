import pokemonAPI from '@/api/pokemonAPI'

describe('pokemonAPI', () => {
	test("Axios should be configured with the pokemon'S API", async () => {
        expect(pokemonAPI.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    })
})
