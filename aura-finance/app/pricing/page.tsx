'use client';

import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';

export default function Pricing() {
    const plans = [
        {
            name: 'Free',
            price: '$0',
            period: '/month',
            description: 'Basic expense tracking',
            features: [
                'Basic transaction tracking',
                'Manual expense entry',
                'Monthly reports',
                'Email support'
            ],
            buttonText: 'Get Started',
            buttonStyle: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
            icon: Check,
            color: 'from-gray-500 to-gray-600'
        },
        {
            name: 'Premium',
            price: '$9.99',
            period: '/month',
            description: 'AI-powered insights',
            features: [
                'Everything in Free',
                'AI expense categorization',
                'Predictive savings insights',
                'Budget monitoring',
                'Priority support',
                'Advanced analytics'
            ],
            buttonText: 'Start Free Trial',
            buttonStyle: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700',
            icon: Zap,
            color: 'from-blue-500 to-purple-500',
            popular: true
        },
        {
            name: 'Enterprise',
            price: '$29.99',
            period: '/month',
            description: 'Advanced analytics',
            features: [
                'Everything in Premium',
                'Advanced reporting',
                'Custom integrations',
                'Team collaboration',
                'Dedicated support',
                'White-label options'
            ],
            buttonText: 'Contact Sales',
            buttonStyle: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700',
            icon: Crown,
            color: 'from-emerald-500 to-teal-500'
        }
    ];

    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants: any = {
        hidden: { opacity: 0, y: 50 },
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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent sm:text-6xl">
                        Pricing Plans
                    </h1>
                    <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                        Choose the plan that fits your financial goals. Start free and upgrade as you grow.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {plans.map((plan, _index) => (
                        <motion.div
                            key={plan.name}
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                            className={`relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 ${plan.popular ? 'ring-2 ring-blue-500 shadow-blue-500/25' : ''
                                }`}
                        >
                            {plan.popular && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                                >
                                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                                        <Star className="w-4 h-4" />
                                        Most Popular
                                    </div>
                                </motion.div>
                            )}

                            <div className="text-center">
                                <motion.div
                                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} text-white mb-6`}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <plan.icon className="w-8 h-8" />
                                </motion.div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-gray-600 mb-6">{plan.description}</p>

                                <div className="mb-8">
                                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                                    <span className="text-lg text-gray-500">{plan.period}</span>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${plan.buttonStyle} shadow-lg hover:shadow-xl`}
                                >
                                    {plan.buttonText}
                                </motion.button>
                            </div>

                            <ul className="mt-8 space-y-4">
                                {plan.features.map((feature, featureIndex) => (
                                    <motion.li
                                        key={featureIndex}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.8 + featureIndex * 0.1 }}
                                        className="flex items-center"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.2 }}
                                            className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3"
                                        >
                                            <Check className="w-3 h-3 text-white" />
                                        </motion.div>
                                        <span className="text-gray-700">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-600 mb-4">Need a custom solution?</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                        Contact Our Team
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}