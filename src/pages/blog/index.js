import React from 'react'
import MyLayout from '../../components/MyLayout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <MyLayout>
        <section className="section">
          <BlogRoll isResponsive={true}/>
        </section>
      </MyLayout>
    )
  }
}
