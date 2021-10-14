import React from 'react';
import './Files.css';

export default function Navbar() {
  return (
    <>
      <nav className="navbar__head">
        <a href="/">Home</a> |
        <a href="/about">About</a> |
        <a href="/projects">Projects</a> |
        <a href="/contact">Contact</a>
      </nav>
     
    </>
  )
}