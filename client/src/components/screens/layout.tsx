import { Suspense } from "react"
import { observer } from "mobx-react-lite"
import { Outlet } from "react-router"
import { userStore } from "@/store/user-store"
import Header from "../header/header"
import Loader from "../loader/loader"

const Layout = observer(() => {
	const auth = userStore.isUserAuth

	return (
		<>
			<Header />
			<div className="container">
				<Suspense fallback={<Loader />}>
					<Outlet context={auth} />
				</Suspense>
			</div>
		</>
	)
})

export default Layout
