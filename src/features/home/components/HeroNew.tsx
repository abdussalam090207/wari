'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import Link from 'next/link'
import { ArrowDown, ArrowRight } from 'lucide-react'
import MagneticButton from '@/lib/animations/MagneticButton'
import { staggerContainer } from '@/lib/animations/variants'

/* ─── Floating Wayang Silhouette SVG ─── */
function WayangSilhouette({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="30" rx="18" ry="22" />
      <path d="M42 50 C42 50 35 90 38 120 L50 120 L48 80 L60 95 L72 80 L70 120 L82 120 C85 90 78 50 78 50 Z" />
      <rect x="48" y="120" width="6" height="60" rx="3" />
      <rect x="66" y="120" width="6" height="60" rx="3" />
      <line x1="25" y1="60" x2="5" y2="100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="95" y1="60" x2="115" y2="100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

/* ─── Floating Particles ─── */
function FloatingParticles() {
  const [particles, setParticles] = useState<{id: number, x: number, y: number, size: number, duration: number, delay: number}[]>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 5,
      }))
    )
  }, [])

  if (particles.length === 0) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-wari-gold/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

/* ─── Mouse Parallax Hook ─── */
function useMouseParallax(strength = 0.02) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    mouseX.set((clientX - centerX) * strength)
    mouseY.set((clientY - centerY) * strength)
  }

  return { springX, springY, handleMouseMove }
}

/* ─── Text Stagger Reveal ─── */
const letterVariants = {
  hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.03,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function StaggerText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          custom={i}
          variants={letterVariants}
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : undefined }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

/* ─── HERO SECTION ─── */
export default function HeroNew() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -80])

  const { springX, springY, handleMouseMove } = useMouseParallax(0.015)

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[110vh] flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#0a1a08] via-[#142e0d] to-[#0d2108]"
        style={{ y: bgY }}
      />

      {/* Radial Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-wari-green/20 rounded-full blur-[200px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-wari-gold/10 rounded-full blur-[150px]" />
      </div>

      {/* Floating Wayang Silhouettes with Mouse Parallax */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ x: springX, y: springY }}>
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        >
          <WayangSilhouette className="absolute top-[15%] left-[8%] w-20 h-32 text-wari-gold/10 rotate-[-10deg]" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 25, 0], rotate: [0, -4, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          <WayangSilhouette className="absolute top-[20%] right-[10%] w-24 h-40 text-wari-gold/8 rotate-[8deg]" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        >
          <WayangSilhouette className="absolute bottom-[25%] left-[15%] w-16 h-28 text-wari-gold/6 rotate-[-5deg]" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 35, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <WayangSilhouette className="absolute bottom-[30%] right-[12%] w-14 h-24 text-wari-gold/5 rotate-[12deg]" />
        </motion.div>
      </motion.div>

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32"
        style={{ opacity: textOpacity, y: textY }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-10"
          >
            <div className="inline-flex items-center gap-3 bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] rounded-full px-6 py-2.5">
              <span className="w-2 h-2 rounded-full bg-wari-gold animate-pulse" />
              <span className="text-white/70 text-sm font-medium tracking-[0.2em] uppercase">
                Wirausaha Sosial Eko-Kultural
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-serif leading-[1.1] tracking-tight"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <StaggerText text="Mengubah Limbah Plastik" className="block" />
            <span className="block mt-2">
              <StaggerText text="Menjadi Warisan Budaya" className="" />
              <br className="hidden sm:block" />
              <StaggerText text=" Indonesia" className="text-transparent bg-clip-text bg-gradient-to-r from-wari-gold via-[#f0d060] to-wari-gold" />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-white/60 mb-14 max-w-2xl mx-auto font-light leading-relaxed"
          >
            WARI mengubah limbah botol plastik menjadi Wayang Kulit buatan tangan —
            melestarikan budaya Indonesia dan mengurangi sampah lingkungan.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton>
              <Link
                href="/process"
                className="group inline-flex items-center gap-3 bg-white text-wari-dark px-8 py-4 rounded-full font-bold text-base hover:bg-wari-gold hover:text-wari-dark transition-all duration-300 shadow-[0_0_60px_rgba(255,255,255,0.1)] hover:shadow-[0_0_80px_rgba(212,175,55,0.3)]"
              >
                Jelajahi Misi Kami
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/impact"
                className="inline-flex items-center gap-3 bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/[0.12] transition-all duration-300"
              >
                Lihat Dampak
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-white/30 text-xs tracking-[0.3em] uppercase">Gulir</span>
        <motion.div
          className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5"
        >
          <motion.div
            className="w-1.5 h-1.5 bg-wari-gold rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
