import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import LogoS from '../../../assets/images/mLogo.png'; 
import './index.scss';

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {

    const timeline = gsap.timeline();

    timeline.to(bgRef.current, {
      duration: 1,
      opacity: 1, // Fades in the container background
    });

    timeline.from(outlineLogoRef.current, {
      duration: 5, 
      ease: 'power2.inOut', 
    });

    timeline.to(
      solidLogoRef.current,
      {
        opacity: 1,  // Fades in the solid logo without rotating
        duration: 2,
        ease: 'power1.inOut', 
      },
      '-=2'  // Overlap the last 2 seconds of the previous animation
    );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript, Developer"
        style={{ opacity: 0 }} 
      />

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="m2930 4560c-344-16-623-85-915-228-231-114-406-241-600-436..."
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
