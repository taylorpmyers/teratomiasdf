import React from 'react'
import PropTypes from 'prop-types'
import { FlashficPostTemplate } from '../../templates/flashfic-post'

const FlashficPostPreview = ({ entry, widgetFor }) => (
  <FlashficPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    featuredimage={entry.getIn(['data', 'featuredimage'])}
  />
)

FlashficPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FlashficPostPreview
