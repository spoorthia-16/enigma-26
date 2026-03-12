import ParallaxBackground from './ParallaxBackground';

const Hero = ({ children, skyContent }) => {
  return (
    <ParallaxBackground showTitleBlock={true} skyContent={skyContent}>
      {children}
    </ParallaxBackground>
  );
};

export default Hero;