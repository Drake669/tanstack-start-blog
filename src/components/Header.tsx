import { Link } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--line) bg-(--header-bg) px-4 backdrop-blur-lg">
      <nav className='h-[70px] flex items-center justify-between'>
        <Link to="/">
          <h2 className="m-0 shrink-0 text-base font-semibold tracking-tight">
            <span className="sr-only">Home</span>
            <span>Logo</span>
          </h2>
        </Link>
        <div className='flex items-center gap-2'>
        <Link to="/blog" activeProps={{ className: 'border-b-2 border-black' }}>Blogs</Link>
        <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
