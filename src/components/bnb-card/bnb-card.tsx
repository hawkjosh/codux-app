import classNames from 'classnames'
import { useState } from 'react'
import styles from './bnb-card.module.scss'

export interface BnbCardProps {
  className?: string
  title: string[]
  price: number[]
  images: string[]
}

export const BnbCard = ({ className, images, title, price }: BnbCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.card}>
        <div>
          <div>
            <button onClick={prevImage}>Prev</button>
            <button onClick={nextImage}>Next</button>
          </div>
          <img src={images[currentIndex]} />
        </div>
        <div>
          <h3>{title[currentIndex]}</h3>
          <p>${price[currentIndex]} per night</p>
        </div>
      </div>
    </div>
  )
}
