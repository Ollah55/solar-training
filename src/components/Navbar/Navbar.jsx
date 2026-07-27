import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

    const [scrolled,setScrolled]=useState(false);
    const [menuOpen,setMenuOpen]=useState(false);

    useEffect(()=>{

        const handleScroll=()=>{

            setScrolled(window.scrollY>40);

        };

        window.addEventListener("scroll",handleScroll);

        return()=>window.removeEventListener("scroll",handleScroll);

    },[]);

    return(

<nav className={scrolled ? "navbar scrolled" : "navbar"}>

<div className="container">

<a href="#hero">

<img
src={logo}
alt="BuiltRight Energy"
className="logo"
/>

</a>

<ul className={menuOpen ? "nav-links active":"nav-links"}>

<li><a href="#hero">Home</a></li>
<li><a href="#curriculum">Curriculum</a></li>
<li><a href="#details">Course Details</a></li>
<li><a href="#journey">Journey</a></li>
<li><a href="#faq">FAQ</a></li>

</ul>

<div className="nav-actions">

<a
href="https://wa.me/2349134991239?text=Hello%20BuiltRight%20Energy,%20I%20want%20to%20register%20for%20the%20Solar%20Installation%20Academy."
target="_blank"
rel="noreferrer"
className="nav-btn"
>

<FaWhatsapp/>

Enroll Now

</a>

<div
className="menu-toggle"
onClick={()=>setMenuOpen(!menuOpen)}
>

{menuOpen?<FaTimes/>:<FaBars/>}

</div>

</div>

</div>

</nav>

    )

}