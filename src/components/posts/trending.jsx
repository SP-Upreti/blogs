import React from 'react'

export default function Trending() {
    return (
        <div className='  border w-full'>
            <div className="p-2">
                <h2 className='flex  gap-2 items-center bg-slate-200/80 px-3 py-1 w-fit font-semibold rounded-md'>
                    <span>
                        <svg
                            width="24"
                            height="24"
                            viewBox="-33 0 255 255"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            preserveAspectRatio="xMidYMid"
                        >
                            <defs>
                                <linearGradient
                                    id="linear-gradient-1"
                                    gradientUnits="userSpaceOnUse"
                                    x1="94.141"
                                    y1="255"
                                    x2="94.141"
                                    y2="0.188"
                                >
                                    <stop offset="0" stopColor="#ff4c0d" />
                                    <stop offset="1" stopColor="#fc9502" />
                                </linearGradient>
                                <style>
                                    {`
                                        .cls-3 {
                                            fill: url(#linear-gradient-1);
                                        }
                                        .cls-4 {
                                            fill: #fc9502;
                                        }
                                        .cls-5 {
                                            fill: #fce202;
                                        }
                                        `}
                                </style>
                            </defs>
                            <g id="fire">
                                <path
                                    d="M187.899,164.809 C185.803,214.868 144.574,254.812 94.000,254.812 C42.085,254.812 -0.000,211.312 -0.000,160.812 C-0.000,154.062 -0.121,140.572 10.000,117.812 C16.057,104.191 19.856,95.634 22.000,87.812 C23.178,83.513 25.469,76.683 32.000,87.812 C35.851,94.374 36.000,103.812 36.000,103.812 C36.000,103.812 50.328,92.817 60.000,71.812 C74.179,41.019 62.866,22.612 59.000,9.812 C57.662,5.384 56.822,-2.574 66.000,0.812 C75.352,4.263 100.076,21.570 113.000,39.812 C131.445,65.847 138.000,90.812 138.000,90.812 C138.000,90.812 143.906,83.482 146.000,75.812 C148.365,67.151 148.400,58.573 155.999,67.813 C163.226,76.600 173.959,93.113 180.000,108.812 C190.969,137.321 187.899,164.809 187.899,164.809 Z"
                                    className="cls-3"
                                    fillRule="evenodd"
                                />
                                <path
                                    d="M94.000,254.812 C58.101,254.812 29.000,225.711 29.000,189.812 C29.000,168.151 37.729,155.000 55.896,137.166 C67.528,125.747 78.415,111.722 83.042,102.172 C83.953,100.292 86.026,90.495 94.019,101.966 C98.212,107.982 104.785,118.681 109.000,127.812 C116.266,143.555 118.000,158.812 118.000,158.812 C118.000,158.812 125.121,154.616 130.000,143.812 C131.573,140.330 134.753,127.148 143.643,140.328 C150.166,150.000 159.127,167.390 159.000,189.812 C159.000,225.711 129.898,254.812 94.000,254.812 Z"
                                    className="cls-4"
                                    fill="#fce202"
                                    fillRule="evenodd"
                                />
                                <path
                                    d="M95.000,183.812 C104.250,183.812 104.250,200.941 116.000,223.812 C123.824,239.041 112.121,254.812 95.000,254.812 C77.879,254.812 69.000,240.933 69.000,223.812 C69.000,206.692 85.750,183.812 95.000,183.812 Z"
                                    className="cls-5"
                                    fillRule="evenodd"
                                />
                            </g>
                        </svg>
                    </span>
                    <span>Trending</span>
                </h2>
            </div>

            <div className="flex flex-col ">
                <Card />
                <Announcement />
                <Card />
                <Card />
            </div>
        </div>
    )
}

function Card() {
    return (
        <div className='px-2 border-b py-4'>
            <ul className='flex gap-4 items-center text-[#757474ce]'>
                <li className=''>lifestyle</li>
                <li>●</li>
                <li>trending</li>
            </ul>
            <div className="mt-1">
                <h2 className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, facere.</h2>
            </div>
            <div className="flex justify-between items-center gap-4 flex-wrap">
                <div className="mt-3 flex gap-2 items-center">
                    <h2 className='font-semibold'>Post By</h2>
                    <div className="h-7 w-7 rounded-full overflow-hidden flex justify-center items-center">
                        <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" alt="" />
                    </div>
                    <h3 className='font-semibold'>PK Sheeran</h3>
                </div>
                <div className="flex gap-2 items-center">
                    <span>
                        <svg width="24" height="24" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                            <title>comment-1</title>
                            <desc>Created with Sketch Beta.</desc>
                            <defs>
                            </defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                                <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-100.000000, -255.000000)" fill="#000000">
                                    <path d="M116,281 C114.832,281 113.704,280.864 112.62,280.633 L107.912,283.463 L107.975,278.824 C104.366,276.654 102,273.066 102,269 C102,262.373 108.268,257 116,257 C123.732,257 130,262.373 130,269 C130,275.628 123.732,281 116,281 L116,281 Z M116,255 C107.164,255 100,261.269 100,269 C100,273.419 102.345,277.354 106,279.919 L106,287 L113.009,282.747 C113.979,282.907 114.977,283 116,283 C124.836,283 132,276.732 132,269 C132,261.269 124.836,255 116,255 L116,255 Z" id="comment-1" sketch:type="MSShapeGroup">
                                    </path>
                                </g>
                            </g>
                        </svg>
                    </span>
                    <span>
                        1.2k
                    </span>
                </div>
            </div>
        </div>
    )
}

function Announcement() {
    return (
        <div className="text-white h-[120px] bg-purple-500 flex flex-col justify-center p-4 items-center">
            <div className="flex text-center">
                <div className="w-[70%] text-lg">
                    <span className='text-xl font-semibold text-center '> 50% </span>discount on this chritmas
                    <div className="bg-white w-fit text-purple-500 font-semibold text-base  px-2 py-1 rounded-md mx-auto mt-3">
                        <button className='capitalize'>claim now</button>
                    </div>
                </div>
                <div className="w-28">
                    <img src="https://png.pngtree.com/png-clipart/20240830/original/pngtree-in-hand-latest-model-mobile-phone-png-image_15884437.png" alt="" className='w-28' />
                </div>
            </div>

        </div>
    )
}