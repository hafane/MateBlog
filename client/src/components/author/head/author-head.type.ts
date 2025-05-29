import { MaterialIconsType } from "@/components/ui/icons/material-icons-type"

export type AuthorHeadProps = {
    author: {
        name: string;
        sign: string;
        description: string;
        socials: {
            platform: MaterialIconsType;
            url: string;
        }[];
    }
}