
const  writing = () => {

    const title = document.getElementById('autotext')
    const text = 'Developpeur Full-stack Ruby on Rails  '

    let index = 0

    const randspeed = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min)
    }

    const play = () => {
      title.innerHTML = text.slice(0, index)

      index ++;

      if (index > text.length) {
        index = 0
      }

      clearInterval(timer);
      timer = setInterval(play, randspeed(150, 300))
    }

    let timer = setInterval(play, 150);
}


export {writing};
