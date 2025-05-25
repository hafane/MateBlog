import { MaterialIconsType } from "../icons/material-icons-type"

export type TLinkIconProps = {
    path: string
    iconName: MaterialIconsType
    text?: string
} & React.ComponentProps<"a">