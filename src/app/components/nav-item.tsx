import Link from 'next/link';

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem = ({ label, href }: NavItemProps) => {
  return (
    <li className="nav-item">
      <Link href={href}>
        <i>{label}</i>
      </Link>
    </li>
  );
};

export default NavItem;