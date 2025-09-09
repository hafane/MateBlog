import { lazy } from "react"
import { Route, Routes } from "react-router"
import { PagePath } from "@/utils/page-path-config"
import App from "@/App"
import Layout from "@/pages/layout"
import LayoutAuth from "@/pages/auth_page/layout"
import ErrorBoundary from "./error_boundary/error-boundary"
import PrivateRoutes from "./private-routes"

const RoutesComponent = () => {
	const HomePage = lazy(() => import("@/pages/home-page"))
	const TagsPostPage = lazy(() => import("@/pages/tags-post-page"))
	const PostPage = lazy(() => import("@/pages/post-page"))
	const AuthorPage = lazy(() => import("@/pages/author-page"))
	const EditorPage = lazy(() => import("@/pages/editor-page"))
	const AuthPage = lazy(() => import("@/pages/auth_page/auth-page"))

	return (
		<Routes>
			<Route element={<App />}>
				<Route element={<Layout />}>
					<Route index Component={HomePage} />
					<Route
						path={PagePath.getTagNamePage(":tag")}
						Component={TagsPostPage}
					/>
					<Route path={PagePath.getPostIdPage(":id")} Component={PostPage} />
					<Route
						path={PagePath.getAuthorIdPage(":id")}
						Component={AuthorPage}
					/>
					<Route element={<PrivateRoutes />}>
						<Route path={PagePath.editor} Component={EditorPage} />
					</Route>
				</Route>
				<Route element={<LayoutAuth />}>
					<Route path={PagePath.auth} Component={AuthPage} />
				</Route>
				<Route path="*" element={<ErrorBoundary />} />
			</Route>
		</Routes>
	)
}

export default RoutesComponent
