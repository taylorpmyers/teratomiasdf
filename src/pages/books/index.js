import React from 'react'
import Layout from '../../components/Layout'
import BookRoll from '../../components/BookRoll'

export default class BookIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
              <BookRoll />
      
        </section>
      </Layout>
    )
  }
}
