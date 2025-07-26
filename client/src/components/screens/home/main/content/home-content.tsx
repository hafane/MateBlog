import PostItem from "@/components/posts/post_item/post-item"
import { MOCK_POSTS } from "@/constants/data"
import cl from "../home-main.module.css"

const HomeContent = () => {

	return (
		<div>
			{MOCK_POSTS.map(item => (
				<div key={item.id + item.title} className={cl["post-items_wrapper"]}>
					<PostItem options={{ isLarge: true }} post={item} />
				</div>
			))}
		</div>
	)
}

export default HomeContent
