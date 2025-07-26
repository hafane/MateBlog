export type AuthorBadgeProps = {
	author: {
        id: number
		name: string
		sign?: string
		avatar: string
	}
	classNames?: string
    avatarWidth?: number
    avatarHeight?: number
    isALink?: boolean
}
