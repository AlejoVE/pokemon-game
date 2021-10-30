<template>
	<div class="options-container">
		<ul>
			<li :class="{ disabled: selected }" v-for="{ name, id } in pokemons" :key="id" @click="$emit('selection', id)">{{ name }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		pokemons: {
			type: Array,
			required: true,
		},
		selected: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
}
</script>

<style>
ul {
	list-style-type: none;
}
li {
	background-color: white;
	border-radius: 5px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	cursor: pointer;
	margin-bottom: 10px;
	width: 250px;
}

li:hover {
	background-color: rgba(0, 0, 0, 0.05);
}

.disabled {
	background-color: rgba(0, 0, 0, 0.1);
	pointer-events: none;
}

.options-container {
	display: flex;
	justify-content: center;
}
</style>
