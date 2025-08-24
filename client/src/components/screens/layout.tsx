import { Suspense } from "react"
import { observer } from "mobx-react-lite"
import { Outlet } from "react-router"
import { userStore } from "@/store/user-store"
import Header from "../header/header"
import Loader from "../loader/loader"
import classnames from "classnames"
import cl from "./layout.module.css"

const Layout = observer(() => {
	const auth = userStore.isUserAuth

	return (
		<>
			<Header />
			<div className={classnames("container", cl["container"])}>
				<Suspense fallback={<Loader />}>
					<Outlet context={auth} />
				</Suspense>
			</div>
		</>
	)
})

export default Layout
