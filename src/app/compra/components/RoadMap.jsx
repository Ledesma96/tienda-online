'use client'
import { useEffect, useState } from "react";

const Roadmap = () => {
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
    <main className="container-roadmap">
      <h1>¿COMO COMPRAR?</h1>
      <img src={ width >= 1024 ? "/desktop-radmap.svg":"/Untitled (1).svg"}></img>
    </main>
  );
};

export default Roadmap;
