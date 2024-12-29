import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";

export default function Profile() {
    return (
        <>
            <Navbar />
            <div className="max-w-6xl mx-auto ">
                <div className="px-3 py-6">

                    <div className="flex flex-col gap-1 text-center">
                        <a
                            className="block mx-auto bg-center bg-no-repeat bg-cover w-20 h-20 lg:h-28 lg:w-28 rounded-full border border-gray-400 shadow-lg"
                            href=""
                            style={{
                                backgroundImage: "url('https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg')",
                            }}
                        ></a>
                        <p className="mt-2 font-semibold lg:text-2xl">Marina Davinchi</p>
                        <span className=" text-gray-400 text-lg">New York, NY - Los Angeles, CA</span>
                        <span className=" text-gray-400">https://www.youtube.com/watch?v=dQw4w9WgXcQ</span>
                    </div>

                    <div className="flex justify-center items-center gap-2 my-3">
                        <div className="font-semibold text-center mx-4">
                            <p className="text-black">102</p>
                            <span className="text-gray-400">Posts</span>
                        </div>
                        <div className="font-semibold text-center mx-4">
                            <p className="text-black">102</p>
                            <span className="text-gray-400">Followers</span>
                        </div>
                        <div className="font-semibold text-center mx-4">
                            <p className="text-black">102</p>
                            <span className="text-gray-400">Following</span>
                        </div>
                    </div>

                    <div className="flex justify-center gap-2 my-5">
                        <button className="bg-blue-500 px-10 py-2 rounded-full text-white shadow-lg">Follow</button>
                        <button className="bg-white border border-gray-500 px-10 py-2 rounded-full shadow-lg">Message</button>
                    </div>

                    <div className="flex justify-between items-center">
                        <button className="w-full py-2 border-b-2 border-yellow-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                />
                            </svg>
                        </button>
                        <button className="w-full py-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="grid grid-cols-3 xl:grid-cols-4 gap-2 my-3 ">
                        {[
                            "https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg",
                            "https://images.pexels.com/photos/247287/pexels-photo-247287.jpeg",
                            "https://images.pexels.com/photos/6169/woman-hand-girl-professional.jpg",
                            "https://images.pexels.com/photos/3851790/pexels-photo-3851790.jpeg",
                            "https://images.pexels.com/photos/3852159/pexels-photo-3852159.jpeg",
                            "https://images.pexels.com/photos/4491173/pexels-photo-4491173.jpeg",
                            "https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg",
                            "https://images.pexels.com/photos/6019812/pexels-photo-6019812.jpeg",
                            "https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg",
                        ].map((url, index) => (
                            <a
                                key={index}
                                className="block bg-center bg-no-repeat bg-cover h-40 xl:h-52 w-full rounded-lg"
                                href=""
                                style={{ backgroundImage: `url('${url}')` }}
                            ></a>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
