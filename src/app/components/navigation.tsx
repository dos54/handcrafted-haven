import NavItem from './nav-item';
//import { useState } from 'react';
import '../sidebar.css'
import UserAvatar from '@/components/UserAvatar';
import UserAuthButton from '@/components/UserAuthButton';

const links = [
  {
    id: '2',
    label: 'Products',
    href: '/product',
  },
  {
    id: '3',
    label: 'Add Products',
    href: '/add-products'
  },
  {
    id: '4',
    label: 'Profile',
    href:`/profile`
  },
];

export default async function Navigation () {
  //const [role] = useState<'buyer' | 'seller' | null>(null);

  return (
    <nav className="sidebar">
      <ul>
        <li><UserAvatar /></li>
        {links.map(({ id, label, href}) => {
          //if (condition && !condition(role)) return null;
          return <NavItem key={id} label={label} href={href} />;
        })}
        <li>
          <UserAuthButton />
        </li>
      </ul>
    </nav>
  );
};