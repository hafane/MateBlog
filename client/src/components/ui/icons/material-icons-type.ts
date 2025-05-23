import * as MaterialIcons from 'react-icons/md';

export type MaterialIconsType = keyof typeof MaterialIcons;

export interface MaterialIconsProps extends React.SVGProps<SVGSVGElement> {
    name: MaterialIconsType;
}