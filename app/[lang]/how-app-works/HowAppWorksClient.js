'use client';
import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

export default function HowAppWorksClient({ dict, langName }) {
    return (
        <main className={`container mx-auto px-5 py-10 ${langName === 'ar' ? 'rtl' : 'ltr'}`} dir={langName === 'ar' ? 'rtl' : 'ltr'}>
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
                className="text-center mb-16"
            >
                <h1 className='font-bold text-4xl md:text-6xl mb-6'>{dict.title}</h1>
                <p className='w-full md:w-10/12 mx-auto text-lg md:text-xl text-base-content/80 mb-10'>{dict.subtitle}</p>
            </motion.div>

            {/* Why Noaat Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 100, damping: 10 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-center mb-12">{dict.whyNoaat.title}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {dict.whyNoaat.features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + (index * 0.1), type: 'spring' }}
                            className="bg-base-200/30 p-6 rounded-2xl text-center"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-base-content/70">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* How Cashback Works Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-center mb-12">{dict.howCashback.title}</h2>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-2xl">
                            <h3 className="text-xl font-bold mb-4">{dict.howCashback.howToEarn.title}</h3>
                            <ol className="space-y-3">
                                {dict.howCashback.howToEarn.steps.map((step, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">{index + 1}</span>
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-8 rounded-2xl">
                            <h3 className="text-xl font-bold mb-4">{dict.howCashback.benefits.title}</h3>
                            <ul className="space-y-3">
                                {dict.howCashback.benefits.list.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-green-500 text-lg">✓</span>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="bg-base-200/50 p-6 rounded-2xl text-center">
                        <h4 className="text-lg font-bold mb-2">{dict.howCashback.wallet.title}</h4>
                        <p className="text-base-content/70">{dict.howCashback.wallet.description}</p>
                    </div>
                </div>
            </motion.section>

            {/* Coupons & Offers Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 100, damping: 10 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-center mb-12">{dict.coupons.title}</h2>
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4">{dict.coupons.howToUse.title}</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {dict.coupons.howToUse.steps.map((step, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">{index + 1}</span>
                                    <div>
                                        <h4 className="font-semibold mb-1">{step.title}</h4>
                                        <p className="text-sm text-base-content/70">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {dict.coupons.types.map((type, index) => (
                            <div key={index} className="bg-base-200/30 p-6 rounded-2xl text-center">
                                <div className="text-3xl mb-3">{type.icon}</div>
                                <h4 className="font-bold mb-2">{type.title}</h4>
                                <p className="text-sm text-base-content/70">{type.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* App Download CTA */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 100, damping: 10 }}
                className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl p-8 text-white text-center"
            >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{dict.download.title}</h3>
                <p className="text-lg mb-8 text-purple-100">{dict.download.description}</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="https://apps.apple.com/eg/app/noaat/id6651818110"
                        className="btn btn-lg bg-white text-purple-600 hover:bg-gray-100 border-none rounded-full"
                    >
                        <FaApple className="text-xl" />
                        {dict.download.appStore}
                    </a>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.noaat.app"
                        className="btn btn-lg bg-white text-purple-600 hover:bg-gray-100 border-none rounded-full"
                    >
                        <FaGooglePlay className="text-xl" />
                        {dict.download.playStore}
                    </a>
                </div>

                <div className="mt-6 flex justify-center gap-8 text-sm text-purple-100">
                    <span>✓ {dict.download.features.free}</span>
                    <span>✓ {dict.download.features.realCashback}</span>
                    <span>✓ {dict.download.features.arabic}</span>
                </div>
            </motion.section>
        </main>
    );
}
