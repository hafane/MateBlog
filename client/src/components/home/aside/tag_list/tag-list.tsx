import { TAGS_LIST } from "@utils/constants/consts"
import List from "@/components/list/list"
import ListItem from "@/components/list/list_item/list-item"
import Tag from "@/components/tag/tag"
import cl from "./tag-list.module.css"

const TagList = () => {
	return (
		<div className={cl["tags-block"]}>
			<List className={cl["tags-list"]}>
				{TAGS_LIST.map(tag => (
					<ListItem key={tag.id + tag.name}>
						<Tag tag={tag.name} />
					</ListItem>
				))}
			</List>
		</div>
	)
}

export default TagList
