'use client'
import React, { useRef, useEffect, useState } from 'react'

const CanvasAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [stopped, setStopped] = useState(false)
  const size = useWindowSize()

  const r180 = Math.PI
  const r90 = Math.PI / 2
  const r15 = Math.PI / 12
  const color = '#88888825'
  const MIN_BRANCH = 30
  const len = 6
  const { random } = Math

  function initCanvas(canvas: HTMLCanvasElement, width = 400, height = 400, _dpi?: number) {
    const ctx = canvas.getContext('2d')!
    const dpr = window.devicePixelRatio || 1
    const bsr =
      (ctx as any).webkitBackingStorePixelRatio ||
      (ctx as any).mozBackingStorePixelRatio ||
      (ctx as any).msBackingStorePixelRatio ||
      (ctx as any).oBackingStorePixelRatio ||
      (ctx as any).backingStorePixelRatio ||
      1
    const dpi = _dpi || dpr / bsr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    canvas.width = dpi * width
    canvas.height = dpi * height
    ctx.scale(dpi, dpi)

    return { ctx, dpi }
  }

  function polar2cart(x = 0, y = 0, r = 0, theta = 0) {
    const dx = r * Math.cos(theta)
    const dy = r * Math.sin(theta)
    return [x + dx, y + dy]
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && canvasRef.current) {
      const canvas = canvasRef.current!
      const { ctx } = initCanvas(canvas, size.width, size.height)
      const { width, height } = canvas

      let steps: (() => void)[] = []
      let prevSteps: (() => void)[] = []

      const step = (
        x: number,
        y: number,
        rad: number,
        counter: { value: number } = { value: 0 }
      ): void => {
        const length = random() * len
        counter.value += 1

        const [nx, ny] = polar2cart(x, y, length, rad)

        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(nx, ny)
        ctx.stroke()

        const rad1 = rad + random() * r15
        const rad2 = rad - random() * r15

        if (nx < -100 || nx > size.width + 100 || ny < -100 || ny > size.height + 100) return

        const rate = counter.value <= MIN_BRANCH ? 0.8 : 0.5

        if (random() < rate) steps.push(() => step(nx, ny, rad1, counter))
        if (random() < rate) steps.push(() => step(nx, ny, rad2, counter))
      }

      let lastTime = performance.now()
      const interval = 1000 / 60

      const frame = () => {
        if (performance.now() - lastTime < interval) return

        prevSteps = steps
        steps = []
        lastTime = performance.now()

        if (!prevSteps.length) {
          setStopped(true)
          return
        }

        prevSteps.forEach((i) => {
          if (random() < 0.5) steps.push(i)
          else i()
        })
      }

      const randomMiddle = () => random() * 0.6 + 0.2

      const start = () => {
        ctx.clearRect(0, 0, width, height)
        ctx.lineWidth = 1
        ctx.strokeStyle = color
        prevSteps = []
        steps = [
          () => step(randomMiddle() * size.width, -5, r90),
          () => step(randomMiddle() * size.width, size.height + 5, -r90),
          () => step(0, randomMiddle() * size.height, 0),
          () => step(0, randomMiddle() * size.height, 0),
          () => step(size.width, randomMiddle() * size.height, r180),
          () => step(size.width, randomMiddle() * size.height, r180),
        ]
        if (size.width < 700) steps = steps.slice(0, 2)
        setStopped(false)
        requestAnimationFrame(() => {
          const animate = () => {
            frame()
            if (!stopped) requestAnimationFrame(animate)
          }
          animate()
        })
      }

      start()
    }
  }, [size.width])

  return (
    <div
      className={`
        pointer-events-none fixed bottom-0 left-0 right-0 top-0

        print:hidden
      `}
      style={{
        zIndex: -1,
        maskImage: 'radial-gradient(circle, transparent, black)',
        WebkitMaskImage: 'radial-gradient(circle, transparent, black)',
      }}
    >
      <canvas ref={canvasRef} width="400" height="400" />
    </div>
  )
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Update size when the component is mounted in the browser
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      // Initial size setup
      handleResize()

      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}

export default CanvasAnimation
