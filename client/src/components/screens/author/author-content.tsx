import { AUTHOR } from "@/utils/constants/data"
import AuthorHead from "./head/author-head"
import AuthorMain from "./main/author-main"

const AuthorContent = () => {
    return (
        <>
            <AuthorHead author={AUTHOR.author}/>
            <AuthorMain/>
        </>
    );
}

export default AuthorContent;
