import { useEffect, useRef } from "react"
import propTypes from "prop-types"
import { Link } from "react-router-dom";

export default function ConfirmLogout({ onCancel }) {
    const divRef = useRef(null);

    useEffect(
        () => {
            const handleClick = (e) => {
                if (!divRef.current.contains(e.target));
                onCancel()
            }
            document.addEventListener("click", handleClick);

            return () => {
                document.removeEventListener("click", handleClick)
            }
        }
    )
    return (
        <div ref={divRef} className="fixed z-[999] top-0 right-0 h-dvh w-dvw bg-black/50 flex justify-center items-center">
            <div className="w-full  sm:w-60 p-6 px-4 bg-white rounded-md">
                <h2 className="text-2xl font-semibold">Confirm Logout ?</h2>
                <div className="mt-4 flex gap-2 items-center">
                    <button className="px-4 text-lg border py-1 rounded-md font-semibold border-slate-400" title="click here to close box" onClick={onCancel}>cancel</button>
                    <Link to={'/auth'}>
                        <button className="px-4 text-lg border py-1 rounded-md font-semibold bg-red-500 text-white" title="click here to logout" >logout</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

ConfirmLogout.propTypes = {
    onCancel: propTypes.func.isRequired,
}