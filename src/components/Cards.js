import React from 'react'
import CardItem from './CardItem'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out our Achievement and History!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
              <CardItem
                    src="images/blizzard-award1.jpg"
                    text="Juara 1 lomba Mobile Legends Blizzard"
                    label="Achievement"
                    path="/" />
                    <CardItem
                    src="images/franstore-award.jpg"
                    text="Juara 2 lomba Mobile Legends Franstore"
                    label="Achievement"
                    path="/" />
              </ul>
                <ul className="cards__items">
                    <CardItem
                    src="images/naufal-award.png"
                    text="Salah satu anggota Felix Culpa memenangkan lomba UI Battlegrounds cabang ML"
                    label="Personal Achievement"
                    path="/" />
                    <CardItem
                    src="images/naufal1.png"
                    text="Salah satu anggota Felix Culpa memenangkan lomba Java Championship cabang ML"
                    label="Personal Achievement"
                    path="/" />
                    <CardItem
                    src="images/Participant-blizzard.jpg"
                    text="Felix Culpa menjadi salah satu kontestan di Blizzard Competition"
                    label="Participancy"
                    path="/" />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
