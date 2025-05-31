import { MOCK_POSTS } from "@/utils/constants/data"
import PostItem from "@/components/posts/post_item/post-item"
import cl from "./tags-post-main.module.css"

const TagsPostMain = () => {
    return (
        <div className={cl["tags-post-main"]}>
            {MOCK_POSTS.map(item => 
                <PostItem key={item.id + item.title} post={item} />
            )}
        </div>
    );
}

export default TagsPostMain;
