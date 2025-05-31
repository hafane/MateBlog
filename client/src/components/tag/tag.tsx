import { Link } from "react-router"
import { PAGE_PATHS } from "@/utils/constants/data"
import cl from "./tag.module.css"

const Tag = ({ tag }: { tag: string }) => {
	return (
		<Link key={tag} className={cl["tag"]} to={PAGE_PATHS.tagsPosts + tag}>
			<span className={cl["tag-prefix"]}>#</span>
			{tag}
		</Link>
	)
}

export default Tag
