import { BnbCard } from './components/bnb-card/bnb-card'

import { cardsData } from './data/cardsData.json'

import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.App}>
      <h1>AirBnb Clone</h1>
      <div className={styles.cardContainer}>
        <BnbCard {...cardsData} />
      </div>
    </div>
  )
}

export default App
