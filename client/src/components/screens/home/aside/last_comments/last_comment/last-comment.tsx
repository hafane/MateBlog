import { PAGE_PATHS } from "@/utils/constants/data"
import { ILastComment } from "./last-comment-type"
import AuthorBadge from "@/components/author_badge/author-badge"
import avatar from "@assets/Image(1).png" //delete this later
import cl from "../last-comments.module.css"

const LastComment = ({ comment }: ILastComment) => {
	return (
		<a
			href={PAGE_PATHS.postPage + comment.postId + `#comment-${comment.id}`}
			aria-label={`Last comment by ${comment.author}`}
			target="_blank"
			className={cl["last-comment"]}
		>
			<AuthorBadge author={{id: comment.id, avatar: avatar, name: comment.author}} avatarHeight={32} avatarWidth={32} />
			<p className={cl["comment-text"]}>{comment.text}</p>
			<time className={cl["comment-date"]} dateTime={comment.date}>
				{comment.date}
			</time>
		</a>
	)
}

export default LastComment
