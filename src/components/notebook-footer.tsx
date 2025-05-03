export default function NotebookFooter() {
  return (
    <footer className="py-6 border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Write On Notebook. All rights reserved.</p>
      </div>
    </footer>
  );
}