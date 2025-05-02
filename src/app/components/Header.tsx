// components/Header.tsx
import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu';

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header = ({ toggleSidebar, isSidebarOpen }: HeaderProps) => {
  return (
    <header className="bg-blue-700 text-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="md:hidden">
            <HamburgerMenu isOpen={isSidebarOpen} toggleMenu={toggleSidebar} />
          </div>
          <Link href="/" className="text-xl font-bold flex items-center">
            Physics & Math Simulator
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-blue-200 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-200 transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-200 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;