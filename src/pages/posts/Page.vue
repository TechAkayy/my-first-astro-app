<script setup>
	import PostDate from '../../components/PostDate.vue'
	import Layout from '../../layouts/Layout.vue'

	defineProps({
		post: {},
		nextPage: Number,
		prevPage: Number
	})
</script>

<template layout="default">
	<Layout title="About">
		<h1
			class="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl"
		>
			Paginated Posts
		</h1>
		<ul class="divide-y divide-gray-200">
			<li class="py-12">
				<article
					class="space-y-2 xl:(grid grid-cols-4 space-y-0 items-baseline)"
				>
					<!-- {{ JSON.stringify(post) }} -->
					<PostDate :date="post.frontmatter.date" />
					<div class="space-y-5 xl:col-span-3">
						<div class="space-y-6">
							<h2 class="text-2xl leading-8 font-bold tracking-tight">
								{{ post.frontmatter.title }}
							</h2>
							<!-- <Card :dark="true"> {{ post.compiledContent() }} </Card> -->
							<slot />
						</div>
					</div>
				</article>
			</li>
		</ul>
	</Layout>
	<!-- <div class="py-8 grid grid-cols-2">
		<div v-if="prevPage" class="link col-start-1">
			<router-link :to="{ params: { page: prevPage } }">← Newer</router-link>
		</div>
		<div v-if="nextPage" class="link col-start-2 text-right">
			<router-link :to="{ params: { page: nextPage } }">Older →</router-link>
		</div>
	</div> -->
</template>
