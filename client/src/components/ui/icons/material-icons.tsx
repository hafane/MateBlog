import * as AllMaterialIcons from 'react-icons/md';
import { MaterialIconsProps } from './material-icons-type'

const MaterialIcons = ({name, ...props}: MaterialIconsProps) => {
    
    const MaterialIconNode = AllMaterialIcons[name] ? AllMaterialIcons[name] : AllMaterialIcons['MdErrorOutline']
    
    return <MaterialIconNode {...props}/>
}

export default MaterialIcons;
