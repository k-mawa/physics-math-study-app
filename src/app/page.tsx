// app/page.tsx
import { 
  Zap, 
  Waves, 
  CloudLightning, 
  Thermometer, 
  Eye, 
  Atom, 
  Calculator 
} from 'lucide-react';
import CategoryCard from '@/app/components/CategoryCard';

const categories = [
  {
    title: '力学',
    description: 'エネルギー、運動、力に関する物理学の基本的な法則を学びます。',
    icon: <Zap size={24} />,
    path: '/mechanics'
  },
  {
    title: '波',
    description: '波の性質、干渉、共鳴などの波動現象について探求します。',
    icon: <Waves size={24} />,
    path: '/waves'
  },
  {
    title: '電磁気学',
    description: '電場、磁場、電磁誘導など電磁気学の基本を理解します。',
    icon: <CloudLightning size={24} />,
    path: '/electromagnetism'
  },
  {
    title: '熱力学',
    description: '熱エネルギー、エントロピー、熱力学の法則について学びます。',
    icon: <Thermometer size={24} />,
    path: '/thermodynamics'
  },
  {
    title: '光学',
    description: '光の反射、屈折、干渉など光学の基本原理を探求します。',
    icon: <Eye size={24} />,
    path: '/optics'
  },
  {
    title: '現代物理学',
    description: '相対性理論、量子力学など現代物理学の革命的概念を学びます。',
    icon: <Atom size={24} />,
    path: '/modern'
  },
  {
    title: '数学',
    description: '物理学の理解に不可欠な数学的概念とツールを習得します。',
    icon: <Calculator size={24} />,
    path: '/math'
  }
];

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            物理学と数学の対話型シミュレーター
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            複雑な概念を視覚的に理解するための対話型シミュレーションで、物理学と数学の学習を深めましょう。
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              icon={category.icon}
              path={category.path}
            />
          ))}
        </div>
      </section>

      <section className="py-8 md:py-12 bg-gray-50 -mx-4 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            このアプリについて
          </h2>
          <p className="text-gray-700 mb-4">
            物理学と数学の学習をサポートするためのこのアプリケーションは、複雑な概念を対話型シミュレーションで視覚化することで、理解を深めることを目的としています。
          </p>
          <p className="text-gray-700">
            各単元には、関連する概念を探求するためのさまざまなシミュレーターが含まれています。パラメーターを調整して結果を観察し、物理法則と数学的関係を直感的に理解することができます。
          </p>
        </div>
      </section>
    </div>
  );
}