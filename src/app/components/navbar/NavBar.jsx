'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Desktop from './components/Desktop'
import Mobile from './components/Mobile'

const NavBar = () => {
    const pathName = usePathname();

    const useWindowSize = () => {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined
        })

        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                })
            }
            window.addEventListener('resize', handleResize)
            handleResize()
            return () => window.removeEventListener('resize', handleResize)
        }, [])
        return windowSize
    }

    const { width } = useWindowSize()
    return (
        <>
            {width > 768 ? <Desktop pathName={pathName} /> : <Mobile pathName={pathName} />}
        </>

    )
}

export default NavBar