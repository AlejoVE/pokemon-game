<template>
	<h1 v-if="!pokemon">Loading...</h1>
	<div v-else>
		<h1>Which pokemon is this?</h1>
		<PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
		<PokemonOptions
			:pokemons="pokemonArr"
			:selected="showPokemon"
			@selection="checkAnswer($event)"
		/>
	</div>
	<template class="fade-in" v-if="showResult">
		<h2>{{ message }}</h2>
		<button @click="newGame">New game</button>
	</template>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemonsOptions from '@/helpers/getPokemonsOptions.js'

// console.table(getPokemonsOptions())
export default {
	components: {
		PokemonPicture,
		PokemonOptions,
	},
	data() {
		return {
			pokemonArr: [],
			pokemon: null,
			showPokemon: false,
			showResult: false,
			correctAnswer: null,
			message: '',
		}
	},
	methods: {
		async mixPokemonArr() {
			this.pokemonArr = await getPokemonsOptions()
			// x4 so the index is from 0 to 3
			const randonInt = Math.floor(Math.random() * 4)
			this.pokemon = this.pokemonArr[randonInt]
		},
		checkAnswer(pokemonId) {
			this.showPokemon = true
			const isCorrectAnswer = pokemonId === this.pokemon.id
			if (isCorrectAnswer) {
				this.message = 'Correct!'
			} else {
				this.message = `Sorry, it was ${this.pokemon.name}!`
			}
			this.showResult = true
		},
        newGame() {
			this.pokemon = null
			this.showPokemon = false
			this.showResult = false
            this.pokemonArr = []
            this.message = ''
            this.mixPokemonArr()
        }
	},
	computed: {},
	mounted() {
		this.mixPokemonArr()
	},
}
</script>

<style></style>
