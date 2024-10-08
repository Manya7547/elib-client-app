import React from "react";
import Image from "next/image";
import BannerBg from "/Users/manyasohal/Documents/elib-client-app/public/banner.png";

const Banner = () => {
    return (
        <div className="mx-auto max-w-7xl py-10">
            <div className="relative">
                <Image
                    src={BannerBg}
                    alt="billboard"
                    className="h-72 w-full rounded-lg"
                    height={0}
                    width={0}
                    sizes="100vw"
                />
                <h3 className="absolute left-10 top-1/2 w-full max-w-3xl -translate-y-1/2 text-5xl font-semibold tracking-tight text-white">
                    Empowering Minds with Free Books and Articles!
                </h3>
            </div>
        </div>
    );
};

export default Banner;
