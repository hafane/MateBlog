import { useEffect } from "react"
import { themeStore } from "@/store/theme-store"

export default function useTheme() {
    const theme = themeStore.isDark

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.remove("light")
            document.body.classList.add("dark")
        } else {
            document.body.classList.remove("dark")
            document.body.classList.add("light")
        }
    }, [theme])
}