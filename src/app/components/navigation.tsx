import NavItem from './nav-item';
//import { useState } from 'react';
import '../sidebar.css'

const links = [
  {
    id: '1',
    label: 'Login',
    href: '/login',
  },
  {
    id: '2',
    label: 'Products',
    href: '/products',
  },
  {
    id: '3',
    label: 'Add Products',
    href: '/add-products'
  },
  {
    id: '4',
    label: 'Profile',
    href:`/profile/666abc123def456789012345`
  },
];

const Navigation = () => {
  //const [role] = useState<'buyer' | 'seller' | null>(null);

  return (
    <nav className="sidebar">
      <ul>
        {links.map(({ id, label, href}) => {
          //if (condition && !condition(role)) return null;
          return <NavItem key={id} label={label} href={href} />;
        })}
      </ul>
    </nav>
  );
};

export default Navigation;