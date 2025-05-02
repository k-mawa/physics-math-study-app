// components/SidebarOverlay.tsx
interface SidebarOverlayProps {
    isOpen: boolean;
    closeSidebar: () => void;
  }
  
  const SidebarOverlay = ({ isOpen, closeSidebar }: SidebarOverlayProps) => {
    if (!isOpen) return null;
    
    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden transition-opacity"
        onClick={closeSidebar}
        aria-hidden="true"
      />
    );
  };
  
  export default SidebarOverlay;