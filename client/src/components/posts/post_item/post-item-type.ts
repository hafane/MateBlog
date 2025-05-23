export type PostItemProps = {
	post: {
		id: number
		image?: string
		tags: string[]
		authorImage: string
		date: string
		title: string
		author: string
	}
	options?: {
		classNames?: string
		isLarge: boolean
	}
}
