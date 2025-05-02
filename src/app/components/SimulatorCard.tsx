// components/SimulatorCard.tsx
import Link from 'next/link';

interface SimulatorCardProps {
  title: string;
  description: string;
  image: string;
  path: string;
}

const SimulatorCard = ({ title, description, image, path }: SimulatorCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 bg-gray-200">
        {/* Replace with actual image when available */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          {image ? (
            <img 
              src={image} 
              alt={`${title} simulator preview`} 
              className="w-full h-full object-cover"
            />
          ) : (
            <span>シミュレーションプレビュー</span>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <Link 
          href={path}
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          シミュレーターを開く
        </Link>
      </div>
    </div>
  );
};

export default SimulatorCard;