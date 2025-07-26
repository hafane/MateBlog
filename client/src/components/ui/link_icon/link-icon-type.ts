import { MaterialIconsType } from "../icons/material-icons-type"
import { SocialIconsType } from "../icons/socials/socials-icons-type"

export type TLinkIconProps = {
    path: string
    iconFa6Name?: SocialIconsType
    iconMaterialName?: MaterialIconsType
    text?: string
} & React.ComponentProps<"a">