import { TAGS_LIST, PAGE_PATHS } from "@utils/constants/consts"
import { Link } from "react-router"
import List from "@/components/list/list"
import ListItem from "@/components/list/list_item/list-item"
import cl from "./tag-list.module.css"

const TagList = () => {
	return (
		<div className={cl["tags-block"]}>
			<List className={cl["tags-list"]}>
				{TAGS_LIST.map(tag => (
					<ListItem key={tag.id + tag.name}>
						<Link to={PAGE_PATHS.tagsPosts + tag.name}>#{tag.name}</Link>
					</ListItem>
				))}
			</List>
		</div>
	)
}

export default TagList
