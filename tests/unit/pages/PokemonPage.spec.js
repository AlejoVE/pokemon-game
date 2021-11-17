import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import { pokemons } from '../mocks/pokemons'

describe('PokemonPage Component', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallowMount(PokemonPage)
	})

	test('should call mixPokemonArr on mount ', () => {
		const mixPokemonArrSpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArr')
		const wrapper = shallowMount(PokemonPage)

		expect(mixPokemonArrSpy).toHaveBeenCalled()
	})

	test('should match snapshot when pokemon load', () => {
		const wrapper = shallowMount(PokemonPage, {
			data() {
				return {
					pokemonArr: pokemons,
					pokemon: pokemons[0],
					showPokemon: false,
					showResult: false,
					correctAnswer: null,
					message: '',
				}
			},
		})

		expect(wrapper.html()).toMatchSnapshot()
	})

	test('should show  PokemonPicture & PokemonOptions components', () => {
		const wrapper = shallowMount(PokemonPage, {
			data() {
				return {
					pokemonArr: pokemons,
					pokemon: pokemons[0],
					showPokemon: false,
					showResult: false,
					correctAnswer: null,
					message: '',
				}
			},
		})

		const PokemonPicture = wrapper.find('pokemon-picture-stub')
		const PokemonOptions = wrapper.find('pokemon-options-stub')
		expect(PokemonPicture.exists()).toBeTruthy()
		expect(PokemonOptions.exists()).toBeTruthy()

		expect(PokemonPicture.attributes('pokemonid')).toBe('1')
		expect(PokemonOptions.attributes('pokemons')).toBeTruthy()
	})

	test('Tests in checkAnswer', async () => {
		const wrapper = shallowMount(PokemonPage, {
			data() {
				return {
					pokemonArr: pokemons,
					pokemon: pokemons[0],
					showPokemon: false,
					showResult: false,
					correctAnswer: null,
					message: '',
				}
			},
		})

		await wrapper.vm.checkAnswer(1)
		expect(wrapper.find('h2').exists()).toBeTruthy()
		expect(wrapper.vm.showPokemon).toBe(true)

		await wrapper.vm.checkAnswer(2)
		expect(wrapper.vm.message).toBe(`Sorry, it was ${pokemons[0].name}!`)
	})
})
