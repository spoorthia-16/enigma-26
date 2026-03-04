import React from 'react'
import Footer from '../components/Footer'
import EventList from '../components/EventList'

const Events = () => {
  return (
    <EventList>
      <div className="solid-content-bg">
        <Footer />
      </div>
    </EventList>
  )
}

export default Events