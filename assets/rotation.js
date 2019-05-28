import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
import TWEEN from '@tweenjs/tween.js'

function roll(index, count, span) {
	let num = { value: 0 }

	function animate(time) {
		TWEEN.update(time)
		requestAnimationFrame(animate)
	}
	requestAnimationFrame(animate)

	const tween = new TWEEN.Tween(num)
	tween.to({ value: count }, 1500)
	tween.easing(TWEEN.Easing.Quadratic.Out)
	tween.onUpdate(function () {
		if (Math.round(num.value) > 500) {
			span.textContent = format(Math.round(num.value))
		}
		else {
			span.textContent = Math.round(num.value)
		}
	})
	tween.start()
}

function format(n) {
	let [a, b] = ('' + n).split('.')
	a = a.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	return b ? `${a}.${b}` : a
}

function getDataNumeber(slide) {
	const span = slide.querySelector('span')
	span.textContent = span.dataset.number
	let count = span.dataset.number
	roll(this.activeIndex, count, span)
}

class CreateSwiper {
	create() {
		var o = new Swiper('.swiper-container', {
			autoplay: {
				stopOnLastSlide: false,
				disableOnInteraction: false,
			},
			loop: true,
			on: {
				slideChange() {
					getDataNumeber.call(this, this.slides[this.activeIndex])
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
		return o
	}
}

export { CreateSwiper }
