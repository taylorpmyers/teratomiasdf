import React from 'react'
import MyLayout from '../../components/MyLayout'
import BookRoll from '../../components/BookRoll'

export default class BookIndexPage extends React.Component {
  render() {
    return (
      <MyLayout>
        <section className="section">
          <BookRoll isResponsive={true}/>
        </section>
      </MyLayout>
    )
  }
}
