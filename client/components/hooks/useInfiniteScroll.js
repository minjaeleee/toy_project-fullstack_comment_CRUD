const { useState, useEffect } = require("react")

const useInfiniteScroll = targetEl => {
  const observerRef = useRef(null)
  const [intersecting, setIntersecting] = useState(false)

  const getObserver = useCallback(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(entries => setIntersecting(
        entries.some(entry => entry.isIntersecting)
      ))
    }
    return observerRef.current
  }, [observerRef.current])

  useEffect(() => {
    if (targetEl.current) observer.observer(targetEl.current)
    return () => {
      observer.disconnect()
    }, [targetEl.current]
  })

  return intersecting
}

export default useInfiniteScroll