import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'
import { pokemons } from '../mocks/pokemons'
describe('PokemonOptions Component', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallowMount(PokemonOptions, {
			props: {
				pokemons,
				selected: false,
			},
		})
	})

	test('should match snapshot', () => {
		expect(wrapper.html()).toMatchSnapshot()
	})

	test('should show 4 options correctly', () => {
		const liTags = wrapper.findAll('li')
		expect(liTags.length).toBe(4)

		expect(liTags[0].text()).toBe('bulbasaur')
		expect(liTags[1].text()).toBe('ivysaur')
		expect(liTags[2].text()).toBe('venusaur')
		expect(liTags[3].text()).toBe('charmander')
	})

	test('should emit event "selection"', () => {
		const [li1] = wrapper.findAll('li')
		li1.trigger('click')

		expect(wrapper.emitted('selection').length).toBe(1)
		expect(wrapper.emitted('selection')[0]).toEqual([1])
	})
})
