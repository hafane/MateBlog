import * as MaterialIcons from 'react-icons/md';

export type MaterialIconsType = keyof typeof MaterialIcons;

export type MaterialIconsProps = {
    name: MaterialIconsType;
} & React.SVGProps<SVGSVGElement>