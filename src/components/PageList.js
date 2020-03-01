import React, { Component, Fragment } from "react"
import Page from "./Page"

class PageList extends Component {
  render() {
    return (
      <Fragment>
        <div className='pagination'>
          {
            [...Array(this.props.totalPages).keys()].map(number => (
              <Page 
                pageNumber={ number }
                symbolPage={ number + 1 }
                currentPage={ this.props.currentPage }
                totalPages={ this.props.totalPages }
                loadPage={ this.props.loadPage }/>
            ))
          }
        </div>
      </Fragment>
    )
  }
}

export default PageList;