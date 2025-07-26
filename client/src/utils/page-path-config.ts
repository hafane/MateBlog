class PagePathConfig {
    readonly home = "/"
    readonly editor = "/editor"

    getAuthorIdPage(id: string) {
        return `/author/${id}`
    }

    getPostIdPage(id: string) {
        return `/post/${id}`
    }

    getTagNamePage(name: string) {
        return `/t/${name}`
    }
}

export const PagePath = new PagePathConfig()