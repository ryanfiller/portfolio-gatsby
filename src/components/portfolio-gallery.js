import React from 'react';
import Swiper from 'react-id-swiper';
import Img from 'gatsby-image';

class PortfolioGallery extends React.Component {
  render() {
    const params = {
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

    var color = {
      color: this.props.frontmatter.color,
    };

    return(
      <div className="portfolio-gallery" style={color}>
        <Swiper {...params}>
          {this.props.frontmatter.images.map(({ image }, index) => (
            <div key={index} >
              <Img src={image} />
            </div>
          ))} 
        </Swiper>
      </div>
      
    )
  }
}

export default PortfolioGallery;