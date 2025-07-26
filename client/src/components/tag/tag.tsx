import { Link } from "react-router"
import { PagePath } from "@/utils/page-path-config"
import cl from "./tag.module.css"

const Tag = ({ tag }: { tag: string }) => {
	return (
		<Link key={tag} className={cl["tag"]} to={PagePath.getTagNamePage(tag)}>
			<span className={cl["tag-prefix"]}>#</span>
			{tag}
		</Link>
	)
}

export default Tag
