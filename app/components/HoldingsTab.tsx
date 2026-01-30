import { useState } from 'react';
import { 
  Download,
  Mail,
  Star,
  ChevronDown,
  Search,
  Filter,
  Building2,
  ArrowUpDown,
  BarChart3,
  Briefcase,
  TrendingUp
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export default function HoldingsTab() {
  const [expandedAccount, setExpandedAccount] = useState<number | null>(null);

  // Holdings distribution bar chart data
  const holdingsDistributionData = [
    { name: 'Melville Douglas', holdings: 35 },
    { name: 'STANLIB', holdings: 1 },
  ];

  // Individual holdings data
  const individualHoldings: { [key: number]: any[] } = {
    1: [
      { ticker: 'MDBB3', name: 'MD Stanlib Bond Fund B3', date: '13 Jan 2026', value: 3137209.18, badgeColor: 'bg-blue-500' },
      { ticker: 'ZAR', name: 'Rand CAPITAL ACCOUNT', date: '13 Jan 2026', value: 1460575.85, badgeColor: 'bg-purple-500' },
      { ticker: 'ZAR-S-DIV', name: 'Rand SETTLEMENT ACCOUNT - DIV', date: '13 Jan 2026', value: 2061.82, badgeColor: 'bg-indigo-500' },
      { ticker: 'AGL', name: 'Anglo American Plc', date: '13 Jan 2026', value: 368184.04, badgeColor: 'bg-blue-400' },
      { ticker: 'ANG', name: 'Anglogold Ashanti Plc', date: '13 Jan 2026', value: 485733.00, badgeColor: 'bg-pink-500' },
      { ticker: 'BHG', name: 'BHP Group Limited', date: '13 Jan 2026', value: 178500.00, badgeColor: 'bg-purple-400' },
      { ticker: 'GFI', name: 'Gold Fields Limited', date: '13 Jan 2026', value: 720887.20, badgeColor: 'bg-pink-400' },
      { ticker: 'NPH', name: 'Northam Platinum Holdings Ltd', date: '13 Jan 2026', value: 409307.10, badgeColor: 'bg-purple-600' },
      { ticker: 'VAL', name: 'Valterra Platinum Ltd', date: '13 Jan 2026', value: 393098.63, badgeColor: 'bg-indigo-600' },
    ],
    2: [
      { ticker: 'STANLIB', name: 'STANLIB Multi-Manager Aggressive ETF', date: '12 Jan 2026', value: 118027.47, badgeColor: 'bg-teal-500' },
    ]
  };

  // Accounts data for Holdings tab
  const accounts = [
    {
      id: 1,
      institution: 'Melville Douglas',
      institutionIcon: Building2,
      accountName: 'Melville Douglas - ERA012',
      accountNumber: 'PR14845',
      date: '13 Jan 2026',
      holdings: 35,
      balance: 21588274.98,
      type: 'asset',
      color: 'blue'
    },
    {
      id: 2,
      institution: 'STANLIB',
      institutionIcon: Building2,
      accountName: 'STANLIB Unit Trusts',
      accountNumber: '930591288',
      date: '12 Jan 2026',
      holdings: 1,
      balance: 118027.47,
      type: 'asset',
      color: 'blue'
    },
    {
      id: 3,
      institution: 'Standard Bank',
      institutionIcon: Building2,
      accountName: 'VAF - RENAULTKWID 1.0 DYNAMIQUE / ZEN 5DR2022',
      accountNumber: '00000093807116271',
      date: '14 Jun 2026',
      holdings: 0,
      balance: -97674.60,
      type: 'liability',
      color: 'red'
    },
    {
      id: 4,
      institution: 'Standard Bank',
      institutionIcon: Building2,
      accountName: 'Tax Free Investment Account',
      accountNumber: '5796867',
      date: '13 Jan 2026',
      holdings: 0,
      balance: 43481.49,
      type: 'asset',
      color: 'blue'
    },
    {
      id: 5,
      institution: '<not supplied>',
      institutionIcon: Building2,
      accountName: 'Test liability 4',
      accountNumber: '',
      date: '27 Jun 2025',
      holdings: 0,
      balance: -3600.00,
      type: 'liability',
      color: 'red'
    },
    {
      id: 6,
      institution: 'Discovery Bank',
      institutionIcon: Building2,
      accountName: 'Demand Savings',
      accountNumber: '****0798',
      date: '01 Jul 2025',
      holdings: 0,
      balance: 586.64,
      type: 'asset',
      color: 'blue'
    },
  ];

  return (
    <>
      {/* Account Management Section */}
      <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Building2 className="w-5 h-5 text-emerald-400" />
          <h3 className="text-white font-semibold">Account Management</h3>
        </div>
        <p className="text-slate-400 text-xs md:text-sm mb-4">Client relationship and portfolio management tools</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <button className="flex items-center gap-3 p-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-slate-700/50 transition-all">
            <Mail className="w-5 h-5 text-slate-400" />
            <div className="text-left">
              <div className="text-white font-medium text-sm">Email Portfolio</div>
              <div className="text-slate-500 text-xs">Send to client</div>
            </div>
          </button>
          
          <button className="flex items-center gap-3 p-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-slate-700/50 transition-all">
            <Star className="w-5 h-5 text-slate-400" />
            <div className="text-left">
              <div className="text-white font-medium text-sm">Update Risk Profile</div>
              <div className="text-slate-500 text-xs">Adjust assessment</div>
            </div>
          </button>
          
          <button className="flex items-center gap-3 p-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl shadow-lg shadow-emerald-500/20 transition-all">
            <Download className="w-5 h-5 text-white" />
            <div className="text-left">
              <div className="text-white font-medium text-sm">Export Holdings</div>
              <div className="text-emerald-100 text-xs">Full breakdown</div>
            </div>
          </button>
          
          <button className="flex items-center gap-3 p-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-slate-700/50 transition-all">
            <ArrowUpDown className="w-5 h-5 text-slate-400" />
            <div className="text-left">
              <div className="text-white font-medium text-sm">Compare Assets</div>
              <div className="text-slate-500 text-xs">Side by side view</div>
            </div>
          </button>
        </div>
      </div>

      {/* Search Bar and Filters */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search accounts..."
            className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl pl-12 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
        </div>
        <button className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-slate-700/50 transition-colors">
          <Filter className="w-5 h-5 text-slate-400" />
        </button>
        <button className="px-4 md:px-6 py-3 bg-blue-600/20 text-blue-400 rounded-xl border border-blue-500/50 font-medium text-sm md:text-base">
          All
        </button>
        <button className="px-4 md:px-6 py-3 text-slate-400 hover:text-slate-300 rounded-xl font-medium text-sm md:text-base hidden sm:block">
          Assets
        </button>
        <button className="px-4 md:px-6 py-3 text-slate-400 hover:text-slate-300 rounded-xl font-medium text-sm md:text-base hidden sm:block">
          Liabilities
        </button>
      </div>

      {/* Holdings Distribution Chart */}
      <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-slate-700/50 mb-6 md:mb-8">
        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-base md:text-lg">Holdings Distribution</h3>
            <p className="text-slate-400 text-xs md:text-sm">Number of holdings per institution</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={250} className="md:h-[300px]">
          <BarChart data={holdingsDistributionData}>
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
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1e293b', 
                border: '1px solid #334155',
                borderRadius: '8px',
                color: '#fff'
              }}
              formatter={(value: any) => [value, 'Holdings']}
            />
            <Bar 
              dataKey="holdings" 
              fill="#3b82f6"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Accounts List */}
      <div className="space-y-3 md:space-y-4">
        {accounts.map((account) => (
          <div
            key={account.id}
            className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-xl md:rounded-2xl border border-slate-700/50 overflow-hidden"
          >
            <div className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3 md:gap-4 flex-1">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center ${
                    account.type === 'asset' ? 'bg-blue-500/20' : 'bg-red-500/20'
                  }`}>
                    <Building2 className={`w-6 h-6 ${
                      account.type === 'asset' ? 'text-blue-400' : 'text-red-400'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        account.type === 'asset' ? 'bg-blue-500/20 text-blue-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        {account.institution}
                      </span>
                    </div>
                    <h4 className="text-white font-semibold text-base md:text-lg mb-1">{account.accountName}</h4>
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-slate-400">
                      {account.accountNumber && (
                        <div className="px-3 py-1 bg-slate-700/50 rounded-lg">
                          {account.accountNumber}
                        </div>
                      )}
                      <div>{account.date}</div>
                      {account.holdings > 0 && (
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-3 h-3" />
                          {account.holdings} holdings
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4 justify-between md:justify-end w-full md:w-auto">
                  <div className={`text-xl md:text-2xl font-bold ${
                    account.balance >= 0 ? 'text-white' : 'text-red-400'
                  }`}>
                    R {Math.abs(account.balance).toLocaleString('en-ZA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  {account.holdings > 0 && (
                    <button
                      onClick={() => setExpandedAccount(expandedAccount === account.id ? null : account.id)}
                      className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
                    >
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${
                        expandedAccount === account.id ? 'rotate-180' : ''
                      }`} />
                    </button>
                  )}
                </div>
              </div>
            </div>
            
            {/* Expanded Account Details */}
            {expandedAccount === account.id && account.holdings > 0 && individualHoldings[account.id] && (
              <div className="border-t border-slate-700/50 p-4 md:p-6 bg-slate-900/50">
                <div className="flex items-center gap-2 mb-4 md:mb-6">
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                  <h4 className="text-white font-semibold text-base md:text-lg">Individual Holdings</h4>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                  {individualHoldings[account.id].map((holding, idx) => (
                    <div 
                      key={idx}
                      className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-5 border border-slate-700/50 hover:border-slate-600/50 transition-all"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <span className={`px-3 py-1 rounded-lg text-xs font-bold text-white ${holding.badgeColor}`}>
                          {holding.ticker}
                        </span>
                      </div>
                      
                      <h5 className="text-white font-semibold mb-2 text-sm leading-tight">
                        {holding.name}
                      </h5>
                      
                      <div className="text-blue-400 text-xs mb-3">
                        {holding.date}
                      </div>
                      
                      <div className="text-white text-lg md:text-xl font-bold">
                        R {holding.value.toLocaleString('en-ZA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}