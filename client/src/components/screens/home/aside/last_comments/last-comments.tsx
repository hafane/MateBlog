import { MOCK_COMMENTS } from "@/utils/constants/data"
import LastComment from "./last_comment/last-comment"

const LastComments = () => {
    return (
        <div>
            {MOCK_COMMENTS.map(comment => 
                <LastComment key={comment.id} comment={comment} />
            )}
        </div>
    );
}

export default LastComments;
