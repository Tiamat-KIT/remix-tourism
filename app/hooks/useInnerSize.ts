import { useState } from "react"
export default function useInnerSize(){
    const [size, setSize] = useState<{
        width: number,
        height: number
    }>({
        width: 1920,
        height: 1080
    })
    if (typeof window !== "undefined"){
        // Suggested code may be subject to a license. Learn more: ~LicenseLog:2036108740.
        // Suggested code may be subject to a license. Learn more: ~LicenseLog:1862375517.
        window.addEventListener('resize', () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        })
    }
    return size
}