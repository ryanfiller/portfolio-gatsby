import React from 'react';
import Swiper from 'react-id-swiper';

class PortfolioGallery extends React.Component {
  render() {

    if(this.props.frontmatter.images.length > 1) {
      var params = {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
      }
    } else {
      var params = {
        loop: false,
      }
    }

    var color = {
      color: this.props.frontmatter.color,
    };

    return(
      <div className="portfolio-gallery" style={color}>
        <Swiper {...params}>
          {this.props.frontmatter.images.map(( {image}, index ) => (
            <div key={index}>
              <img src={image} />
            </div>
          ))} 
        </Swiper>
      </div>
      
    )
  }
}

export default PortfolioGallery;