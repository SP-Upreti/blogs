import Footer from "../components/footer/footer";
import CommentModal from "../components/modals/comment.modal";
import Navbar from "../components/navbar/Navbar";

export default function Details() {
    return (
        <>
            <Navbar />
            <div className="flex max-w-7xl py-4 gap-4 mx-auto flex-col xl:flex-row  relative -z-10 ">

                <div className="xl:w-[70%] px-4">
                    <div className="mb-4 flex justify-between items-center flex-wrap gap-5">
                        <ul className='flex gap-2 sm:gap-5 items-center'>
                            <li className='h-8 w-8 sm:w-10 lg:w-14 lg:h-14 sm:h-10 rounded-full flex justify-center items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="" />
                            </li>
                            <li>
                                <h2 className='font-semibold capitalize sm:text-lg lg:text-xl'>Menuka Liver</h2>
                            </li>
                        </ul>
                        <div className=" sm:mt-0">
                            <ul className="flex items-center space-x-4">
                                <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                                    <a href="javascript:void()">
                                        <svg class="svg-icon w-6 h-6 text-blue-400" viewBox="0 0 20 20">
                                            <path fill="none" d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"></path>
                                        </svg>
                                    </a>
                                </li>

                                <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                                    <a href="javascript:void()">
                                        <svg class="svg-icon w-6 h-6 text-blue-700" viewBox="0 0 20 20">
                                            <path fill="none" d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
                                        </svg>
                                    </a>
                                </li>

                                <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                                    <a href="javascript:void()">
                                        <svg class="svg-icon w-6 h-6 text-blue-500" viewBox="0 0 20 20">
                                            <path fill="none" d="M10,2.531c-4.125,0-7.469,3.344-7.469,7.469c0,4.125,3.344,7.469,7.469,7.469c4.125,0,7.469-3.344,7.469-7.469C17.469,5.875,14.125,2.531,10,2.531 M10,3.776c1.48,0,2.84,0.519,3.908,1.384c-1.009,0.811-2.111,1.512-3.298,2.066C9.914,6.072,9.077,5.017,8.14,4.059C8.728,3.876,9.352,3.776,10,3.776 M6.903,4.606c0.962,0.93,1.82,1.969,2.53,3.112C7.707,8.364,5.849,8.734,3.902,8.75C4.264,6.976,5.382,5.481,6.903,4.606 M3.776,10c2.219,0,4.338-0.418,6.29-1.175c0.209,0.404,0.405,0.813,0.579,1.236c-2.147,0.805-3.953,2.294-5.177,4.195C4.421,13.143,3.776,11.648,3.776,10 M10,16.224c-1.337,0-2.572-0.426-3.586-1.143c1.079-1.748,2.709-3.119,4.659-3.853c0.483,1.488,0.755,3.071,0.784,4.714C11.271,16.125,10.646,16.224,10,16.224 M13.075,15.407c-0.072-1.577-0.342-3.103-0.806-4.542c0.673-0.154,1.369-0.243,2.087-0.243c0.621,0,1.22,0.085,1.807,0.203C15.902,12.791,14.728,14.465,13.075,15.407 M14.356,9.378c-0.868,0-1.708,0.116-2.515,0.313c-0.188-0.464-0.396-0.917-0.621-1.359c1.294-0.612,2.492-1.387,3.587-2.284c0.798,0.97,1.302,2.187,1.395,3.517C15.602,9.455,14.99,9.378,14.356,9.378"></path>
                                        </svg>
                                    </a>
                                </li>

                                <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                                    <a href="javascript:void()">
                                        <svg class="svg-icon w-6 h-6 text-red-600" viewBox="0 0 20 20">
                                            <path fill="none" d="M9.797,2.214C9.466,2.256,9.134,2.297,8.802,2.338C8.178,2.493,7.498,2.64,6.993,2.935C5.646,3.723,4.712,4.643,4.087,6.139C3.985,6.381,3.982,6.615,3.909,6.884c-0.48,1.744,0.37,3.548,1.402,4.173c0.198,0.119,0.649,0.332,0.815,0.049c0.092-0.156,0.071-0.364,0.128-0.546c0.037-0.12,0.154-0.347,0.127-0.496c-0.046-0.255-0.319-0.416-0.434-0.62C5.715,9.027,5.703,8.658,5.59,8.101c0.009-0.075,0.017-0.149,0.026-0.224C5.65,7.254,5.755,6.805,5.948,6.362c0.564-1.301,1.47-2.025,2.931-2.458c0.327-0.097,1.25-0.252,1.734-0.149c0.289,0.05,0.577,0.099,0.866,0.149c1.048,0.33,1.811,0.938,2.218,1.888c0.256,0.591,0.33,1.725,0.154,2.483c-0.085,0.36-0.072,0.667-0.179,0.993c-0.397,1.206-0.979,2.323-2.295,2.633c-0.868,0.205-1.519-0.324-1.733-0.869c-0.06-0.151-0.161-0.418-0.101-0.671c0.229-0.978,0.56-1.854,0.815-2.831c0.243-0.931-0.218-1.665-0.943-1.837C8.513,5.478,7.816,6.312,7.579,6.858C7.39,7.292,7.276,8.093,7.426,8.672c0.047,0.183,0.269,0.674,0.23,0.844c-0.174,0.755-0.372,1.568-0.587,2.31c-0.223,0.771-0.344,1.562-0.56,2.311c-0.1,0.342-0.096,0.709-0.179,1.066v0.521c-0.075,0.33-0.019,0.916,0.051,1.242c0.045,0.209-0.027,0.467,0.076,0.621c0.002,0.111,0.017,0.135,0.052,0.199c0.319-0.01,0.758-0.848,0.917-1.094c0.304-0.467,0.584-0.967,0.816-1.514c0.208-0.494,0.241-1.039,0.408-1.566c0.12-0.379,0.292-0.824,0.331-1.24h0.025c0.066,0.229,0.306,0.395,0.485,0.52c0.56,0.4,1.525,0.77,2.573,0.523c1.188-0.281,2.133-0.838,2.755-1.664c0.457-0.609,0.804-1.313,1.07-2.112c0.131-0.392,0.158-0.826,0.256-1.241c0.241-1.043-0.082-2.298-0.384-2.981C14.847,3.35,12.902,2.17,9.797,2.214"></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h2 className="font-semibold md:text-2xl">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Iure autem culpa inventore possimus minima fugiat?</h2>
                    <p className="md:text-lg mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quam repellat cupiditate quis fuga incidunt unde ullam! Aliquam explicabo fuga quam cum deleniti! Ratione deleniti officiis nihil nostrum sit in mollitia repellendus dolores rem harum sequi amet cum a corrupti, asperiores vero similique nulla unde recusandae laudantium? Exercitationem laboriosam eveniet ipsam est aut soluta. Nostrum illum deleniti numquam enim nisi amet minus odit libero nihil eveniet explicabo accusamus necessitatibus consequuntur, dolore totam, accusantium voluptatum cum sed, maiores a et qui fuga! Neque atque distinctio adipisci maxime hic necessitatibus delectus nostrum animi, cupiditate sequi temporibus quae sunt totam dolores laudantium accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic natus, unde distinctio suscipit molestias fuga repellendus eaque, porro tempore quisquam optio repudiandae. Excepturi, quae! Eos omnis maiores impedit, quasi adipisci dolorum doloremque sequi explicabo inventore dolor, nihil officiis fugiat. Ex animi voluptates reiciendis magnam. Explicabo voluptatibus suscipit temporibus perspiciatis aperiam ipsum nulla sequi repudiandae error blanditiis culpa eaque cupiditate veritatis assumenda reprehenderit molestiae fugit, corrupti rerum! Aut omnis facilis ad mollitia magni ratione nobis, fugiat vero voluptates est facere odit commodi et error animi officia fuga. Aut, sit quos unde doloremque perferendis iure nemo odio corrupti sunt. Unde, consequuntur veritatis.</p>
                    <div className="mt-3">
                        <img src="https://wallpapers.com/images/hd/travel-4k-volcano-ynlmn2hmts0n7gsw.jpg" alt="" className='' />
                    </div>
                </div>
                <div className="xl:w-[30%]  border p-4 mx-4 h-fit pb-4">
                    <div className="flex gap-5 justify-between items-center">
                        <h2 className="text-xl font-semibold">Recent Comments</h2>
                        {/* <button className="flex gap-1 items-center  font-semibold bg-blue-500 text-white px-2 pr-3 rounded-md py-1">
                            <svg fill="white" width="26" height="26" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9,17h6v6a1,1,0,0,0,2,0V17h6a1,1,0,0,0,0-2H17V9a1,1,0,0,0-2,0v6H9a1,1,0,0,0,0,2Z" />
                            </svg>
                            <span>
                                new
                            </span>
                        </button> */}
                    </div>
                    <div className=" mt-4">
                        <textarea name="" placeholder="type here" id="" rows={4} className="w-full h-full border p-2"></textarea>
                        <div className="flex justify-end gap-4 items-center">
                            {/* <button className="flex gap-2 items-center border p-1 px-2 capitalize rounded-md">
                                <span>cancel</span>
                            </button> */}
                            <button className="flex gap-2 items-center border p-1 px-4 rounded-md capitalize bg-blue-500 ">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="24" height="24" viewBox="0 0 33 32" enable-background="new 0 0 33 32" xml:space="preserve">
                                    <g>
                                        <path fill="white" d="M0.004,10.895c0.001,0.722,0.446,1.325,1.135,1.539l12.019,3.724c0.192,0.06,0.329,0.229,0.349,0.43
                                        l1.361,13.949c0.094,0.962,0.889,1.466,1.625,1.466c0.612,0,1.147-0.328,1.432-0.878L32.817,2.354
                                        c0.261-0.504,0.241-1.093-0.052-1.575c-0.032-0.053-0.082-0.089-0.12-0.138c-0.014-0.024-0.02-0.05-0.038-0.072
                                        c-0.025-0.03-0.057-0.048-0.086-0.071c-0.418-0.419-1.039-0.606-1.618-0.425L1.136,9.354C0.448,9.568,0.004,10.174,0.004,10.895z
                                        M17.035,30.665c-0.151,0.293-0.405,0.337-0.543,0.337c-0.276,0-0.592-0.176-0.629-0.563l-1.361-13.949
                                        c-0.012-0.124-0.048-0.241-0.089-0.355L31.986,1.725c-0.011,0.054-0.027,0.11-0.057,0.169L17.035,30.665z M1.434,10.309
                                        l29.768-9.281c0.024-0.008,0.048-0.007,0.072-0.011L13.781,15.359c-0.103-0.062-0.209-0.121-0.327-0.157L1.436,11.479
                                        C1.036,11.354,1.004,11,1.004,10.894C1.004,10.676,1.117,10.407,1.434,10.309z"/>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="pb-3 border-b">
                        <div className=" flex gap-4 items-center mt-4 mb-2">
                            <p className='h-5 w-5 sm:w-10 sm:h-10 rounded-full flex justify-center items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="" />
                            </p>
                            <h2 className="font-semibold text-lg">Samuel Karki</h2>
                            <p>2days ago</p>
                        </div>
                        <div className="">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, officiis! jshdvjh sdvcgh</p>
                        </div>
                        <div className="mt-4">
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
                        </div>
                    </div>
                    <div className="pb-3 border-b">
                        <div className=" flex gap-4 items-center mt-4 mb-2">
                            <p className='h-5 w-5 sm:w-10 sm:h-10 rounded-full flex justify-center items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="" />
                            </p>
                            <h2 className="font-semibold text-lg">Samuel Karki</h2>
                            <p>2days ago</p>
                        </div>
                        <div className="">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, officiis! jshdvjh sdvcgh</p>
                        </div>
                        <div className="mt-4">
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
                        </div>
                    </div>
                    <div className="pb-3 border-b">
                        <div className=" flex gap-4 items-center mt-4 mb-2">
                            <p className='h-5 w-5 sm:w-10 sm:h-10 rounded-full flex justify-center items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="" />
                            </p>
                            <h2 className="font-semibold text-lg">Samuel Karki</h2>
                            <p>2days ago</p>
                        </div>
                        <div className="">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, officiis! jshdvjh sdvcgh</p>
                        </div>
                        <div className="mt-4">
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
                        </div>
                    </div>
                    <div className="pb-3 border-b">
                        <div className=" flex gap-4 items-center mt-4 mb-2">
                            <p className='h-5 w-5 sm:w-10 sm:h-10 rounded-full flex justify-center items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="" />
                            </p>
                            <h2 className="font-semibold text-lg">Samuel Karki</h2>
                            <p>2days ago</p>
                        </div>
                        <div className="">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, officiis! jshdvjh sdvcgh</p>
                        </div>
                        <div className="mt-4">
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
                        </div>
                    </div>
                </div>
                {/* <CommentModal /> */}
            </div>
            <Footer />
        </>
    )
}
