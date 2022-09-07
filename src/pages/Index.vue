<script setup>
	import Layout from '../layouts/Layout.vue'
	import Showcase from '../components/Showcase.vue'
	import Extras from '../components/Extras.vue'
	import Features from '../components/Features.vue'
	import PageContent from '../components/PageContent.vue'
	import Tabs from '../components/Tabs.vue'

	// const name = 'Astro'
	// const style = 'purple'
	// const response = await fetch(
	// 	'https://jsonplaceholder.typicode.com/users?_limit=10'
	// )
	// const users = await response.json()
	// const visible = false
</script>

<template>
	<div>
		<Layout>
			<Showcase> <Extras /> </Showcase>
			<Features />
			<PageContent>
				<h2>Get Started With Astro</h2>
				<p>
					Get a new Astro project up and running locally with our helpful
					create-astro CLI wizard!
				</p>

				<Tabs />

				<h3>Start Building</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsum
					deserunt inventore ut voluptate, officia maiores repellat tenetur
					praesentium omnis est ex tempora a necessitatibus reiciendis at et
					dignissimos. Ipsam eius consequuntur cupiditate aperiam porro, esse
					laborum impedit nesciunt ut voluptatum assumenda aspernatur libero
					iusto error molestias dolorum, necessitatibus labore?
				</p>
			</PageContent>
		</Layout>
	</div>
</template>

<style scoped>
	/* .h1 {
		color: #b68667;
	}

	.purple {
		color: purple;
	} */
</style>
