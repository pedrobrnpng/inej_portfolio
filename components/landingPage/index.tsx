import utilStyles from './landingPage.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import getWindowDimensions from '../../utils/windowUtils';


export default function LandingPage() {

  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const { width, height } = getWindowDimensions();
    setWidth(width);
    setHeight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();
      setWidth(width);
      setHeight(height);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`${utilStyles.test}`} style={{ height: height }}>
      <div className={`${utilStyles.ParallaxVideo}`}>
        {width <= 1150 ?
          <Image
            className={`${utilStyles.test}`}
            alt="Background"
            src="/images/background_.jpg"
            layout="fill"
            objectFit="cover"
            quality={100} />
          :
          <video
            className={`${utilStyles.video}`}
            autoPlay
            muted
            loop
            id='background'
          >
            <source src="/images/background.webm" type="video/webm" />
          </video>
        }
      </div>
      <div className={`${utilStyles.content} ${utilStyles.videoText}`}>
        <h1 className={`${utilStyles.videoText}`}>INÊS PINHEIRO</h1>
        <h2 className={`${utilStyles.videoText2}`}>Animation and Illustration</h2>
      </div>
      <div>
        <a href="#projects" className={`${utilStyles.scrollDown}`}></a>
      </div>
    </div>
  )
}
