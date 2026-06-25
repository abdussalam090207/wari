'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, Leaf } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      setScrolled(currentScrollY > 50)
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      
      lastScrollY.current = currentScrollY
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Katalog', href: '/catalog' },
    { name: 'Proses', href: '/process' },
    { name: 'Dampak', href: '/impact' },
    { name: 'Galeri', href: '/gallery' },
    { name: 'FAQ', href: '/faq' },
  ]

  return (
    <>
      {/* Floating Pill Navigation */}
      <div className={`fixed top-6 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none transition-transform duration-500 ease-in-out ${
        hidden ? '-translate-y-32' : 'translate-y-0'
      }`}>
        <nav 
          className={`pointer-events-auto transition-all duration-300 w-full max-w-5xl rounded-full px-6 md:px-8 ${
            scrolled 
              ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200 py-3' 
              : 'bg-white/10 backdrop-blur-md border border-white/20 py-4 shadow-lg'
          }`}
        >
          <div className="flex justify-between items-center h-12">
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="w-10 h-10 bg-gradient-to-br from-wari-green to-wari-gold rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className={`text-xl font-bold font-serif hidden sm:block ${
                  scrolled ? 'text-wari-dark' : 'text-white'
                }`}>
                  WARI
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors hover:text-wari-gold ${
                    scrolled ? 'text-gray-600' : 'text-white/90'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg ${
                  scrolled 
                    ? 'bg-wari-dark text-white hover:bg-wari-green' 
                    : 'bg-white text-wari-dark hover:bg-wari-gold'
                }`}
              >
                Hubungi Kami
              </Link>
            </div>

            <button
              className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(true)}
            >
              <Menu className={`w-6 h-6 ${scrolled ? 'text-wari-dark' : 'text-white'}`} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              className="fixed top-0 left-0 bottom-0 w-[280px] bg-white shadow-2xl z-50 flex flex-col overflow-y-auto"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            >
              <div className="p-6 flex justify-between items-center border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-wari-green to-wari-gold rounded-full flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xl font-bold font-serif text-wari-dark">WARI</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="flex-1 px-6 py-8 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block text-lg font-bold text-gray-600 hover:text-wari-green transition-colors py-3"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="p-6 border-t border-gray-100">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-wari-dark text-white px-6 py-4 rounded-xl font-bold text-center hover:bg-wari-green transition-all shadow-md"
                >
                  Hubungi Kami
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
