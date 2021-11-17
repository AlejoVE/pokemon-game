import pokemonAPI from '../api/pokemonAPI'

export const getPokemons = () => {
	// To create an array with 650 empty indexes
	const pokemonsArr = Array.from(Array(650))
	return pokemonsArr.map((_, index) => index + 1)
}

export const getPokemonsNames = async ([a, b, c, d] = []) => {
	const promisesArr = [
		pokemonAPI.get(`/${a}`),
		pokemonAPI.get(`/${b}`),
		pokemonAPI.get(`/${c}`),
		pokemonAPI.get(`/${d}`),
	]

	const [pokemonA, pokemonB, pokemonC, pokemonD] = await Promise.all(
		promisesArr
	)
	return [
		{
			name: pokemonA.data.name,
			id: pokemonA.data.id,
		},
		{
			name: pokemonB.data.name,
			id: pokemonB.data.id,
		},
		{
			name: pokemonC.data.name,
			id: pokemonC.data.id,
		},
		{
			name: pokemonD.data.name,
			id: pokemonD.data.id,
		},
	]
}
const getPokemonsOptions = async () => {
	const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
	const pokemons = await getPokemonsNames(mixedPokemons.splice(0, 4))
	return pokemons
}

export default getPokemonsOptions
