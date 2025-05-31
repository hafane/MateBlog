import { PAGE_PATHS } from "@/utils/constants/data"
import LinkIcon from "@/components/ui/link_icon/link-icon"

const Write = () => {
	return (
		<LinkIcon iconName="MdCreate" path={PAGE_PATHS.editor} text="Write Post" aria-label="Write Post" />
	)
}

export default Write
