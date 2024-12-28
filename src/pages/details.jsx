import Footer from "../components/footer/footer";
import CommentModal from "../components/modals/comment.modal";
import Navbar from "../components/navbar/Navbar";
import BlogDetail from "../components/posts/blogDetail";

export default function Details() {
    return (
        <>
            <Navbar />
            <div className="flex max-w-7xl py-4 gap-4 mx-auto flex-col xl:flex-row  relative -z-10 ">
                <div className="xl:w-[70%]">
                    <BlogDetail />
                </div>
                <div className="xl:w-[30%] ">
                    <CommentModal />
                </div>
            </div>
            <Footer />
        </>
    )
}
