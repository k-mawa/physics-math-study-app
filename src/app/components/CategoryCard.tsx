// components/CategoryCard.tsx
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
}

const CategoryCard = ({ title, description, icon, path }: CategoryCardProps) => {
  return (
    <Link 
      href={path}
      className="block group"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="text-blue-600 mr-3">
              {icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
          </div>
          <p className="text-gray-600 text-sm">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;