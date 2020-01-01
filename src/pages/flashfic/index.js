import React from 'react'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class FlashficIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
              <BlogRoll />
        </section>
      </Layout>
    )
  }
}
