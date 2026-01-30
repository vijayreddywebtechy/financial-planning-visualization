'use client';

import { useState } from 'react';
import {
  Sparkles,
  BarChart3,
  Briefcase,
  Lightbulb,
} from 'lucide-react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';

import OverviewTab from './components/OverviewTab';
import HoldingsTab from './components/HoldingsTab';
import InsightsTab from './components/InsightsTab';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'overview' | 'holdings' | 'insights'>(
    'overview'
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-4 md:p-6 lg:p-8">
      <div className="max-w-[1400px] mx-auto border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8">

        {/* ================= Header ================= */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-6 md:mb-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">
                Premium Portfolio Analysis
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-2">
              Client Portfolio Analysis
            </h1>
            <p className="text-slate-400 text-xs md:text-sm">
              Comprehensive portfolio view across 6 accounts with detailed holdings analysis and risk assessment.
            </p>
          </div>

          {/* Portfolio Health Card */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-slate-700/50 w-full lg:min-w-[320px] lg:w-auto">
            
            <div className='flex flex-col md:flex-row items-center gap-4'>
            <div className="relative w-28 h-28 md:w-36 md:h-36 mb-3">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                  cx="50%"
                  cy="50%"
                  innerRadius="70%"
                  outerRadius="100%"
                  startAngle={90}
                  endAngle={-270}
                  data={[{ value: 99.5, fill: '#10b981' }]}
                >
                  <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    angleAxisId={0}
                    tick={false}
                  />
                  <RadialBar
                    background={{ fill: '#1e293b' }}
                    dataKey="value"
                    cornerRadius={10}
                    fill="#10b981"
                  />
                </RadialBarChart>
              </ResponsiveContainer>

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-emerald-400 font-bold text-base">
                  Excellent
                </span>
              </div>
            </div>
            <div className="text-center md:text-left">
            <div className="text-blue-400 text-xs md:text-sm mb-2 md:mb-3">Portfolio Health</div>
            <div className="text-white text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              R 21 649 096
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="text-xs text-slate-400">Assets</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <span className="text-xs text-slate-400">Liabilities</span>
              </div>
            </div>

            <div className="text-emerald-400 text-sm font-medium">
              99.5% Equity
            </div>

            </div>
            </div>
            





          </div>
        </div>

        {/* ================= Tabs ================= */}
        <div className="flex gap-2 md:gap-4 mb-6 md:mb-8 border-b border-slate-700/50 pb-4 md:pb-6 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'holdings', label: 'Holdings', icon: Briefcase },
            { id: 'insights', label: 'Insights', icon: Lightbulb }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as any)}
              className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all whitespace-nowrap text-sm md:text-base ${
                activeTab === id
                  ? 'bg-blue-600/20 text-white border-b-2 border-blue-500'
                  : 'bg-blue-600/20 text-slate-400 hover:text-slate-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* ================= Tab Content ================= */}
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'holdings' && <HoldingsTab />}
        {activeTab === 'insights' && <InsightsTab />}

        {/* ================= Footer ================= */}
        <div className="mt-8 md:mt-10 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 text-slate-500 text-xs md:text-sm">
          <div>Financial Planning Tool • Customer 360</div>
          <div>Last updated: 2026/01/28</div>
        </div>
      </div>
    </div>
  );
}
