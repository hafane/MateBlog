import { useParams } from "react-router"
import cl from "./tags-post-head.module.css"

const TagsPostHead = () => {
    const params = useParams<{tag: string}>()

	return (
		<div className={cl["tags-post-head"]}>
			<div className={cl["head-content"]}>
				<h2 className={cl["head-title"]}>{params.tag}</h2>
                <p className={cl["head-description"]}>140 stories</p>
			</div>
		</div>
	)
}

export default TagsPostHead
