import React from 'react'
import Layout from '../../components/Layout'
import FlashRoll from '../../components/FlashRoll'

export default class FlashficIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
              <FlashRoll isResponsive={true} />
        </section>
      </Layout>
    )
  }
}
