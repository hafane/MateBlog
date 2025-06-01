import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router"
import { PAGE_PATHS } from "@/utils/constants/data"
import App from "../App"
import ErrorBoundary from "./error-boundary"
import Loader from "@/components/loader/loader"
import PrivateRoutes from "./privateRoutes"

const RoutesComponent = () => {
	const HomePage = lazy(() => import("../pages/home-page"))
	const TagsPostPage = lazy(() => import("../pages/tags-post-page"))
	const PostPage = lazy(() => import("../pages/post-page"))
	const AuthorPage = lazy(() => import("../pages/author-page"))
	const EditorPage = lazy(() => import("../pages/editor-page"))

	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route element={<App />}>
					<Route index Component={HomePage} />
					<Route
						path={PAGE_PATHS.tagsPosts + ":tag"}
						Component={TagsPostPage}
					/>
					<Route path={PAGE_PATHS.postPage + ":id"} Component={PostPage} />
					<Route path={PAGE_PATHS.authorPage + ":id"} Component={AuthorPage} />
					<Route element={<PrivateRoutes />}>
						<Route path={PAGE_PATHS.editor} Component={EditorPage} />
					</Route>
				</Route>
				<Route path="*" element={<ErrorBoundary />} />
			</Routes>
		</Suspense>
	)
}

export default RoutesComponent
