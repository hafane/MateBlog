import { AUTHOR } from "@/constants/data"
import AuthorHead from "./head/author-head"
import AuthorMain from "./main/author-main"
import BottomTrigger from "@/components/bottom_trigger/bottom-trigger"

const Author = () => {
    return (
        <>
            <AuthorHead author={AUTHOR.author}/>
            <AuthorMain/>
            <BottomTrigger/>
        </>
    );
}

export default Author;
