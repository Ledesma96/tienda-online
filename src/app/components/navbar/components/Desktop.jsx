'use client'
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Desktop = ({ pathName }) => {
  const [open, setOpen] = useState(false)
  const [underlineStyle, setUnderlineStyle] = useState({});
  const linksRef = useRef([]);

  const handleMouseEnter = (e) => {
    const linkRect = e.target.getBoundingClientRect();
    const containerRect = e.target.parentNode.getBoundingClientRect();

    setUnderlineStyle({
      width: `${linkRect.width}px`,
      left: `${linkRect.left - containerRect.left}px`,
      transition: 'all 0.3s ease-in-out',
    });
  };

  const updateUnderlineStyle = () => {
    const linkIndex = {
      '/': 0,
      '/tienda': 1,
      '/nosotros': 2,
      '/compra': 3,
    }[pathName];
  
    if (linksRef.current[linkIndex]) {
      const linkElement = linksRef.current[linkIndex];
      const linkRect = linkElement.getBoundingClientRect();
      const containerRect = linkElement.parentNode.getBoundingClientRect();
  
      setUnderlineStyle({
        width: `${linkRect.width}px`,
        left: `${linkRect.left - containerRect.left}px`,
        transition: 'all 0.3s ease-in-out',
      });
    }
  };
  
  const handleMouseLeave = () => {
    updateUnderlineStyle();
  };

  useEffect(() => {
    updateUnderlineStyle();
  }, [pathName]);
  

  return (
    <div className="container-navbar_desktop">
      <Link href='/'>
        <img src='/Logo_ENZO3_2075x.png' alt="Logo" />
        <p>TAN Meringue</p>
      </Link>
      <nav className="container-menu" onMouseLeave={handleMouseLeave}>
        <div className="underline" style={underlineStyle}></div>
        <Link ref={el => linksRef.current[0] = el} className={`${pathName === '/' && 'active'} link`} href='/' onMouseEnter={handleMouseEnter}>Inicio</Link>
        <Link ref={el => linksRef.current[1] = el} className={`${pathName === '/tienda' && 'active'} link`} href='/tienda' onMouseEnter={handleMouseEnter}>Tienda</Link>
        <Link ref={el => linksRef.current[2] = el} className={`${pathName === '/nosotros' && 'active'} link`} href='/nosotros' onMouseEnter={handleMouseEnter}>Nosotros</Link>
        <Link ref={el => linksRef.current[3] = el} className={`${pathName === '/compra' && 'active'} link`} href='/compra' onMouseEnter={handleMouseEnter}>Como comprar</Link>
      </nav>
    </div>
  );
};

export default Desktop;
