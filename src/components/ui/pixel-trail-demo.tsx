import React from 'react';
import { PixelTrail } from './pixel-trail';
import { useScreenSize } from '../hooks/use-screen-size';

const PixelTrailDemo: React.FC = () => {
    const screenSize = useScreenSize();

    return (
        <PixelTrail
            pixelSize={screenSize.lessThan('md') ? 48 : 80}
            fadeDuration={0}
            delay={1200}
            pixelClassName="rounded-full bg-[#4A5D4F]"
            className="z-0"
        />
    );
};

export { PixelTrailDemo };
