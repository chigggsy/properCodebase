import gsap from 'gsap'

const animateTitle = () => {
  gsap.from('h1', 1, { opacity: 0, y: 40, scale: 2 }, 0)
}

export default animateTitle
