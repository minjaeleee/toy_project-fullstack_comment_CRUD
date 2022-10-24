import { useState, useEffect, useRef, useCallback } from 'react'

const useInfiniteScroll = targetEl => {
  const observerRef = useRef(null)
  const [intersecting, setIntersecting] = useState(false)
  console.log("intersecting", intersecting)

  const getObserver = useCallback(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(entries => setIntersecting(
        // 없으면 intersecting false, 있으면 intersecting true
        entries.some(entry => entry.isIntersecting)
      ))
    }

    return observerRef.current
  }, [observerRef.current])

  useEffect(() => {
    if (targetEl.current) getObserver().observe(targetEl.current)
    return () => {
      getObserver().disconnect()
    }
  }, [targetEl.current])

  return intersecting
}

export default useInfiniteScroll