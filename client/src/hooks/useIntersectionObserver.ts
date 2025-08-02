import { RefObject, useRef, useSyncExternalStore } from "react"

type IReturnUio = [RefObject<HTMLDivElement | null>, boolean]


export default function useIntersectionObserver(options: IntersectionObserverInit): IReturnUio {
    const targetRef = useRef<HTMLDivElement | null>(null)

    const getSnapshot = () => {
        if(targetRef.current) {
            const rect = targetRef.current?.getBoundingClientRect()
            if(import.meta.env.DEV) console.log(rect, window.innerHeight)
            return rect.top >= 0 && rect.bottom <= window.innerHeight
        }
        return false
    }

    const subscribe = (callback: () => void) => {
        const observer = new IntersectionObserver(callback, options)
        if(targetRef.current) {
            observer.observe(targetRef.current)
        }
        return () => observer.disconnect()
    }

    const isVisible = useSyncExternalStore(subscribe, getSnapshot)

    return [targetRef, isVisible]
}