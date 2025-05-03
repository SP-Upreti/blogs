import { Badge } from './ui/badge';

export default function NotebookHeader() {
  return (
    <div className=" space-y-2 px-4">
      <div className="flex gap-2 ">
        <Badge className='text-4xl'>Write On</Badge>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800"> Notebook</h1>
      </div>
      <p className="text-lg text-gray-600 mt-4 max-w-2xl ">
        Write On Notebook Is Very Simple
      </p>
    </div>
  );
}