import React from 'react';
import cl from "../menu.module.css"

const MenuItem = ({children, ...props}: React.ComponentProps<"li">) => {
    return (
        <li role='menuitem' {...props} className={cl["menu-item"]}>
            {children}
        </li>
    );
}

export default MenuItem;
