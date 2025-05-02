// app/mechanics/page.tsx
import SimulatorCard from '@/app/components/SimulatorCard';

const simulators = [
  {
    title: 'エネルギー保存',
    description: '位置エネルギーと運動エネルギーの変換を観察し、エネルギー保存の法則を理解します。',
    image: '',
    path: '/mechanics/energy-conservation'
  },
  {
    title: '斜方投射シミュレーター',
    description: '初速度と角度を変更して、物体の放物線運動を観察します。',
    image: '',
    path: '/mechanics/projectile-motion'
  },
  {
    title: '単振動',
    description: 'バネやペンデュラムの単振動を観察し、振幅、周波数、位相の関係を理解します。',
    image: '',
    path: '/mechanics/simple-harmonic-motion'
  },
  {
    title: '衝突シミュレーター',
    description: '弾性衝突と非弾性衝突における運動量保存とエネルギー保存を観察します。',
    image: '',
    path: '/mechanics/collisions'
  },
  {
    title: '円運動シミュレーター',
    description: '等速円運動と向心力の関係を視覚的に理解します。',
    image: '',
    path: '/mechanics/circular-motion'
  },
  {
    title: '摩擦力シミュレーター',
    description: '静止摩擦力と動摩擦力が物体の運動に与える影響を観察します。',
    image: '',
    path: '/mechanics/friction'
  }
];

export default function MechanicsPage() {
  return (
    <div>
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">力学</h1>
        <p className="text-gray-700">
          力学は物理学の基礎であり、物体の運動と力の関係を研究する分野です。
          以下のシミュレーターを使って、力学の基本原理を対話的に学ぶことができます。
        </p>
      </section>
      
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {simulators.map((simulator) => (
            <SimulatorCard
              key={simulator.title}
              title={simulator.title}
              description={simulator.description}
              image={simulator.image}
              path={simulator.path}
            />
          ))}
        </div>
      </section>
    </div>
  );
}