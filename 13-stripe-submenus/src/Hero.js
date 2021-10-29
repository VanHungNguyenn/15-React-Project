import React from 'react'
import { useGlobalContext } from './context'
import phoneImg from './images/phone.svg'

const Hero = () => {
	const { closeSubmenu } = useGlobalContext()

	return (
		<section className='hero' onMouseOver={closeSubmenu}>
			<div className='hero-center'>
				<article className='hero-info'>
					<h1>Payments infrastructure for the internet</h1>
					<p>
						Millions of businesses of all sizes, from startups to
						Fortune 500 companies, use Stripe's software and APIs to
						accept payments, make transfers, and manage their online
						businesses.
					</p>
					<button className='btn'>Start now</button>
				</article>
				<article className='hero-images'>
					<img src={phoneImg} className='phone-img' alt='phone' />
				</article>
			</div>
		</section>
	)
}

export default Hero
