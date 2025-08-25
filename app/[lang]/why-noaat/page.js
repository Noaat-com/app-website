'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { i18n } from '@/lib/i18n';
import { getDictionary } from '@/lib/i18n';

export default function WhyNoaat({ params: { lang } }) {
    const [dict, setDict] = useState(null);

    useEffect(() => {
        const fetchDictionary = async () => {
            const d = await getDictionary(lang);
            setDict(d.WhyNoaatPage);
        };
        fetchDictionary();
    }, [lang]);

    if (!dict) {
        return null; // Or a loading spinner
    }

    return (
        <main className='container mx-auto px-5 py-10'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
            >
                <h1 className='font-bold text-4xl md:text-6xl text-center mb-5'>{dict.h1}</h1>
                <p className='w-full md:w-10/12 mx-auto text-lg md:text-xl text-base-content/80 md:text-center mb-10'>{dict.intro}</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                className='flex flex-col gap-y-8'
            >
                <div className='p-8 border border-base-content/10 rounded-2xl'>
                    <h2 className='text-3xl font-bold mb-4'>{dict.h2_one_app}</h2>
                    <p>{dict.one_app_desc}</p>
                </div>

                <div className='p-8 border border-base-content/10 rounded-2xl'>
                    <h2 className='text-3xl font-bold mb-4'>{dict.h2_designed_for_egypt}</h2>
                    <p>{dict.designed_for_egypt_desc}</p>
                </div>

                <div className='p-8 border border-base-content/10 rounded-2xl'>
                    <h2 className='text-3xl font-bold mb-4'>{dict.h2_honest_savings}</h2>
                    <p>{dict.honest_savings_desc}</p>
                </div>

            </motion.div>
        </main>
    );
}
