import { useState, useEffect } from "react"

interface Dimensions {
  width: number
  height: number
}

const useWindowDimensions = (): Dimensions => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = (): void => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return dimensions
}

export {
  useWindowDimensions
}
