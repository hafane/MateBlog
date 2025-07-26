import { PostItemProps } from "./post-item-type"
import { Link } from "react-router"
import { PagePath } from "@/utils/page-path-config"
import classnames from "classnames"
import MaterialIcons from "@/components/ui/icons/material-icons"
import Tag from "@/components/tag/tag"
import Button from "@/components/ui/button/button"
import AuthorBadge from "@/components/author_badge/author-badge"
import authorImg from "@/assets/Image(1).png" //del this later
import Image from "@/assets/Image.png" //del this later
import cl from "./post-item.module.css"

const PostItem = ({ post, options }: PostItemProps) => {
	return (
		<article
			className={classnames(
				cl["post"],
				options?.isLarge && cl["post--large"],
				options?.classNames
			)}
		>
			<Link to={PagePath.getPostIdPage(`${post.id}`)}>
				{post.image && (
					<div className={cl["post_cover"]}>
						<img
							loading="lazy"
							className={cl["cover-pic"]}
							src={Image}
							alt="Image post"
						/>
					</div>
				)}
				<div className={cl["post_body"]}>
					<AuthorBadge
						author={{
							avatar: authorImg,
							name: post.author,
							id: post.id,
							sign: post.date,
						}}
						isALink
					/>
					<div className={cl["post_content"]}>
						<div className={cl["post_tags"]}>
							{post.tags.map(tag => (
								<Tag key={tag} tag={tag} />
							))}
						</div>
						<h2 className={cl["post_title"]}>{post.title}</h2>
						<div className={cl["post_details"]}>
							<div className={cl["comments-reacts"]}>
								<p className={cl["comments-reacts_link"]}>0 Reactions</p>
								<Link
									className={cl["comments-reacts_link"]}
									to={PagePath.getPostIdPage(`${post.id}#comments`)}
								>
									0 Comments
								</Link>
							</div>
							<Button variant="primary" className={cl["save"]} type="button">
								<MaterialIcons name="MdBookmark" />
							</Button>
						</div>
					</div>
				</div>
			</Link>
		</article>
	)
}

export default PostItem
