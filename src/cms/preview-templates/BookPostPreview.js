import React from 'react'
import PropTypes from 'prop-types'
import { BookPostTemplate } from '../../templates/book-post'

const BookPostPreview = ({ entry, widgetFor }) => (
  <BookPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    featuredimage={entry.getIn(['data', 'featuredimage'])}
    pages={entry.getIn(['data','pages'])}
    amazonlink={entry.getIn(['data','amazonlink'])}
    smashwordslink={entry.getIn(['data','smashwordslink'])}
  />
)

BookPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BookPostPreview
