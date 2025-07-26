import AuthorBadge from "@/components/author_badge/author-badge"
import { PostItemProps } from "@/components/posts/post_item/post-item-type"
import PostOptions from "./post-options/post-options"
import cl from "./post-head.module.css"
import avatar from "@assets/Image(1).png"

const PostHead = ({ post }: Omit<PostItemProps, "options">) => {
	return (
		<>
			<h1 className={cl["post-title"]}>{post.title}</h1>
			<AuthorBadge
				author={{
					avatar: avatar,
					name: post.author,
					id: post.id,
					sign: post.date,
				}}
				isALink
				avatarHeight={28}
				avatarWidth={28}
				classNames={cl["post-author-badge"]}
			/>
			<PostOptions/>
		</>
	)
}

export default PostHead
