import { FaXTwitter, FaYoutube, FaFacebook, FaLinkedinIn, FaBluesky, FaInstagram, FaGithub} from "react-icons/fa6"
import { SocialIconsProps } from "./socials-icons-type"


const SocialsIconsFa6 = ({name, ...props}: SocialIconsProps) => {
    
    const SocialIconNode = {FaFacebook, FaXTwitter, FaYoutube, FaLinkedinIn, FaBluesky, FaInstagram, FaGithub}[name];
    
    return <SocialIconNode {...props} />
}

export default SocialsIconsFa6;
