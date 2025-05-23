import { observer } from 'mobx-react-lite'
import { themeStore } from '@/store/theme-store'
import Switcher from '@/components/ui/switcher/switcher'

const Theme = observer(() => {
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        themeStore.setTheme(e.target.checked ? "dark" : "light")
    }

    return (
        <Switcher aria-label={`Toggle theme to ${themeStore.isDark === "dark" ? "light" : "dark"}`} checked={themeStore.isDark === "dark"} onChange={handleChange} />
    );
})

export default Theme;
