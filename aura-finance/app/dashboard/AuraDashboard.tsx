import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, ArrowDownLeft, Plus, PieChart, ShieldCheck } from 'lucide-react';

const AuraDashboard = () => {

  const stats = [
    { id: 1, label: 'Total Balance', amount: '$12,450.00', change: '+2.5%', icon: Wallet, color: 'text-blue-500' },
    { id: 2, label: 'Monthly Spend', amount: '$3,210.80', change: '-12%', icon: ArrowDownLeft, color: 'text-rose-500' },
    { id: 3, label: 'Savings Goal', amount: '$8,000.00', change: '85%', icon: TrendingUp, color: 'text-emerald-500' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-slate-100 p-6 font-sans">
      {/* Header */}
      <nav className="flex justify-between items-center mb-10 max-w-7xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            AuraFinance
          </h1>
          <p className="text-slate-500 text-sm">AI-Driven Wealth Intelligence</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-slate-800/50 hover:bg-slate-700 p-2 rounded-full border border-slate-700 transition-all">
            <ShieldCheck size={20} className="text-emerald-400" />
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-all">
            <Plus size={18} /> Add Transaction
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stats Cards */}
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-indigo-500/50 transition-colors group relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl bg-slate-800/80 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-md ${stat.change.includes('+') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                {stat.change}
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
            <h2 className="text-3xl font-bold tabular-nums">{stat.amount}</h2>
            {/* Background Glow Deco */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-indigo-500/5 blur-[50px] group-hover:bg-indigo-500/10 transition-all" />
          </motion.div>
        ))}

        {/* AI Insights Section (Middle Column) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:col-span-2 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-3xl p-8 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <PieChart className="text-indigo-400" size={20} /> AI Spending Forecast
            </h3>
            <p className="text-slate-400 mb-6">Based on your last 90 days, you are on track to save <span className="text-emerald-400 font-bold">$450 more</span> this month.</p>
            {/* Simple Visual Placeholder for Chart */}
            <div className="h-48 flex items-end gap-2 px-4">
              {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: i * 0.05 }}
                  className="flex-1 bg-gradient-to-t from-indigo-600 to-cyan-400 rounded-t-sm opacity-80 hover:opacity-100 cursor-pointer"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Recent Transactions (Right Column) */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6">
          <h3 className="font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {['Starbucks', 'Netflix', 'Apple Store', 'Rent Payment'].map((item, i) => {
              const amounts = [4.50, 15.99, 299.99, 1200.00];
              return (
              <div key={i} className="flex justify-between items-center p-3 hover:bg-slate-800/40 rounded-xl transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item}</p>
                    <p className="text-xs text-slate-500">Today, 2:45 PM</p>
                  </div>
                </div>
                <p className="text-sm font-bold">-${amounts[i].toFixed(2)}</p>
              </div>
            );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuraDashboard;
