import { FC } from 'react'
import ActiveLink from './ActiveLink';
import styles from "./Navbar.module.css";

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar:FC = () => {
  return (
    <nav className={styles['menu-container']}>
      {
        menuItems.map( (item, index) => (
          <ActiveLink key={ index } text={ item.text } href={ item.href } />
        ))
      }
    </nav>
  )
}

