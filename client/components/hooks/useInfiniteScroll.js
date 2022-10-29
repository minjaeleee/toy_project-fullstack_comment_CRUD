import { useState, useEffect, useRef, useCallback } from 'react'

const useInfiniteScroll = targetEl => {
  const observerRef = useRef(null)
  const [intersecting, setIntersecting] = useState(false)

  const getObserver = useCallback(() => {
    if (!observerRef.current) {
      // 예외처리) 최초 한 번만 실행, 나머지는 바로 return value. 
      observerRef.current = new IntersectionObserver(entries => setIntersecting(
        // 없으면 intersecting false, 있으면 intersecting true
        entries.some(entry => entry.isIntersecting)
      ))
    }

    return observerRef.current
  }, [observerRef.current])

  useEffect(() => {
    // new IntersectionObserver API 호출
    if (targetEl.current) getObserver().observe(targetEl.current)

    // new IntersectionObserver API 호출
    return () => {
      getObserver().disconnect()
    }
  }, [targetEl.current])

  return intersecting
}

export default useInfiniteScroll