import "./src/styles/tailwind.css"
export const onClientEntry = async () => {
    // IntersectionObserver polyfill for gatsby-image (Safari, IE)
    if (typeof window.IntersectionObserver === `undefined`) {
      await import(`intersection-observer`)
    }
  }