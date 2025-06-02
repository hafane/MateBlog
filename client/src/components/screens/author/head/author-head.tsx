import { AuthorHeadProps } from "./author-head.type"
import LinkWithIcon from "@/components/ui/link_icon/link-icon"
import AuthorBadge from "@/components/author_badge/author-badge"
import cl from "./author-head.module.css"
import authorImg from "@/assets/Image(1).png" // Replace with actual author image path

const AuthorHead = ({ author }: AuthorHeadProps) => {
	return (
		<div className={cl["author-head"]}>
			<div className={cl["content"]}>
				<AuthorBadge author={{avatar: authorImg, name: author.name, id: 1, sign: author.sign}} avatarHeight={64} avatarWidth={64} classNames={cl["author-info"]} />
				<p className={cl["author-description"]}>{author.description}</p>
				<ul className={cl["author-socials"]}>
					{author.socials.map((social, index) => (
						<li key={index} className={cl["social-item"]}>
							<LinkWithIcon
								iconFa6Name={social.platform}
								path={social.url}
								className={cl["social-link"]}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default AuthorHead
