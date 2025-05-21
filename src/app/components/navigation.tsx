import NavItem from './nav-item';

const links = [
  {
    id: '1234',
    label: 'Home',
    href: '/',
  },
  {
    id: '5678',
    label: 'Link 2',
    href: '/',
  },
  {
    id: '91011',
    label: 'Link 3',
    href: '/',
  },
];

const Navigation = () => {
  return (
    <nav>
      <ul>
        {links.map(({ id, label, href }) => (
          <NavItem label={label} key={id} href={href} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
