import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
import TWEEN from '@tweenjs/tween.js'

import {formatNumber} from './utils'

function roll (index, count, span) {
  let num = {value: 0}

  function animate (time) {
    TWEEN.update(time)
    requestAnimationFrame(animate)
  }

  requestAnimationFrame(animate)

  const tween = new TWEEN.Tween(num)
  tween.to({value: count}, 1500)
  tween.easing(TWEEN.Easing.Quadratic.Out)
  tween.onUpdate(function () {
    if (Math.round(num.value) > 500) {
      span.textContent = formatNumber(Math.round(num.value))
    } else {
      span.textContent = Math.round(num.value)
    }
  })
  tween.start()
}

export default class Slider {
  constructor (el) {
    this.el = el

    this.swiper = new Swiper(el, {
      autoplay: {
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      loop: true,
      on: {
        slideChange () {
          const slide = this.slides[this.activeIndex]
          const span = slide.querySelector('span')
          span.textContent = span.dataset.number
          let count = span.dataset.number
          roll(this.activeIndex, count, span)
        },
      },
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        bulletElement: 'li',
        bulletClass: 'pagination',
        bulletActiveClass: 'paginationActive',
      },
    })
  }
}
