const reveal = () => {

  const ratio = 0.1
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }

  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if(entry.intersectionRatio > ratio) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }

  const observer = new IntersectionObserver(handleIntersect, options)
  observer.observe(document.querySelector('.card'))
}

export {reveal};
