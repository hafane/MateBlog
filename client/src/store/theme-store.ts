import { makeAutoObservable } from "mobx"

class Theme {
    isDark = localStorage.getItem("theme") ?? "dark"

    constructor() {
        makeAutoObservable(this)
    }

    setTheme = (isDark: "dark" | "light") => {
        this.isDark = isDark
        localStorage.setItem("theme", isDark)
    }
}

export const themeStore = new Theme()