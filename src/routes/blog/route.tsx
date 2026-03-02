import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/blog')({
  component: RouteComponent,
})

function RouteComponent() {
  return <main className="w-full max-w-7xl mx-auto p-4 flex flex-col gap-10">
    <div className='flex items-center justify-between'>
    <h1 className="text-2xl font-bold">All Blogs</h1>
    <Link to="/blog/new" className='bg-black text-white px-4 py-2 rounded-md'>New Blog</Link>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center'>
      {Array.from({ length: 10}).map((item, idx) => (
        <div className='w-full h-full bg-gray-200 rounded-md p-4'>Blog {idx}</div>
      ))}
    </div>
  </main>
}
