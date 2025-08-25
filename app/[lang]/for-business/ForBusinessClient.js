'use client';
import { motion } from 'framer-motion';
import Pricing from '@/components/home/pricing';

export default function ForBusinessClient({ dict, langName }) {
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

            {/* About Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 100, damping: 10 }}
                className="mb-16"
            >
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-8">{dict.about.title}</h2>
                        <p className="text-xl text-base-content/80 max-w-4xl mx-auto mb-8">{dict.about.subtitle}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <span className="text-3xl">🎯</span>
                                {dict.about.mission.title}
                            </h3>
                            <p className="text-base-content/80">{dict.about.mission.description}</p>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <span className="text-3xl">🔮</span>
                                {dict.about.vision.title}
                            </h3>
                            <p className="text-base-content/80">{dict.about.vision.description}</p>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-center mb-8">{dict.about.services.title}</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {dict.about.services.items.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + (index * 0.1), type: 'spring' }}
                                    className="bg-base-200/30 p-6 rounded-2xl text-center"
                                >
                                    <div className="text-3xl mb-3">{service.icon}</div>
                                    <h4 className="font-bold mb-2">{service.title}</h4>
                                    <p className="text-sm text-base-content/70">{service.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl p-8 mb-16 text-white">
                        <h3 className="text-2xl font-bold text-center mb-8">{dict.about.stats.title}</h3>
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            {dict.about.stats.items.map((stat, index) => (
                                <div key={index}>
                                    <div className="text-3xl font-bold mb-2">{stat.number}</div>
                                    <p className="text-purple-100">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Packages Section */}
            <Pricing locale={dict.packages} langName={langName} />

            {/* Contact CTA */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 100, damping: 10 }}
                className="text-center"
            >
                <div className='bg-base-200/30 rounded-2xl p-8 max-w-4xl mx-auto'>
                    <h2 className='text-2xl font-bold mb-4'>{dict.contact.title}</h2>
                    <p className='text-base-content/70 mb-6'>{dict.contact.description}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className='bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all'>
                            {dict.contact.cta}
                        </button>
                        <button className='bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all'>
                            {dict.contact.demo}
                        </button>
                    </div>
                </div>
            </motion.section>
        </main>
    );
}
