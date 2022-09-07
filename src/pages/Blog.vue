<script setup>
	import Layout from '../layouts/Layout.vue'
	import Showcase from '../components/Showcase.vue'
	import PageContent from '../components/PageContent.vue'
	import Card from '../components/Card.vue'

	const props = defineProps({
		posts: {
			type: Array
		}
	})
</script>

<template>
	<Layout title="Blog">
		<Showcase
			:heading="`Astro Blog`"
			:text="`A simple blog built with Astro`"
		/>
		<PageContent>
			<Card v-for="post in posts" :key="post.href">
				<h2>{{ post.frontmatter.title }}</h2>
				<p>
					{{ post.frontmatter.excerpt }}
					<!-- <component :is="post" excerpt /> -->
				</p>
				<a :href="`/posts/${post.frontmatter.slug}`" class="btn">Read More</a>
			</Card>
		</PageContent>
	</Layout>
</template>

<style scoped></style>
