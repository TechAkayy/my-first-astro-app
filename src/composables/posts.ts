import { useDocuments } from 'iles'

function byDate(a, b) {
	return Number(new Date(b.date)) - Number(new Date(a.date))
}

export function getPosts() {
	const posts = useDocuments('~/pages/posts')
	return posts.value.sort(byDate)
}
