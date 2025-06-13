import React from 'react';
import Image from 'next/image';
import '../globals.css';
import logo from 'public/images/handcrafted_haven_logo_black.png';
import cartIcon from 'public/images/handcrafted_haven_logo_black.png';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link href="/" className="logo">
          <Image
            src={logo}
            alt="Site Logo"
            className="logo-img"
            height={40} // Adjust height as needed
            width={120} // Adjust width as needed (Next.js requires explicit dimensions or layout)
            style={{ objectFit: 'contain' }}
          />
        </Link>
        <Link href="/cart" className="cart-link">
          <Image
            src={cartIcon}
            alt="Cart"
            className="cart-img"
            height={30}
            width={30}
            style={{ objectFit: 'contain' }}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;