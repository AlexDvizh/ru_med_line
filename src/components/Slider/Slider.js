import './Slider.css';
import { production } from '../../data/data';
import React, { Component } from "react";
import Slider from "react-slick";
import SliderItem from './SliderItem/SliderItem';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider" id="teg-slider">
        <h2 className="slider-title">Продукция:</h2>
        <div className="slider-wrap">
          <Slider {...settings}>
          { production.map((item, key) => (
              <SliderItem
                  key={key} 
                  url={item.url}
                  name={item.name}
                  adress={item.path}
                  />
              ))
          }
          </Slider>
        </div>
      </div>
    );
  }
}