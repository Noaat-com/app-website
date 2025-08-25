'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { i18n } from '@/lib/i18n';
import { getDictionary } from '@/lib/i18n';

export default function HowCashbackWorks({ params: { lang } }) {
    const [dict, setDict] = useState(null);

    useEffect(() => {
        const fetchDictionary = async () => {
            const d = await getDictionary(lang);
            setDict(d.HowCashbackWorksPage);
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
                    <h2 className='text-3xl font-bold mb-4'>{dict.h2_how_to_earn}</h2>
                    <ul className='list-disc list-inside space-y-2'>
                        <li>{dict.step1}</li>
                        <li>{dict.step2}</li>
                        <li>{dict.step3}</li>
                        <li>{dict.step4}</li>
                    </ul>
                </div>

                <div className='p-8 border border-base-content/10 rounded-2xl'>
                    <h2 className='text-3xl font-bold mb-4'>{dict.h2_your_wallet}</h2>
                    <p>{dict.wallet_desc}</p>
                </div>

                <div className='p-8 border border-base-content/10 rounded-2xl'>
                    <h2 className='text-3xl font-bold mb-4'>{dict.h2_why_better}</h2>
                    <ul className='list-disc list-inside space-y-2'>
                        <li>{dict.benefit1}</li>
                        <li>{dict.benefit2}</li>
                        <li>{dict.benefit3}</li>
                    </ul>
                </div>

            </motion.div>
        </main>
    );
}
