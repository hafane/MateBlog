import { MOCK_POSTS } from "@/utils/constants/data"
import PostItem from "@/components/posts/post_item/post-item"
import HomeHead from "../head/home-head"
import cl from "./home-main.module.css"

const HomeMain = () => {
	return (
		<main className={cl["main"]}>
			<HomeHead />
			<div>
				{MOCK_POSTS.map(item => (
					<div key={item.id + item.title} className={cl["post-items_wrapper"]}>
						<PostItem options={{ isLarge: true }} post={item} />
					</div>
				))}
			</div>
		</main>
	)
}

export default HomeMain
