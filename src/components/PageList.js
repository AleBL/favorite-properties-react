import React, { Component, Fragment } from "react"
import Page from "./Page"
import util from "../util/util"

class PageList extends Component {
  render() {
    const arrayPages = util.mountArrayPages(this.props.currentPage, this.props.totalPages);

    return (
      <Fragment>
        <div className='pagination'>
          {
            arrayPages.map(number => (
              <Page  
                key={ "page-" + number }
                pageNumber={ number }
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