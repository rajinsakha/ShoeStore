import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks} from '../constants';

const Navbar = () => {
  return (
   <header className='padding-x py-8 absolute z-10 w-full'>
    <nav className='flex justify-between items-center max-container'>
      <a href="/">
        <img src={headerLogo} alt="Logo" width={130} height={29} />
      </a>

    <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'></ul>
      {navLinks.map((item)=>(
        <li className='list-none' key={item.label}>
          <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
          {item.label}
          </a>
        </li>
      ))}
    </nav>
   </header>
  )
}

export default Navbar
