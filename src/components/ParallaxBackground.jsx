import React, { useEffect, useState } from 'react';

const ParallaxBackground = ({ children, showTitleBlock = false }) => {
    const [scrollY, setScrollY] = useState(0);
    const [chickenSequence, setChickenSequence] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // Chicken Sequence Timer (cycles 0 -> 1 -> 2 -> 3)
        const interval = setInterval(() => {
            setChickenSequence((prev) => (prev + 1) % 4);
        }, 5000); // 5 seconds per sequence stage

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <section className="mc-hero-scroll-wrapper">
                <div className="mc-hero-viewport">

                    {/* Sky Stage */}
                    <img
                        src="/head/Sky_Sun.png"
                        className="layer layer-sky"
                        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
                        alt="Sky layer"
                    />
                    <img
                        src="/head/Clouds.png"
                        className="layer layer-clouds"
                        style={{ transform: `translateY(${scrollY * -0.3}px)` }}
                        alt="Clouds layer"
                    />

                    {/* Hero Text in the Sky */}
                    {showTitleBlock && (
                        <div
                            className="layer layer-text"
                            style={{ transform: `translateY(${scrollY * -0.6}px)` }}
                        >
                            <p className="club-text">THE MALNAD TECHNICAL CLUB PRESENTS</p>
                            <h1 className="mc-title">
                                ENIGMA '26<span className="cursor"></span>
                            </h1>
                            <p className="slogan">UNLEASH THE MYSTERY OF TECHNOLOGY</p>
                        </div>
                    )}

                    {/* Surface Stage */}
                    <div
                        className="layer surface-group"
                        style={{ transform: `translateY(${scrollY * -0.9}px)` }}
                    >
                        <img src="/head/BG_Near.png" className="layer-image" alt="Surface" />

                        <div className="anim-pig"></div>
                        <div className="anim-chicken"></div>
                        <div className="anim-bee"></div>

                        {/* Chicken Sequence Wrapper */}
                        <div className={`chicken-wrapper seq-${chickenSequence}`}>
                            {chickenSequence === 0 && <div className="anim-chicken-idle-front"></div>}
                            {chickenSequence === 1 && <div className="anim-chicken-turn-rfl"></div>}
                            {chickenSequence === 2 && <div className="anim-chicken-idle-front"></div>}
                            {chickenSequence === 3 && <div className="anim-chicken-turn-flr"></div>}
                        </div>
                    </div>

                    <div
                        className="layer surface-focus"
                        style={{ transform: `translateY(${scrollY * -0.95}px)` }}
                    >
                        <img src="/head/Focus_Cherry.png" className="layer-image" alt="Focus Cherry" />
                        <div className="anim-petals anim-petals-back"></div>
                        <div className="anim-petals anim-petals-front"></div>
                    </div>

                    {/* Underground Stage */}
                    <div
                        className="layer underground-group"
                        style={{ transform: `translateY(${scrollY * -1.0}px)` }}
                    >
                        <img src="/head/Foreground.png" className="layer-image" alt="Underground" />
                        <div className="anim-bat"></div>
                    </div>

                    {/* Bottom Fade */}
                    <div className="layer fade-bottom"></div>

                </div>
            </section>

            {children && (
                <div className="content-overlay">
                    {children}
                </div>
            )}
        </>
    );
};

export default ParallaxBackground;
