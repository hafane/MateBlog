import { SocialIconsType } from "@/components/ui/icons/socials/socials-icons-type"

export type AuthorHeadProps = {
	author: {
		name: string
		sign: string
		description: string
		socials: {
			platform: SocialIconsType
			url: string
		}[]
	}
}
