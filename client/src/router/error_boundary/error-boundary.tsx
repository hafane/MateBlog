import { PagePath } from "@/utils/page-path-config"
import classnames from "classnames"
import LinkWithIcon from "@/components/ui/link_icon/link-icon"
import cl from "./error-boundary.module.css"

const ErrorBoundary = () => {
	return (
		<div className={classnames("container", cl["error-boundary"])}>
			<div className={cl["error-content"]}>
				<h1 className={cl["error-code"]}>404</h1>
				<div className={cl["message-container"]}>
					<h2 className={cl["error-message"]}>This page does not exist</h2>
				</div>
			</div>
			<LinkWithIcon
				path={PagePath.home}
				iconMaterialName="MdArrowBack"
				text="Back to home"
			/>
		</div>
	)
}

export default ErrorBoundary
