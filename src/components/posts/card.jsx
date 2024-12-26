import { Link } from "react-router-dom";

export default function Card() {
    return (
        <Link to={'/details'}>
            <div className='py-6 border-b pr-5 w-full hover:bg-slate-100 '>
                <ul className='flex gap-4 items-center'>
                    <li className='bg-slate-200/70 px-2 rounded-full py-[1px]'>lifestyle</li>
                    <li>●</li>
                    <li>5min ago</li>
                </ul>
                <div className="mt-4 grid lg:grid-cols-4 gap-5">
                    <div className="lg:col-span-3 ">
                        <h2 className='text-lg xl:text-xl font-semibold'>Lorem ipsum dolor sit amet con sectetur adipisicing elit. Verita tis, similique ?</h2>
                        <p className='text-sm xl:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sunt itaque, assumenda officiis, reprehenderit officia hic doloribus fugiat unde nemo voluptates! Nesciunt sunt fugit animi hic est, qui assumenda excepturi, veritatis ratione incidunt omnis eos ab. Labore vero voluptate, quae ullam obcaecati distinctio pariatur nesciunt! Enim labore magni laboriosam provident.</p>
                    </div>
                    <div className="aspect-square h-32 w-full overflow-hidden bg-black">
                        <img src="https://wallpapers.com/images/hd/travel-4k-volcano-ynlmn2hmts0n7gsw.jpg" alt="" className='' />
                    </div>
                </div>
                <div className="flex justify-between gap-5 items-center mt-8 flex-wrap">
                    <ul className='flex gap-2 sm:gap-5 items-center'>
                        <li className='h-8 w-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center'>
                            <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="" />
                        </li>
                        <li><h2 className='font-semibold capitalize sm:text-lg'>Ram Bahadur</h2></li>
                    </ul>
                    <ul className='flex gap-5 items-center'>
                        <li className=' flex justify-center items-center gap-2'>
                            <span>
                                <svg width="24" height="24" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                                    <title>comment-1</title>
                                    <desc>Created with Sketch Beta.</desc>
                                    <defs>
                                    </defs>
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketch:type="MSPage">
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
                        </li>
                        <li className=' flex justify-center items-center gap-2'>                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.4382 2.77841C12.2931 2.73181 12.1345 2.74311 11.9998 2.80804C11.8523 2.87913 11.7548 3.0032 11.7197 3.13821L11.244 4.97206C11.0777 5.61339 10.8354 6.23198 10.5235 6.81599C10.0392 7.72267 9.30632 8.42 8.62647 9.00585L7.18773 10.2456C6.96475 10.4378 6.8474 10.7258 6.87282 11.0198L7.68498 20.4125C7.72601 20.887 8.12244 21.25 8.59635 21.25H13.245C16.3813 21.25 19.0238 19.0677 19.5306 16.1371L20.2361 12.0574C20.3332 11.4959 19.9014 10.9842 19.3348 10.9842H14.1537C13.1766 10.9842 12.4344 10.1076 12.5921 9.14471L13.2548 5.10015C13.3456 4.54613 13.3197 3.97923 13.1787 3.43584C13.1072 3.16009 12.8896 2.92342 12.5832 2.82498L12.4382 2.77841L12.6676 2.06435L12.4382 2.77841ZM11.3486 1.45674C11.8312 1.2242 12.3873 1.18654 12.897 1.35029L13.042 1.39686L12.8126 2.11092L13.042 1.39686C13.819 1.64648 14.4252 2.26719 14.6307 3.0592C14.8241 3.80477 14.8596 4.58256 14.7351 5.34268L14.0724 9.38724C14.0639 9.439 14.1038 9.4842 14.1537 9.4842H19.3348C20.8341 9.4842 21.9695 10.8365 21.7142 12.313L21.0087 16.3928C20.3708 20.081 17.0712 22.75 13.245 22.75H8.59635C7.3427 22.75 6.29852 21.7902 6.19056 20.5417L5.3784 11.149C5.31149 10.3753 5.62022 9.61631 6.20855 9.10933L7.64729 7.86954C8.3025 7.30492 8.85404 6.75767 9.20042 6.10924C9.45699 5.62892 9.65573 5.12107 9.79208 4.59542L10.2678 2.76157C10.417 2.18627 10.8166 1.71309 11.3486 1.45674ZM2.96767 9.4849C3.36893 9.46758 3.71261 9.76945 3.74721 10.1696L4.71881 21.4061C4.78122 22.1279 4.21268 22.75 3.48671 22.75C2.80289 22.75 2.25 22.1953 2.25 21.5127V10.2342C2.25 9.83256 2.5664 9.50221 2.96767 9.4849Z" fill="#1C274C" />
                            </svg>
                        </span>
                            <span>
                                1k
                            </span>
                        </li>
                        <li className=' flex justify-center items-center gap-2'>
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76001 19.5199C9.34001 19.2899 8.65999 19.2899 8.23999 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.39999 5.87988 5.10999 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7 12H11" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 14V10" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span>
                                723
                            </span>
                        </li>
                    </ul>
                    <ul className=''>
                        <li className=' flex justify-end items-end gap-2'>
                            <span><svg width="24" height="24" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M39 71.87V170M96 22v148m57-53.087V170" /></svg>
                            </span>
                            <span>
                                4k
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </Link>
    )
}
