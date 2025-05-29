import { AUTHOR } from "@/utils/constants/consts"
import AuthorHead from "./head/author-head"
import AuthorMain from "./main/author-main"

const AuthorContent = () => {
    return (
        <>
            <AuthorHead author={AUTHOR}/>
            <AuthorMain/>
        </>
    );
}

export default AuthorContent;
