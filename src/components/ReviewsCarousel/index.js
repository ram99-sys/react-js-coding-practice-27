import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {currentCarouselReviewIndex: 0}

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const {currentCarouselReviewIndex} = this.state
    if (currentCarouselReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        currentCarouselReviewIndex: prevState.currentCarouselReviewIndex + 1,
      }))
    }
  }

  onClickLeftArrow = () => {
    // const {reviewsList} = this.props
    const {currentCarouselReviewIndex} = this.state
    if (currentCarouselReviewIndex > 0) {
      this.setState(prevState => ({
        currentCarouselReviewIndex: prevState.currentCarouselReviewIndex - 1,
      }))
    }
  }

  displayReviewDetails = activeIndexDetails => {
    // console.log(activeIndexDetails)
    const {imgUrl, username, companyName, description} = activeIndexDetails
    return (
      <div className="review-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p>{username}</p>
        <p>{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {currentCarouselReviewIndex} = this.state
    const activeIndexDetails = reviewsList[currentCarouselReviewIndex]
    return (
      <div className="app-container">
        <div className="carousel-container">
          <button
            type="button"
            className="left-button"
            testid="leftArrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.displayReviewDetails(activeIndexDetails)}
          <button
            type="button"
            className="right-button"
            testid="rightArrow"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
