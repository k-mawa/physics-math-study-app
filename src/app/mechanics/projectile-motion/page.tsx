// app/mechanics/projectile-motion/page.tsx
'use client';

import { useState } from 'react';

// This is a placeholder for the actual simulator component
// You would implement the actual physics simulation here
const ProjectileMotionSimulator = () => {
  const [initialVelocity, setInitialVelocity] = useState(20);
  const [angle, setAngle] = useState(45);
  const [height, setHeight] = useState(0);
  const [gravity, setGravity] = useState(9.8);
  const [airResistance, setAirResistance] = useState(0);
  
  // Placeholder for simulation canvas
  // In a real implementation, this would be a canvas with a physics engine
  // or a visualization library like D3.js
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-6 aspect-video bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">シミュレーション表示エリア</p>
        {/* Replace with actual canvas or visualization */}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              初速度 (m/s): {initialVelocity}
            </label>
            <input
              type="range"
              min="0"
              max="50"
              step="0.1"
              value={initialVelocity}
              onChange={(e) => setInitialVelocity(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              発射角度 (度): {angle}
            </label>
            <input
              type="range"
              min="0"
              max="90"
              step="1"
              value={angle}
              onChange={(e) => setAngle(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              初期高さ (m): {height}
            </label>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={height}
              onChange={(e) => setHeight(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              重力加速度 (m/s²): {gravity}
            </label>
            <input
              type="range"
              min="0"
              max="20"
              step="0.1"
              value={gravity}
              onChange={(e) => setGravity(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              空気抵抗係数: {airResistance}
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={airResistance}
              onChange={(e) => setAirResistance(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          
          <button
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            シミュレーション開始
          </button>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-100 rounded-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">シミュレーション結果</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-700">最大高さ</p>
            <p className="text-lg">0.0 m</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">飛距離</p>
            <p className="text-lg">0.0 m</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">滞空時間</p>
            <p className="text-lg">0.0 秒</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">最大速度</p>
            <p className="text-lg">0.0 m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProjectileMotionPage() {
  return (
    <div>
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">斜方投射シミュレーター</h1>
        <p className="text-gray-600 mb-4">
          初速度と角度を調整して物体の放物線運動を観察し、物理法則を理解しましょう。
        </p>
      </section>
      
      <section className="mb-8">
        <ProjectileMotionSimulator />
      </section>
      
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">斜方投射の理論</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">基本方程式</h3>
            <p className="text-gray-700">
              水平方向: x(t) = (v₀ cos θ) t<br />
              垂直方向: y(t) = h₀ + (v₀ sin θ) t - (1/2) g t²
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800">重要なパラメーター</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>v₀: 初速度 (m/s)</li>
              <li>θ: 発射角度 (度)</li>
              <li>h₀: 初期高さ (m)</li>
              <li>g: 重力加速度 (m/s²)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800">飛距離の計算</h3>
            <p className="text-gray-700">
              R = (v₀² sin(2θ)) / g (初期高さが0の場合)
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800">最大高さの計算</h3>
            <p className="text-gray-700">
              H = h₀ + (v₀² sin² θ) / (2g)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}