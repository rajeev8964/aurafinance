'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wallet, ArrowDownLeft, Plus, PieChart, ShieldCheck, Target, Calendar, CreditCard, DollarSign, Activity } from 'lucide-react';

const AuraDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [animatedValues, setAnimatedValues] = useState({
    balance: 0,
    spend: 0,
    savings: 0
  });

  const stats = [
    { id: 1, label: 'Total Balance', amount: 12450.00, change: '+2.5%', icon: Wallet, color: 'text-blue-500', bgColor: 'from-blue-500/10 to-cyan-500/10' },
    { id: 2, label: 'Monthly Spend', amount: 3210.80, change: '-12%', icon: ArrowDownLeft, color: 'text-rose-500', bgColor: 'from-rose-500/10 to-pink-500/10' },
    { id: 3, label: 'Savings Goal', amount: 8000.00, change: '85%', icon: Target, color: 'text-emerald-500', bgColor: 'from-emerald-500/10 to-teal-500/10' },
  ];

  const recentTransactions = [
    { id: 1, name: 'Starbucks', amount: -4.50, category: 'Food & Drink', time: 'Today, 2:45 PM', icon: '☕' },
    { id: 2, name: 'Netflix', amount: -15.99, category: 'Entertainment', time: 'Yesterday, 8:00 AM', icon: '🎬' },
    { id: 3, name: 'Apple Store', amount: -299.99, category: 'Shopping', time: '2 days ago', icon: '📱' },
    { id: 4, name: 'Rent Payment', amount: -1200.00, category: 'Housing', time: '5 days ago', icon: '🏠' },
    { id: 5, name: 'Salary Deposit', amount: 3500.00, category: 'Income', time: '1 week ago', icon: '💰' },
  ];

  const spendingCategories = [
    { name: 'Food & Drink', amount: 450.50, percentage: 35, color: 'bg-blue-500' },
    { name: 'Transportation', amount: 280.00, percentage: 22, color: 'bg-green-500' },
    { name: 'Entertainment', amount: 180.00, percentage: 14, color: 'bg-purple-500' },
    { name: 'Shopping', amount: 320.00, percentage: 25, color: 'bg-orange-500' },
    { name: 'Other', amount: 50.00, percentage: 4, color: 'bg-gray-500' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        balance: 12450.00,
        spend: 3210.80,
        savings: 8000.00
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 p-6 font-sans">
      {/* Header */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center mb-10 max-w-7xl mx-auto"
      >
        <div>
          <motion.h1
            className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            AuraFinance
          </motion.h1>
          <p className="text-slate-500 text-sm">AI-Driven Wealth Intelligence</p>
        </div>
        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-slate-800/50 hover:bg-slate-700 p-3 rounded-full border border-slate-700 transition-all hover:border-indigo-500/50"
          >
            <ShieldCheck size={20} className="text-emerald-400" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
          >
            <Plus size={18} /> Add Transaction
          </motion.button>
        </div>
      </motion.nav>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stats Cards */}
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className={`relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-indigo-500/50 transition-all group overflow-hidden shadow-xl`}
          >
            <div className="flex justify-between items-start mb-4">
              <motion.div
                className={`p-3 rounded-xl bg-gradient-to-r ${stat.bgColor} ${stat.color} border border-slate-700/50`}
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon size={24} />
              </motion.div>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.1, type: "spring" }}
                className={`text-xs font-bold px-3 py-1 rounded-full ${
                  stat.change.includes('+')
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                }`}
              >
                {stat.change}
              </motion.span>
            </div>
            <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
            <motion.h2
              className="text-3xl font-bold tabular-nums"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + idx * 0.1 }}
            >
              {formatCurrency(animatedValues[stat.label.toLowerCase().replace(' ', '')] || 0)}
            </motion.h2>
            {/* Background Glow Deco */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-indigo-500/5 blur-[50px] group-hover:bg-indigo-500/10 transition-all" />
          </motion.div>
        ))}

        {/* AI Insights Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="lg:col-span-2 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-3xl p-8 relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="p-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl"
                >
                  <PieChart className="text-indigo-400" size={24} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold">AI Spending Forecast</h3>
                  <p className="text-slate-400 text-sm">Based on your last 90 days</p>
                </div>
              </div>
              <div className="flex gap-2">
                {['7d', '30d', '90d'].map((period) => (
                  <motion.button
                    key={period}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedPeriod(period)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                      selectedPeriod === period
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    {period}
                  </motion.button>
                ))}
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-slate-300 mb-6 text-lg"
            >
              You are on track to save <span className="text-emerald-400 font-bold">$450 more</span> this month.
            </motion.p>

            {/* Enhanced Visual Chart */}
            <div className="h-48 flex items-end gap-2 px-4 mb-6">
              {[40, 70, 45, 90, 65, 80, 50, 75, 55, 85, 60, 95].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{
                    duration: 1,
                    delay: i * 0.05,
                    ease: "easeOut"
                  }}
                  className="flex-1 bg-gradient-to-t from-indigo-600 to-cyan-400 rounded-t-sm opacity-80 hover:opacity-100 cursor-pointer relative group"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + i * 0.05 }}
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    ${h * 10}
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Spending Categories */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {spendingCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                  </div>
                  <p className="text-xs text-slate-400 mb-1">{category.name}</p>
                  <p className="text-sm font-semibold">{formatCurrency(category.amount)}</p>
                  <div className="w-full bg-slate-700 rounded-full h-1 mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${category.percentage}%` }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
                      className={`h-1 ${category.color} rounded-full`}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Recent Transactions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-3xl p-6 shadow-2xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Activity className="text-indigo-400" size={20} />
              Recent Activity
            </h3>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
            >
              View All
            </motion.button>
          </div>
          <div className="space-y-4">
            <AnimatePresence>
              {recentTransactions.map((transaction, i) => (
                <motion.div
                  key={transaction.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                  className="flex justify-between items-center p-3 hover:bg-slate-800/40 rounded-xl transition-all cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform text-lg"
                    >
                      {transaction.icon}
                    </motion.div>
                    <div>
                      <p className="text-sm font-medium">{transaction.name}</p>
                      <p className="text-xs text-slate-500">{transaction.category} • {transaction.time}</p>
                    </div>
                  </div>
                  <motion.p
                    className={`text-sm font-bold ${
                      transaction.amount > 0 ? 'text-emerald-400' : 'text-slate-300'
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + i * 0.1, type: "spring" }}
                  >
                    {transaction.amount > 0 ? '+' : ''}{formatCurrency(transaction.amount)}
                  </motion.p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-10 max-w-7xl mx-auto"
      >
        <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 border border-slate-700 rounded-2xl p-6 shadow-xl">
          <h3 className="text-lg font-semibold mb-4 text-center">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: CreditCard, label: 'Link Account', color: 'from-blue-500 to-cyan-500' },
              { icon: Target, label: 'Set Budget', color: 'from-purple-500 to-pink-500' },
              { icon: Calendar, label: 'Schedule Report', color: 'from-emerald-500 to-teal-500' },
              { icon: DollarSign, label: 'Transfer Money', color: 'from-orange-500 to-red-500' }
            ].map((action, index) => (
              <motion.button
                key={action.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-800/50 hover:bg-slate-700 p-4 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all group"
              >
                <action.icon className={`w-6 h-6 mx-auto mb-2 bg-gradient-to-r ${action.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform`} />
                <p className="text-sm font-medium text-center">{action.label}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuraDashboard;
