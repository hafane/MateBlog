import { MOCK_POSTS } from "@/utils/constants/data"
import PostItem from "@/components/posts/post_item/post-item"
import cl from "./author-main.module.css"

const AuthorMain = () => {
    return (
        <div className={cl["author-main"]}>
            {MOCK_POSTS.map(item => 
                <PostItem post={item} key={item.id + item.title} /> 
            )}
        </div>
    );
}

export default AuthorMain;
