import { Link } from "react-router"
import { PAGE_PATHS } from "@/utils/constants/data"
import { AuthorBadgeProps } from "./author-badge-type"
import classnames from "classnames"
import cl from "./author-badge.module.css"

const AuthorBadge = ({
	author,
	classNames,
	avatarHeight = 36,
	avatarWidth = 36,
	isALink = false,
}: AuthorBadgeProps) => {
	const AuthorBadgeBody = (
		<>
			<div className={cl["avatar"]}>
				<img
					className={cl["avatar-pic"]}
					src={author.avatar}
					alt={author.name}
					loading="lazy"
					width={avatarWidth}
					height={avatarHeight}
				/>
			</div>
			<div className={cl["info"]}>
				<p className={cl["info-name"]}>{author.name}</p>
				{author.sign && (
					<small className={cl["info-sign"]}>{author.sign}</small>
				)}
			</div>
		</>
	)

	return isALink ? (
		<Link
			className={classnames(cl["author-badge-link"], classNames)}
			to={PAGE_PATHS.authorPage + author.id}
		>
			{AuthorBadgeBody}
		</Link>
	) : (
		<div className={classnames(cl["author-badge"], classNames)}>
			{AuthorBadgeBody}
		</div>
	)
}

export default AuthorBadge
