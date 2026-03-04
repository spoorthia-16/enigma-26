import ParallaxBackground from './ParallaxBackground';

const Hero = ({ children }) => {
  return (
    <ParallaxBackground showTitleBlock={true}>
      {children}
    </ParallaxBackground>
  );
};

export default Hero;