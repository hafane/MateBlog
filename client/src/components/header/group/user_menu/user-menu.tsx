import { useState } from "react"
import { Link } from "react-router"
import { USER_MENU } from "@/utils/constants/consts"
import Button from "@/components/ui/button/button"
import Menu from "@/components/menu/menu"
import MenuItem from "@/components/menu/menu_item/menu-item"
import image from "@assets/Image(1).png" //delete this later
import cl from "./user-menu.module.css"

const UserMenu = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<div>
			<Button aria-expanded={isOpen} className={cl["menu-button"]} onClick={() => setIsOpen(!isOpen)}>
				<img src={image} width={30} height={30} alt="" />
			</Button>
			<Menu onClose={setIsOpen} isOpen={isOpen}>
				{USER_MENU.map(item => (
					<MenuItem key={item.name}>
						<Link className={cl["item-link"]} to={item.path}>{item.name}</Link>
					</MenuItem>
				))}
				<MenuItem onClick={() => console.log("You Logged Out")}>
                    Sign Out
                </MenuItem>
			</Menu>
		</div>
	)
}

export default UserMenu
