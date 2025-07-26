import { MOCK_POSTS } from "@/constants/data"
import PostHead from "./head/post-head"
import cl from "./post.module.css"


const Post = () => {
    return (
        <div className={cl["post-container"]}>
            <PostHead post={MOCK_POSTS[0]} />
        </div>
    );
}

export default Post;
