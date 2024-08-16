'use client'
import { useEffect, useState } from "react";

const contentFilter = [
    'parte superior',
    'parte inferior'
]
const Filter = () => {
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
    const [open, setOpen] = useState(false);
    return (
        <aside className="conteiner-filters">
            <div onClick={() => setOpen(!open)}>
                <h3>Filtrar</h3>
                { width <= 768 && <svg className={`${open ? 'icon-on' : 'icon:off'}`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"  viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>}
            </div>
            <div className={`${ width <= 768 ? (open ? 'filter-on' : 'filter-off') : 'filters'}`}>
                {contentFilter.map((filter, index) =>(
                    <div className="option" key={index}>
                        <input
                        value={filter}
                        type="checkbox"
                        name="type"
                        />
                        <label>{filter}</label>
                    </div>
                ))}
                <div className="btn">
                    <p>Limpiar</p>
                </div>
            </div>
        </aside>
    )
}

export default Filter