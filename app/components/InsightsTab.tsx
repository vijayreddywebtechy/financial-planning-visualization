import { 
  Download,
  CalendarPlus,
  MessageSquare,
  Sparkles,
  Lightbulb,
  Repeat,
  Calendar,
  Target,
  Shield,
  Activity,
  Building2
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Treemap, BarChart, Bar } from 'recharts';

export default function InsightsTab() {
  // Performance Metrics Radar Chart Data
  const performanceMetrics = [
    { metric: 'Diversification', value: 92 },
    { metric: 'Health', value: 98 },
    { metric: 'Concentration', value: 60 },
    { metric: 'Institutions', value: 90 },
    { metric: 'Liquidity', value: 75 },
    { metric: 'Growth', value: 85 },
  ];

  // Asset Coverage Timeline Data
  const assetCoverageData = [
    { date: '27 Jun', value: 0 },
    { date: '01 Jul', value: 8000000 },
    { date: '12 Jan', value: 19000000 },
    { date: '13 Jan', value: 22500000 },
    { date: '14 Jan', value: 16000000 },
  ];

  // Institution Performance Data
  const institutionPerformance = [
    { name: 'Melville Douglas', value: 21588274.98 },
    { name: 'STANLIB', value: 118027.47 },
    { name: 'Discovery Bank', value: 586.64 },
    { name: 'Other', value: 43481.49 },
    { name: 'Standard Bank', value: -97674.60 },
  ];

  // Portfolio Hierarchy Treemap Data
  const treemapData = {
    name: 'Portfolio',
    children: [
      { name: 'MDMGE', size: 6983656, fill: '#a78bfa' },
      { name: 'ZAR', size: 1460576, fill: '#c4b5fd' },
      { name: 'MD983', size: 3137209, fill: '#8b5cf6' },
      { name: 'NPM', size: 692628, fill: '#7c3aed' },
      { name: 'Citi', size: 720887, fill: '#6d28d9' },
      { name: 'WPL', size: 380000, fill: '#9333ea' },
      { name: 'CFI', size: 500627, fill: '#a855f7' },
      { name: 'FSR', size: 578496, fill: '#d8b4fe' },
      { name: 'SLM', size: 450000, fill: '#e9d5ff' },
      { name: 'EITSAP', size: 543318, fill: '#f3e8ff' },
      { name: 'SBK', size: 622138, fill: '#b794f6' },
      { name: 'RSGK', size: 520000, fill: '#9f7aea' },
      { name: 'MDRS', size: 420000, fill: '#b19cf9' },
      { name: 'PRSL', size: 380000, fill: '#c3adf7' },
      { name: 'MTN', size: 590000, fill: '#d6bcfa' },
      { name: 'RPFH', size: 340000, fill: '#e2d1fc' },
      { name: 'MDSS', size: 460000, fill: '#ede5fe' },
      { name: 'MMDGT', size: 680000, fill: '#dcd0f9' },
      { name: 'MDMGE2', size: 500000, fill: '#c9b8f7' },
    ]
  };

  return (
    <>
      {/* Strategic Analysis & Recommendations */}
      <div className="bg-gradient-to-br from-purple-900/20 to-slate-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="w-5 h-5 text-purple-400" />
          <h3 className="text-white font-semibold">Strategic Analysis & Recommendations</h3>
        </div>
        <p className="text-slate-400 text-xs md:text-sm mb-4">AI-powered insights with actionable next steps for client advisory</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <button className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl shadow-lg shadow-purple-500/20 transition-all">
            <Repeat className="w-4 h-4 md:w-5 md:h-5 text-white" />
            <div className="text-left">
              <div className="text-white font-medium text-xs md:text-sm">Send Rebalancing</div>
              <div className="text-purple-100 text-[10px] md:text-xs">Proposal to client</div>
            </div>
          </button>
          
          <button className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-slate-700/50 transition-all">
            <Calendar className="w-4 h-4 md:w-5 md:h-5 text-slate-400" />
            <div className="text-left">
              <div className="text-white font-medium text-xs md:text-sm">Schedule Review</div>
              <div className="text-slate-500 text-[10px] md:text-xs">Book meeting</div>
            </div>
          </button>
          
          <button className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-slate-700/50 transition-all">
            <Download className="w-4 h-4 md:w-5 md:h-5 text-slate-400" />
            <div className="text-left">
              <div className="text-white font-medium text-xs md:text-sm">Export Analysis</div>
              <div className="text-slate-500 text-[10px] md:text-xs">Full report</div>
            </div>
          </button>
          
          <button className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-slate-700/50 transition-all">
            <CalendarPlus className="w-4 h-4 md:w-5 md:h-5 text-slate-400" />
            <div className="text-left">
              <div className="text-white font-medium text-xs md:text-sm">Create Task</div>
              <div className="text-slate-500 text-[10px] md:text-xs">Action item</div>
            </div>
          </button>
        </div>
      </div>

      {/* AI-Powered Insights Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 md:mb-6">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
          <h3 className="text-white font-semibold text-base md:text-lg">AI-Powered Insights</h3>
        </div>
        <div className="flex gap-2 md:gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:bg-slate-700/50 transition-colors text-slate-300 text-sm">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-400 rounded-lg shadow-lg shadow-orange-500/20 transition-all text-white text-sm font-medium">
            <MessageSquare className="w-4 h-4" />
            Discuss
          </button>
        </div>
      </div>

      {/* Overall Portfolio Health */}
      <div className="bg-gradient-to-br from-teal-900/30 via-emerald-900/20 to-slate-900/30 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-emerald-500/30 mb-6 md:mb-8">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
          </div>
          <h3 className="text-emerald-400 font-semibold text-base md:text-lg">Overall Portfolio Health</h3>
        </div>
        <div className="text-emerald-400 text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">73.8<span className="text-2xl md:text-3xl">/100</span></div>
        <p className="text-slate-300 text-xs md:text-sm max-w-3xl">
          Your portfolio demonstrates strong fundamentals with balanced risk management across 6 accounts and 36 individual holdings.
        </p>
      </div>

      {/* Performance Metrics and Asset Coverage */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        {/* Performance Metrics Radar */}
        <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-slate-700/50">
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <Activity className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-base md:text-lg">Performance Metrics</h3>
              <p className="text-slate-400 text-xs md:text-sm">Multi-dimensional analysis</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={performanceMetrics}>
              <PolarGrid stroke="#475569" />
              <PolarAngleAxis 
                dataKey="metric" 
                stroke="#94a3b8"
                style={{ fontSize: '12px' }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]}
                stroke="#475569"
                style={{ fontSize: '10px' }}
              />
              <Radar 
                name="Performance" 
                dataKey="value" 
                stroke="#a78bfa" 
                fill="#a78bfa" 
                fillOpacity={0.6}
                strokeWidth={2}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Asset Coverage */}
        <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-slate-700/50">
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-base md:text-lg">Asset Coverage</h3>
              <p className="text-slate-400 text-xs md:text-sm">Risk protection over time</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={assetCoverageData}>
              <defs>
                <linearGradient id="colorCoverage" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="date" 
                stroke="#64748b" 
                style={{ fontSize: '12px' }}
                tickLine={false}
              />
              <YAxis 
                stroke="#64748b" 
                style={{ fontSize: '12px' }}
                tickLine={false}
                tickFormatter={(value) => `R${(value / 1000000).toFixed(0)}M`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#fff'
                }}
                formatter={(value: any) => [`R ${value.toLocaleString()}`, 'Coverage']}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#3b82f6" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorCoverage)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Portfolio Hierarchy Treemap */}
      <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-slate-700/50 mb-6 md:mb-8">
        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
            <Target className="w-4 h-4 md:w-5 md:h-5 text-orange-400" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-base md:text-lg">Portfolio Hierarchy</h3>
            <p className="text-slate-400 text-xs md:text-sm">Company → Accounts → Holdings breakdown</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <Treemap
            data={treemapData.children}
            dataKey="size"
            aspectRatio={4 / 1}
            // stroke="#1e293b"
            fill="#8b5cf6"
            content={(props: any) => {
              const { x, y, width, height, name, fill } = props;
              
              if (!width || !height || width < 40 || height < 25) {
                return <g></g>;
              }
              
              return (
                <g>
                  <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    fill={fill}
                    stroke="#1e293b"
                    strokeWidth={2}
                  />
                  <text
                    x={x + width / 2}
                    y={y + height / 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#fff"
                    fontSize={width > 100 && height > 40 ? 14 : width > 60 ? 11 : 9}
                    fontWeight="600"
                  >
                    {name}
                  </text>
                </g>
              );
            }}
          />
        </ResponsiveContainer>
      </div>

      {/* Metric Score Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        {/* Diversification */}
        <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-slate-700/50">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
              </div>
              <h3 className="text-white font-semibold text-base md:text-lg">Diversification</h3>
            </div>
            <div className="text-right">
              <div className="text-emerald-400 text-2xl md:text-3xl font-bold">92</div>
              <div className="text-slate-400 text-xs">out of 100</div>
            </div>
          </div>
          <p className="text-slate-400 text-sm mb-4">
            Outstanding diversification significantly reduces concentration risk.
          </p>
          <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" style={{ width: '92%' }}></div>
          </div>
        </div>

        {/* Financial Health */}
        <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-slate-700/50">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
              </div>
              <h3 className="text-white font-semibold text-base md:text-lg">Financial Health</h3>
            </div>
            <div className="text-right">
              <div className="text-purple-400 text-2xl md:text-3xl font-bold">98</div>
              <div className="text-slate-400 text-xs">out of 100</div>
            </div>
          </div>
          <p className="text-slate-400 text-sm mb-4">
            Exceptional equity position provides maximum financial flexibility.
          </p>
          <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 to-pink-400 rounded-full" style={{ width: '98%' }}></div>
          </div>
        </div>

        {/* Portfolio Balance */}
        <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-slate-700/50">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
                <Activity className="w-5 h-5 md:w-6 md:h-6 text-pink-400" />
              </div>
              <h3 className="text-white font-semibold text-base md:text-lg">Portfolio Balance</h3>
            </div>
            <div className="text-right">
              <div className="text-pink-400 text-2xl md:text-3xl font-bold">60</div>
              <div className="text-slate-400 text-xs">out of 100</div>
            </div>
          </div>
          <p className="text-slate-400 text-sm mb-4">
            High concentration detected. Diversification strategy recommended.
          </p>
          <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-pink-500 to-purple-400 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>

        {/* Institution Spread */}
        <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-slate-700/50">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <Building2 className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />
              </div>
              <h3 className="text-white font-semibold text-base md:text-lg">Institution Spread</h3>
            </div>
            <div className="text-right">
              <div className="text-orange-400 text-2xl md:text-3xl font-bold">90</div>
              <div className="text-slate-400 text-xs">out of 100</div>
            </div>
          </div>
          <p className="text-slate-400 text-sm mb-4">
            Outstanding institutional spread provides superior counterparty protection.
          </p>
          <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full" style={{ width: '90%' }}></div>
          </div>
        </div>
      </div>

      {/* Institution Performance */}
      <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-slate-700/50">
        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
            <Building2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-base md:text-lg">Institution Performance</h3>
            <p className="text-slate-400 text-xs md:text-sm">Net position comparison</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={200} className="md:h-[250px]">
          <BarChart data={institutionPerformance}>
            <XAxis 
              dataKey="name" 
              stroke="#64748b" 
              style={{ fontSize: '12px' }}
              tickLine={false}
            />
            <YAxis 
              stroke="#64748b" 
              style={{ fontSize: '12px' }}
              tickLine={false}
              tickFormatter={(value) => `R${(value / 1000000).toFixed(1)}M`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1e293b', 
                border: '1px solid #334155',
                borderRadius: '8px',
                color: '#fff'
              }}
              formatter={(value: any) => [`R ${value.toLocaleString()}`, 'Value']}
            />
            <Bar 
              dataKey="value" 
              fill="#3b82f6"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
