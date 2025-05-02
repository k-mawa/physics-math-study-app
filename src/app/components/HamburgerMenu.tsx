// components/HamburgerMenu.tsx
interface HamburgerMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
  }
  
  const HamburgerMenu = ({ isOpen, toggleMenu }: HamburgerMenuProps) => {
    return (
      <button 
        onClick={toggleMenu}
        className={`flex flex-col justify-center items-center w-8 h-8 ${isOpen ? 'hamburger-active' : ''}`}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span className={`hamburger-line block h-0.5 w-6 my-0.5 bg-white rounded-sm`}></span>
        <span className={`hamburger-line block h-0.5 w-6 my-0.5 bg-white rounded-sm`}></span>
        <span className={`hamburger-line block h-0.5 w-6 my-0.5 bg-white rounded-sm`}></span>
      </button>
    );
  };
  
  export default HamburgerMenu;