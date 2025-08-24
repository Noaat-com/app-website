'use client';
import { motion } from 'framer-motion';

export default function HowItWorks({ locale }) {
	return (
		<section className='relative py-10 md:py-20'>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.5,
				}}
			>
				<div className='relative z-10 flex flex-col gap-5 items-start md:items-center mb-10 mx-auto'>
					<h2 className='font-bold text-3xl md:text-5xl bg-gradient-to-r from-base-content from-50% to-[#9c9c9c] md:text-center bg-clip-text text-transparent !leading-[1.25em]'>
						{locale.h2}
					</h2>
				</div>
			</motion.div>

			<div className='relative z-10 w-full md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5'>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.5,
						delay: 0.1,
					}}
				>
					<div className='card bg-base-200/50'>
						<div className='card-body items-center text-center'>
							<div className='w-24 h-24 bg-base-300 rounded-full mb-4'></div>
							<h3 className='card-title'>{locale.step1_title}</h3>
							<p>{locale.step1_desc}</p>
						</div>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.5,
						delay: 0.2,
					}}
				>
					<div className='card bg-base-200/50'>
						<div className='card-body items-center text-center'>
							<div className='w-24 h-24 bg-base-300 rounded-full mb-4'></div>
							<h3 className='card-title'>{locale.step2_title}</h3>
							<p>{locale.step2_desc}</p>
						</div>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.5,
						delay: 0.3,
					}}
				>
					<div className='card bg-base-200/50'>
						<div className='card-body items-center text-center'>
							<div className='w-24 h-24 bg-base-300 rounded-full mb-4'></div>
							<h3 className='card-title'>{locale.step3_title}</h3>
							<p>{locale.step3_desc}</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}