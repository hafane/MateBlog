import { FaXTwitter, FaYoutube, FaFacebook, FaLinkedinIn, FaBluesky, FaInstagram, FaGithub} from "react-icons/fa6"

export type SocialIconsFromFA6 = {
    FaXTwitter: typeof FaXTwitter;
    FaYoutube: typeof FaYoutube;
    FaFacebook: typeof FaFacebook;
    FaLinkedinIn: typeof FaLinkedinIn;
    FaBluesky: typeof FaBluesky;
    FaInstagram: typeof FaInstagram;
    FaGithub: typeof FaGithub;
}

export type SocialIconsType = keyof SocialIconsFromFA6;

export type SocialIconsProps = {
    name: SocialIconsType
} & React.SVGProps<SVGSVGElement>