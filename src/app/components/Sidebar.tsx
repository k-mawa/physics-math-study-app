// components/Sidebar.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface CategoryItem {
  name: string;
  path: string;
}

interface Category {
  name: string;
  subcategories: CategoryItem[];
}

// Example categories and subcategories - replace with your actual data
const categories: Category[] = [
  {
    name: '力学',
    subcategories: [
      { name: 'エネルギーと仕事', path: '/mechanics/energy' },
      { name: '斜方投射', path: '/mechanics/projectile-motion' },
      { name: '単振動', path: '/mechanics/shm' },
      { name: '円運動', path: '/mechanics/circular' },
    ]
  },
  {
    name: '波',
    subcategories: [
      { name: '波の基本', path: '/waves/basics' },
      { name: '波の干渉', path: '/waves/interference' },
      { name: '定常波', path: '/waves/standing' },
      { name: 'ドップラー効果', path: '/waves/doppler' },
    ]
  },
  {
    name: '電磁気学',
    subcategories: [
      { name: '静電気', path: '/electromagnetism/static' },
      { name: '電流', path: '/electromagnetism/current' },
      { name: '磁場', path: '/electromagnetism/magnetic' },
      { name: '電磁誘導', path: '/electromagnetism/induction' },
    ]
  },
  {
    name: '熱力学',
    subcategories: [
      { name: '熱と温度', path: '/thermodynamics/heat' },
      { name: '気体の法則', path: '/thermodynamics/gas-laws' },
      { name: '熱力学の法則', path: '/thermodynamics/laws' },
      { name: 'エントロピー', path: '/thermodynamics/entropy' },
    ]
  },
  {
    name: '光学',
    subcategories: [
      { name: '幾何光学', path: '/optics/geometric' },
      { name: '波動光学', path: '/optics/wave' },
      { name: '干渉と回折', path: '/optics/interference' },
      { name: '偏光', path: '/optics/polarization' },
    ]
  },
  {
    name: '現代物理学',
    subcategories: [
      { name: '相対性理論', path: '/modern/relativity' },
      { name: '量子力学', path: '/modern/quantum' },
      { name: '原子物理学', path: '/modern/atomic' },
      { name: '核物理学', path: '/modern/nuclear' },
    ]
  },
  {
    name: '数学',
    subcategories: [
      { name: '代数学', path: '/math/algebra' },
      { name: '幾何学', path: '/math/geometry' },
      { name: '微積分', path: '/math/calculus' },
      { name: '線形代数', path: '/math/linear-algebra' },
      { name: '微分方程式', path: '/math/differential-equations' },
    ]
  }
];

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const pathname = usePathname();
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  // Auto-expand category based on current path
  useEffect(() => {
    const currentCategory = categories.find(category => 
      category.subcategories.some(sub => pathname?.startsWith(sub.path))
    );
    
    if (currentCategory) {
      setExpandedCategories(prev => ({
        ...prev,
        [currentCategory.name]: true
      }));
    }
  }, [pathname]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  // Check if a subcategory is active
  const isSubcategoryActive = (path: string) => {
    return pathname === path;
  };

  return (
    <aside 
      className={`bg-gray-100 fixed top-0 left-0 h-full w-64 pt-16 shadow-lg transition-transform transform z-40 ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}
    >
      <div className="p-4 h-full overflow-y-auto sidebar-scrollbar">
        <h2 className="text-lg font-bold mb-4 text-gray-700">学習カテゴリ</h2>
        
        <nav>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.name} className="border-b border-gray-200 pb-2">
                <button 
                  className="flex items-center justify-between w-full px-2 py-2 text-left text-gray-700 hover:bg-gray-200 rounded-md transition-colors"
                  onClick={() => toggleCategory(category.name)}
                >
                  <span className="font-medium">{category.name}</span>
                  {expandedCategories[category.name] ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </button>
                
                {expandedCategories[category.name] && (
                  <ul className="pl-4 mt-1 space-y-1">
                    {category.subcategories.map((subcategory) => (
                      <li key={subcategory.path}>
                        <Link 
                          href={subcategory.path}
                          className={`block px-2 py-1.5 text-sm rounded transition-colors ${
                            isSubcategoryActive(subcategory.path) 
                              ? 'bg-blue-100 text-blue-700 font-medium' 
                              : 'text-gray-600 hover:text-blue-600 hover:bg-gray-200'
                          }`}
                        >
                          {subcategory.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;