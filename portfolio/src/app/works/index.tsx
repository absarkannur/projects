'use client'
import { use, useEffect, useState } from 'react'
import Link from 'next/link'
import Wrapper from '@/components/wrapper'
import Project from '@/components/project'

import projectData from '@/projects.json';

// Styles
import './style.css';

export default function Work() {

    return (
        <Wrapper>
			<section className="banner">
				<div className="box">
					<h1 className="animate__animated animate__fadeInUp header text-gray-400">Absar</h1>
					<h1 className="animate__animated animate__fadeInUp header text-black">Full Stack Developer</h1>
				</div>
			</section>

			<section className="current">
				<div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row w-full">
					<div className="animate__animated animate__delay-1s animate__fadeInUp basis-full sm:basis-full md:basis-1/2 lg:basis-1/2 xl:basis-1/2 sm:mb-5">
						<h3 className="font-sans font-[600] uppercase text-gray-400 h-10 leading-10">Current</h3>
						<p className="font-sans">Freelance Web Developer at</p>
						<p className="font-sans underline"><Link target='_blank' href="https://growthninjas.agency/">Growth Ninjas</Link></p>
					</div>
					<div className="animate__animated animate__delay-1s animate__fadeInUp basis-full sm:basis-full md:basis-1/2 lg:basis-1/2 xl:basis-1/2 sm:mb-5">
						<h3 className="font-sans font-[600] uppercase text-gray-400 h-10 leading-10">Past</h3>
						<p className="font-sans">Full Stack Developer at</p>
						<p className="font-sans underline"><Link target='_blank' href="https://digitalventure.com/">Digital Venture FZ LLC</Link></p>
					</div>
				</div>
			</section>

			<section className="projects">

				<div className="header">
					<h1 className="animate__animated animate__fadeInUp">Featured Projects.</h1>
				</div>

				{
					projectData.map(( item, i ) => <Project key={i} data={ item } /> )
				}

			</section>

		</Wrapper>
    )
}
