import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Logo from './Logo'

export default function Header() {
  return (
    <header className="bg-green-900 text-primary-foreground py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/about" className="hover:text-green-100 transition-colors">About</Link></li>
            <li><Link href="/features" className="hover:text-green-100 transition-colors">Features</Link></li>
            <li><Link href="/pricing" className="hover:text-green-100 transition-colors">Pricing</Link></li>
            <li><Link href="/login"><Button variant="outline" className="bg-white text-green-900 hover:bg-green-100">Login</Button></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

