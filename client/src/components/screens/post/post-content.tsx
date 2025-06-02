import { MOCK_POSTS } from "@/utils/constants/data"
import PostHead from "./head/post-head"
import cl from "./post-content.module.css"


const PostContent = () => {
    return (
        <div className={cl["post-container"]}>
            <PostHead post={MOCK_POSTS[0]} />
        </div>
    );
}

export default PostContent;
