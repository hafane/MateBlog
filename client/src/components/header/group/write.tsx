import { PagePath } from "@/utils/page-path-config"
import LinkIcon from "@/components/ui/link_icon/link-icon"

const Write = () => {
	return (
		<LinkIcon iconMaterialName="MdCreate" path={PagePath.editor} text="Write Post" aria-label="Write Post" />
	)
}

export default Write
