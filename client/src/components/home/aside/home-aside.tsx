import { Link } from "react-router"
import { SOCIALS } from "@/utils/constants/consts"
import cl from "./home-aside.module.css"
import TagList from "./tag_list/tag-list"
import LastComments from "./last_comments/last-comments"

const HomeAside = () => {
	return (
		<aside className={cl["aside"]}>
			<div className={cl["content"]}>
				<div className={cl["last-comments"]}>
					<div className={cl["title"]}>
						<h2 className={cl["title-text"]}>Last comments</h2>
					</div>
					<LastComments />
				</div>
				<div className={cl["tags-block"]}>
					<div className={cl["title"]}>
						<h2 className={cl["title-text"]}>Tags</h2>
					</div>
					<TagList />
					<div className={cl["more"]}>
						<p className={cl["more-text"]}>See more tags</p>
					</div>
				</div>
			</div>
			<div className={cl["footer"]}>
				{SOCIALS.map(social => (
					<Link
						className={cl["footer-link"]}
						key={social.name}
						to={social.link}
					>
						{social.name}
					</Link>
				))}
			</div>
		</aside>
	)
}

export default HomeAside
