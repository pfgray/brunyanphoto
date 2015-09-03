'use strict';

var React = require('react/addons');

require('./front.less');

var images = [
  require('../../images/scrolling/image1.jpg'),
  require('../../images/scrolling/image2.jpg'),
  require('../../images/scrolling/image3.jpg'),
  require('../../images/scrolling/image4.jpg'),
  require('../../images/scrolling/image5.jpg')
];

var Front = React.createClass({
  getInitialState: function(){
    return {
      currentImage: 0
    };
  },
  componentDidMount: function(){
    setInterval(this.shiftImage, 5000);
  },
  shiftImage: function(){
    this.setState({
      currentImage: (this.state.currentImage + 1) % images.length
    });
  },
  render: function() {

    var wallpapers = images.map(function(image, i){
      var style = {
        opacity: this.state.currentImage === i ? 1 : 0,
        backgroundImage: 'url(' + image + ')'
      };
      return (<div className="wallpaper" style={style}></div>);
    }.bind(this));

    return (
      <div className="front">
        {wallpapers}
        <div className="overlay">
          <nav>
            <a href="/me">me</a>
            <a href="/me">photos</a>
            <a href="/me">contact</a>
          </nav>
          <div className='logo'>
              <div className='name'>Bethanne Runyan</div>
              <div className='sub'>Photography</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Front;
