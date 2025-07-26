import Button from "@/components/ui/button/button"
import MaterialIcons from "@/components/ui/icons/material-icons"
import LinkWithIcon from "@/components/ui/link_icon/link-icon"
import cl from "./post-options.module.css"

const PostOptions = () => {
	return (
		<div className={cl["post-options"]}>
			<div className={cl["left"]}>
				<Button className={cl["like-button"]}>
					<MaterialIcons name="MdOutlineThumbUp" />
					14
				</Button>
				<LinkWithIcon
					iconMaterialName="MdOutlineComment"
					path="#comments"
					text="23"
				/>
			</div>
			<div className={cl["right"]}>
				<Button variant="primary">
					<MaterialIcons name="MdBookmark" />
				</Button>
			</div>
		</div>
	)
}

export default PostOptions
