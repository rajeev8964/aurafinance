'use client';

import { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Shield, Zap, Star, Menu, X } from 'lucide-react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);
  const lastMenuItemRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    firstMenuItemRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }

      if (event.key !== 'Tab') return;

      const focusableElements = [
        firstMenuItemRef.current,
        lastMenuItemRef.current,
      ].filter(Boolean) as HTMLElement[];

      if (focusableElements.length !== 2) return;

      const firstEl = focusableElements[0];
      const lastEl = focusableElements[1];
      const active = document.activeElement;

      if (!event.shiftKey && active === lastEl) {
        event.preventDefault();
        firstEl.focus();
      }

      if (event.shiftKey && (active === firstEl || active === mobileMenuRef.current)) {
        event.preventDefault();
        lastEl.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const features = [
    {
      icon: BarChart3,
      title: 'Expense Tracking',
      description: 'Automate expense tracking with machine learning algorithms.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Predictive Insights',
      description: 'Get predictive savings insights using advanced ML.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Secure Integration',
      description: 'Secure financial data integration via Plaid API.',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      content: 'AuraFinance transformed how I manage my business finances. The AI insights are incredible!',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Freelancer',
      content: 'Finally, a finance app that understands freelancers. Saved me hours every month.',
      rating: 5
    },
    {
      name: 'Emma Davis',
      role: 'Financial Advisor',
      content: 'The predictive analytics are spot-on. My clients love the insights they provide.',
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AuraFinance
              </h1>
            </motion.div>
            <button
              className="md:hidden p-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  Pricing
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/security" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  Security
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/auth/login" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  Login
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/auth/signup" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl">
                  Sign Up
                </Link>
              </motion.div>
            </nav>
          </div>
          {menuOpen && (
            <div className="md:hidden">
              <div
                className="fixed inset-0 bg-black/40 z-40"
                onClick={closeMenu}
                aria-hidden="true"
              />
              <div className="relative z-50 px-4 pb-4">
                <nav
                  ref={mobileMenuRef}
                  className="space-y-2 bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-gray-200 shadow-xl"
                  aria-label="Mobile navigation"
                >
                  <Link
                    href="/pricing"
                    ref={firstMenuItemRef}
                    onClick={closeMenu}
                    className="block text-gray-700 hover:text-blue-600 font-semibold"
                  >Pricing</Link>
                  <Link
                    href="/security"
                    onClick={closeMenu}
                    className="block text-gray-700 hover:text-blue-600 font-semibold"
                  >Security</Link>
                  <Link
                    href="/auth/login"
                    onClick={closeMenu}
                    className="block text-gray-700 hover:text-blue-600 font-semibold"
                  >Login</Link>
                  <Link
                    href="/auth/signup"
                    ref={lastMenuItemRef}
                    onClick={closeMenu}
                    className="block text-center text-white bg-gradient-to-r from-blue-600 to-purple-600 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700"
                  >Sign Up</Link>
                </nav>
              </div>
            </div>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center py-20"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6"
          >
            AI-Driven Wealth Manager
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed"
          >
            Democratise financial literacy through intelligent automation. Transform complex financial data into actionable insights that empower users to take control of their financial future.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/auth/signup" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-xl hover:shadow-2xl flex items-center gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/pricing" className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:border-blue-300 transition-all shadow-lg hover:shadow-xl">
                View Pricing
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Powerful Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6`}
                >
                  <feature.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            What Our Users Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, _index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: _index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Finances?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of users who have taken control of their financial future.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/auth/signup" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                Start Your Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
