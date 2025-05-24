import { PAGE_PATHS } from "@/utils/constants/consts"
import { ILastComment } from "./last-comment-type"
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
			<div className={cl["comment-author"]}>
                <img src={avatar} alt="Author image" className={cl["avatar"]} />
				<span className={cl["author"]}>{comment.author}</span>
			</div>
			<p className={cl["comment-text"]}>{comment.text}</p>
			<time className={cl["comment-date"]} dateTime={comment.date}>
				{comment.date}
			</time>
		</a>
	)
}

export default LastComment
