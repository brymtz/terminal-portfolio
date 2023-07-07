import React from "react";

type BannerProps ={
    banner: string;
};

const Banner = (props: BannerProps) => (
    <div className="banner">{ props.banner }</div>
);

export default Banner;