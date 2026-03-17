import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Timeline from '../components/Timeline';
import WhatIDo from '../components/WhatIDo';

export default function Home() {
    return (
        <>
            <Hero />
            <Marquee />
            <About />
            <Timeline />
            <WhatIDo />
        </>
    );
}
