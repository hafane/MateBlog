import { MOCK_POSTS } from "@/utils/constants/data"
import PostItem from "@/components/posts/post_item/post-item"
import Button from "@/components/ui/button/button"
import cl from "./author-main.module.css"

const AuthorMain = () => {
	return (
		<div>
			<div className={cl["author-main"]}>
				{MOCK_POSTS.map(item => (
					<PostItem post={item} key={item.id + item.title} />
				))}
			</div>
            <div className={cl["more-button"]}>
                <Button variant="secondary">Load more</Button>
            </div>
		</div>
	)
}

export default AuthorMain
