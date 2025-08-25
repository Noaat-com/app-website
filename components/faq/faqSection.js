'use client';
import { useState } from 'react';

function FAQItem({ question, answer, isOpen, onToggle }) {
	return (
		<div className='bg-base-200/30 rounded-xl border border-base-content/10 overflow-hidden'>
			<button
				className='w-full px-6 py-4 text-left flex items-center justify-between hover:bg-base-200/50 transition-colors'
				onClick={onToggle}
			>
				<h3 className='font-semibold text-base-content pr-4'>{question}</h3>
				<svg
					className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
				>
					<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
				</svg>
			</button>
			{isOpen && (
				<div className='px-6 pb-4 text-base-content/70'>
					<p>{answer}</p>
				</div>
			)}
		</div>
	);
}

export default function FAQSection({ items, title }) {
	const [openItems, setOpenItems] = useState({});

	const toggleItem = (index) => {
		setOpenItems(prev => ({
			...prev,
			[index]: !prev[index]
		}));
	};

	return (
		<div className='mb-16'>
			<h2 className='text-3xl font-bold mb-8 text-center'>
				{title}
			</h2>
			<div className='space-y-4'>
				{items.map((item, index) => (
					<FAQItem
						key={index}
						question={item.question}
						answer={item.answer}
						isOpen={openItems[index] || false}
						onToggle={() => toggleItem(index)}
					/>
				))}
			</div>
		</div>
	);
}