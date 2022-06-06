import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// import Button, { OutlineButton } from '../button/Button'
// import Modal, { ModalContent } from '../modal/Modal'

import tmdbApi, { category, ContentType } from 'api/tmdbApi'
import apiConfig from 'api/apiConfig'

import { Slider } from './styled'

const SlideItem = (props) => {
  const router = useRouter()
  const item = props.item
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  )
  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`)
    const videos = await tmdbApi.getVideos(category.Content, item.id)
    if (videos.results.length > 0) {
      const videSrc = 'https://www.youtube.com/embed/' + videos.results[0].key
      modal
        .querySelector('.modal__content > iframe')
        .setAttribute('src', videSrc)
    } else {
      modal.querySelector('.modal__content').innerHTML = 'No trailer'
    }
    modal.classList.toggle('active')
  }

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={() => router.push('/Content/' + item.id)}>
              Watch now
            </Button>
            <OutlineButton onClick={setModalActive}>
              Watch trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  )
}
/* 
const TrailerModal = props => {
   const item = props.item;
   const iframeRef = useRef(null);
   const onClose = () => iframeRef.current.setAttribute('src', '');
   return (
       <Modal active={false} id={`modal_${item.id}`}>
           <ModalContent onClose={onClose}>
               <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
           </ModalContent>
       </Modal>
   )
}
 */
const Slide = () => {
  SwiperCore.use([Autoplay])
  const [ContentItems, setContentItems] = useState([])
  useEffect(() => {
    const getContents = async () => {
      const params = { page: 1 }
      try {
        const response = await tmdbApi.getContentsList(ContentType.popular, {
          params,
        })
        setContentItems(response.results.slice(1, 4))
        console.log(response)
      } catch {
        console.log('error')
      }
    }
    getContents()
  }, [])

  return (
    <Slider>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
      // autoplay={{delay: 3000}}
      >
        {ContentItems.map((item, i) => (
          <SwiperSlide key={i}>
            {/*
                            ({ isActive }) => (
                                <SlideItem item={item} className={`${isActive ? 'active' : ''}`} />
                            )
                            */}
          </SwiperSlide>
        ))}
      </Swiper>
      {/*
                ContentItems.map((item, i) => <TrailerModal key={i} item={item}/>)
               */}
    </Slider>
  )
}

export default Slide
