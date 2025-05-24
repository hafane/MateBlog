import { PostItemProps } from "./post-item-type"
import { Link } from "react-router"
import { PAGE_PATHS } from "@/utils/constants/consts"
import classnames from "classnames"
import MaterialIcons from "@/components/ui/icons/material-icons"
import Button from "@/components/ui/button/button"
import cl from "./post-item.module.css"
import Image from "@/assets/Image.png" //del this later
import authorImg from "@/assets/Image(1).png" //del this later
import Tag from "@/components/tag/tag"

const PostItem = ({ post, options }: PostItemProps) => {
	return (
		<article
			className={classnames(
				cl["post"],
				options?.isLarge && cl["post--large"],
				options?.classNames
			)}
		>
			{post.image && (
				<Link to={PAGE_PATHS.postPage + post.id} className={cl["post_cover"]}>
					<img className={cl["cover-pic"]} src={Image} alt="Image post" />
				</Link>
			)}
			<div className={cl["post_body"]}>
				<div className={cl["post_head"]}>
					<div className={cl["post_author"]}>
						<div className={cl["avatar"]}>
							<img className={cl["avatar-pic"]} src={authorImg} alt="author" />
						</div>
						<div className={cl["info"]}>
							<Link to={PAGE_PATHS.authorPage + post.id}>
								<p className={cl["info-name"]}>{post.author}</p>
								<time className={cl["info-date"]}>{post.date}</time>
							</Link>
						</div>
					</div>
				</div>
				<div className={cl["post_content"]}>
					<div className={cl["post_tags"]}>
						{post.tags.map(tag => (
							<Tag key={tag} tag={tag} />
						))}
					</div>
					<h2 className={cl["post_title"]}>
						<Link className={cl["title-link"]} to={PAGE_PATHS.postPage + post.id}>
							{post.title}
						</Link>
					</h2>
					<div className={cl["post_details"]}>
						<div className={cl["comments-reacts"]}>
							<Link
								className={cl["comments-reacts_link"]}
								to={PAGE_PATHS.postPage + post.id}
							>
								0 Reactions
							</Link>
							<Link
								className={cl["comments-reacts_link"]}
								to={PAGE_PATHS.postPage + post.id + "#comments"}
							>
								0 Comments
							</Link>
						</div>
						<Button className={cl["save"]} type="button">
							<MaterialIcons name="MdBookmark" />
						</Button>
					</div>
				</div>
			</div>
		</article>
	)
}

export default PostItem
