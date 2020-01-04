import React from 'react'
import MyLayout from '../../components/MyLayout'
import FlashRoll from '../../components/FlashRoll'

export default class FlashficIndexPage extends React.Component {
  render() {
    return (
      <MyLayout>
        <section className="section">
              <FlashRoll isResponsive={true} />
        </section>
      </MyLayout>
    )
  }
}
