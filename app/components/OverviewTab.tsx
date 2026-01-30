import { 
  TrendingUp, 
  Wallet, 
  TrendingDown, 
  Users, 
  Eye,
  Download,
  Copy,
  FileText,
  CalendarPlus,
  MessageSquare,
  Send,
  StickyNote
} from 'lucide-react';
import { AreaChart, Area, PieChart, Pie, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function OverviewTab() {
  // Data for the portfolio timeline chart
  const timelineData = [
    { date: '26 Jun', value: 0 },
    { date: '30 Jun', value: 5000000 },
    { date: '11 Jan', value: 15000000 },
    { date: '12 Jan', value: 22000000 },
    { date: '13 Jan', value: 18000000 },
  ];

  // Data for distribution pie chart
  const distributionData = [
    { name: 'Melville Douglas', value: 99.3, color: '#60a5fa' },
    { name: 'Standard Bank', value: 0.6, color: '#3b82f6' },
    { name: 'STANLIB', value: 0.5, color: '#2563eb' },
  ];

  // Top 10 holdings data
  const holdings = [
    { rank: 1, name: 'MDMGE', value: 6983656, percentage: 32.1, color: '#10b981' },
    { rank: 2, name: 'MD983', value: 3137209, percentage: 14.4, color: '#10b981' },
    { rank: 3, name: 'ZAR', value: 1460576, percentage: 6.7, color: '#10b981' },
    { rank: 4, name: 'Citi', value: 720887, percentage: 3.3, color: '#10b981' },
    { rank: 5, name: 'NPM', value: 692628, percentage: 3.2, color: '#10b981' },
    { rank: 6, name: 'SBK', value: 622138, percentage: 2.9, color: '#10b981' },
    { rank: 7, name: 'FSR', value: 578496, percentage: 2.7, color: '#10b981' },
    { rank: 8, name: 'EITSAP', value: 543318, percentage: 2.5, color: '#10b981' },
    { rank: 9, name: 'CFI', value: 500627, percentage: 2.3, color: '#10b981' },
    { rank: 10, name: 'ANG', value: 485733, percentage: 2.2, color: '#10b981' },
  ];

  return (
    <>
      {/* Advisor Actions Section */}
      <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-yellow-400" />
          <h3 className="text-white font-semibold">Advisor Actions</h3>
        </div>
        <p className="text-slate-400 text-sm mb-4">CRM workflow and client management tools</p>
        
        <div className="grid grid-cols-4 gap-4">
          <button className="flex items-center gap-3 p-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-slate-700/50 transition-all">
            <CalendarPlus className="w-5 h-5 text-slate-400" />
            <div className="text-left">
              <div className="text-white font-medium text-sm">Create Task</div>
              <div className="text-slate-500 text-xs">Add to CRM workflow</div>
            </div>
          </button>
          
          <button className="flex items-center gap-3 p-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-slate-700/50 transition-all">
            <MessageSquare className="w-5 h-5 text-slate-400" />
            <div className="text-left">
              <div className="text-white font-medium text-sm">Log Interaction</div>
              <div className="text-slate-500 text-xs">Record client call</div>
            </div>
          </button>
          
          <button className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl shadow-lg shadow-purple-500/20 transition-all">
            <Send className="w-5 h-5 text-white" />
            <div className="text-left">
              <div className="text-white font-medium text-sm">Send Proposal</div>
              <div className="text-blue-100 text-xs">Generate recommendation</div>
            </div>
          </button>
          
          <button className="flex items-center gap-3 p-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-slate-700/50 transition-all">
            <StickyNote className="w-5 h-5 text-slate-400" />
            <div className="text-left">
              <div className="text-white font-medium text-sm">Add Note</div>
              <div className="text-slate-500 text-xs">Save observation</div>
            </div>
          </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {/* Total Assets */}
        <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-cyan-400" />
            </div>
            <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
              <Eye className="w-4 h-4 text-slate-400" />
            </button>
          </div>
          <div className="text-slate-400 text-sm mb-2">Total Assets</div>
          <div className="text-white text-3xl font-bold mb-2">R 21 750 371</div>
          <div className="text-slate-500 text-xs mb-4">
            Sum of all positive account balances across client portfolio
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors">
              <Download className="w-4 h-4 text-slate-400" />
            </button>
            <button className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors">
              <Copy className="w-4 h-4 text-slate-400" />
            </button>
            <button className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors">
              <FileText className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Net Worth */}
        <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
              <Wallet className="w-6 h-6 text-emerald-400" />
            </div>
            <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
              <Eye className="w-4 h-4 text-slate-400" />
            </button>
          </div>
          <div className="text-slate-400 text-sm mb-2">Net Worth</div>
          <div className="text-white text-3xl font-bold mb-2">R 21 649 096</div>
          <div className="text-slate-500 text-xs mb-4">
            Total assets minus liabilities - key indicator of financial health
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors">
              <Download className="w-4 h-4 text-slate-400" />
            </button>
            <button className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors">
              <Copy className="w-4 h-4 text-slate-400" />
            </button>
            <button className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors">
              <FileText className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Total Liabilities */}
        <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-red-400" />
            </div>
            <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
              <Eye className="w-4 h-4 text-slate-400" />
            </button>
          </div>
          <div className="text-slate-400 text-sm mb-2">Total Liabilities</div>
          <div className="text-white text-3xl font-bold mb-2">R 101 275</div>
          <div className="text-slate-500 text-xs mb-4">
            Outstanding debt and financial obligations requiring attention
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors">
              <Download className="w-4 h-4 text-slate-400" />
            </button>
            <button className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors">
              <Copy className="w-4 h-4 text-slate-400" />
            </button>
            <button className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors">
              <FileText className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Active Accounts */}
        <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
              <Eye className="w-4 h-4 text-slate-400" />
            </button>
          </div>
          <div className="text-slate-400 text-sm mb-2">Active Accounts</div>
          <div className="text-white text-3xl font-bold mb-2">6</div>
          <div className="text-slate-500 text-xs mb-4">
            Number of active accounts managed across all institutions
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors">
              <Download className="w-4 h-4 text-slate-400" />
            </button>
            <button className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors">
              <Copy className="w-4 h-4 text-slate-400" />
            </button>
            <button className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors">
              <FileText className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Portfolio Value Timeline */}
        <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-white font-semibold text-lg">Portfolio Value Timeline</h3>
              <p className="text-slate-400 text-sm">Assets & liabilities over time</p>
            </div>
            <button className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors">
              <Download className="w-4 h-4 text-slate-400" />
            </button>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={timelineData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
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
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#3b82f6" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorValue)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Distribution by Institution */}
        <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-white font-semibold text-lg">Distribution</h3>
              <p className="text-slate-400 text-sm">By institution</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="w-40 h-40">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {distributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 space-y-3">
              {distributionData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-slate-300 text-sm">{item.name}</span>
                  </div>
                  <span className="text-white font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top 10 Holdings */}
      <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
            <Wallet className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">Top 10 Holdings</h3>
            <p className="text-slate-400 text-sm">Largest individual positions</p>
          </div>
        </div>
        <div className="space-y-3">
          {holdings.map((holding) => (
            <div key={holding.rank} className="flex items-center gap-4">
              <div className="flex items-center justify-center w-8 h-8 bg-emerald-500/20 rounded-lg text-emerald-400 font-semibold text-sm">
                {holding.rank}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white font-medium">{holding.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-white font-semibold">R {holding.value.toLocaleString()}</span>
                    <span className="text-slate-400 text-sm w-12 text-right">{holding.percentage}%</span>
                  </div>
                </div>
                <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-500"
                    style={{ width: `${holding.percentage * 3}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
