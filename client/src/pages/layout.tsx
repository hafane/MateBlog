import { observer } from "mobx-react-lite"
import { Outlet } from "react-router"
import { userStore } from "@/store/user-store"
import Header from "../components/header/header"
import classnames from "classnames"
import cl from "./layout.module.css"

const Layout = observer(() => {
	const auth = userStore.isUserAuth

	return (
		<>
			<Header />
			<div className={classnames("container", cl["container"])}>
				<Outlet context={auth} />
			</div>
		</>
	)
})

export default Layout
