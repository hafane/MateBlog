import { useEffect } from 'react'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import Button from '@/components/ui/button/button'
import cl from "./bottom-trigger.module.css"

const BottomTrigger = () => {

    const [targetRef, isVisible] = useIntersectionObserver({
        root: null,
        rootMargin: "0px",
        threshold: 1
    })

    useEffect(() => {
        console.log(isVisible, "bottom content")
    }, [isVisible])

    return (
        <div ref={targetRef} className={cl["trigger-btn"]}>
            <Button variant='primary' onClick={() => console.log("Load more")}>
                Load more
            </Button>
        </div>
    );
}

export default BottomTrigger;
