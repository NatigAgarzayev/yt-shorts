import data from "./data"

export const videos = () => {
    const slider = document.querySelector('.swiper-wrapper')
    let prevSlideNum = 1
    let videoQueue = data.length


    slider.innerHTML = `
        <div class="swiper-slide" data-id=${data[0].id}>
            <video class="video" loop src="./videos/${data[0].id}.mp4"></video>
        </div>
    `
    slider.children[0].children[0].setAttribute("autoplay", "")

    for(let i = 1; i < videoQueue; i++){
        slider.innerHTML += `
            <div class="swiper-slide" data-id=${data[i].id}>
            </div>
        `
    }
    

    slider.addEventListener("transitionend", () => {
        const activeSlide = document.querySelector('.swiper-slide-active')
        const dataId = activeSlide.getAttribute('data-id')
        if(dataId == prevSlideNum) return
        prevSlideNum = dataId
        activeSlide.innerHTML = `
            <div class="swiper-slide" data-id=${dataId}>
                <video class="video" autoplay loop src="./videos/${dataId}.mp4"></video>
            </div>
        `
        if(dataId == 1){
            activeSlide.nextElementSibling.innerHTML = ""
        }
        if(dataId > 1){
            activeSlide.previousElementSibling.innerHTML = ""
            activeSlide.nextElementSibling.innerHTML = ""
        }
        if(dataId == videoQueue){
            activeSlide.previousElementSibling.innerHTML = ""
        }
    })

    const pBtn = document.querySelector('.custom-prev'),
            nBtn = document.querySelector('.custom-next')

    pBtn.addEventListener('click', () => {
        pBtn.style.pointerEvents = "none"

        setTimeout(() => {
            pBtn.style.pointerEvents = ""
        }, 500)
    })

    nBtn.addEventListener('click', () => {
        nBtn.style.pointerEvents = "none"

        setTimeout(() => {
            nBtn.style.pointerEvents = ""
        }, 500)
    })

    //tried to solve it in custom way. (Doesn't work)
    let swiperScroll = 0
    slider.addEventListener("wheel", (e) => {
        if(e.deltaY == 100){
            swiperScroll -= 100
            let scrollData = slider.style.transform.split(',')[1].slice(0, -2)
            console.log(swiperScroll)
            slider.style.transform = `translate3d(0px,${+scrollData - swiperScroll}, 0px); !important`
        }
        else if(e.deltaY == -100){  
            swiperScroll += 100
            let scrollData = slider.style.transform.split(',')[1].slice(0, -2)
            console.log(swiperScroll)
            slider.style.transform = `translate3d(0px,${+scrollData + swiperScroll}, 0px);`
        }
    })

} 