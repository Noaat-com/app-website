'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AppPreview({ locale }) {
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
					<h3 className='text-lg md:text-xl md:text-center text-base-content/80'>
						{locale.h3}
					</h3>
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
				<div className='flex flex-wrap justify-center gap-4 w-full md:w-10/12 mx-auto'>
					{[1, 2, 3, 4, 5].map((num) => (
						<Image
							key={num}
							src={`/image/${num}.png`}
							alt={`Noaat App Preview ${num}`}
							width={220}
							height={400}
							className='rounded-lg shadow-md object-cover'
						/>
					))}
				</div>
			</motion.div>
		</section>
	);
}
