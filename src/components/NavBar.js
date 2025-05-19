import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import klLogo from '../assets/kl_logo.png';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const navbarHeight = 64;
    const scrollOffset = navbarHeight + 20;
  
    const handleScroll = () => {
      const scrollPosition = window.scrollY + scrollOffset;
  
      let current = 'home';
  
      for (const item of [...navigation].reverse()) {
        const section = document.querySelector(item.href);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = item.href.substring(1);
            break;  
          }
        }
      }
  
      setCurrentSection(current);
    };
  
    handleScroll(); 
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);
  

  return (
    <Disclosure as="nav" className="bg-blue-200 sticky top-0 z-50" onChange={setIsMenuOpen}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center h-full">
          <a href="#home" className="block">
            <img
              alt="Your Logo"
              src={klLogo}
              className="h-[120px] w-auto object-contain cursor-pointer 
              transition-transform duration-300 ease-in-out
              hover:scale-110 hover:brightness-110"
            />
          </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-4 items-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  currentSection === item.href.substring(1)
                    ? 'bg-blue-300 text-black'
                    : 'text-gray-800 hover:bg-blue-300 hover:text-black',
                  'rounded-md px-3 py-2 text-sm font-medium'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6 ui-open:hidden" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6 ui-open:block" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-4 pb-4 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                currentSection === item.href.substring(1)
                  ? 'bg-blue-300 text-black'
                  : 'text-gray-800 hover:bg-blue-300 hover:text-black',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
