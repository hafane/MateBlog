import { AuthorHeadProps } from "./author-head.type"
import LinkWithIcon from "@/components/ui/link_icon/link-icon"
import cl from "./author-head.module.css"
import authorImg from "@/assets/Image(1).png" // Replace with actual author image path

const AuthorHead = ({ author }: AuthorHeadProps) => {
	return (
		<div className={cl["author-head"]}>
			<div className={cl["content"]}>
				<div className={cl["author-info"]}>
					<div className={cl["avatar"]}>
						<img className={cl["avatar-pic"]} src={authorImg} alt="author" />
					</div>
					<div className={cl["details"]}>
						<p className={cl["name"]}>{author.name}</p>
						<small className={cl["sign"]}>{author.sign}</small>
					</div>
				</div>
				<p className={cl["author-description"]}>{author.description}</p>
				<ul className={cl["author-socials"]}>
					{author.socials.map((social, index) => (
						<li key={index} className={cl["social-item"]}>
							<LinkWithIcon iconName={social.platform} path={social.url} className={cl["social-link"]} />
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default AuthorHead
