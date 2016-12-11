// var
// react
var React = require('react');

// var
// map
// react
// create class
var Map = React.createClass({

  // component did mount
	componentDidMount(){

		// Only componentDidMount is called when the component is first added to
		// the page. This is why we are calling the following method manually. 
		// This makes sure that our map initialization code is run the first time.

		this.componentDidUpdate();
	},

  // when this guy called
  // e.g. when someone search in input box, then hit enter
	componentDidUpdate(){

    // this
    // last lat, it is internal props
    // this props lat
    // this
    // last lng
    // this props lng
    // 
		if(this.lastLat == this.props.lat && this.lastLng == this.props.lng){

			// The map has already been initialized at this address.
			// Return from this method so that we don't reinitialize it
			// (and cause it to flicker).

			return;
		}

    // remember lat lng in this component
		this.lastLat = this.props.lat;
		this.lastLng = this.props.lng

    // new gmap
    // element #map
    // lat lng
		var map = new GMaps({
			el: '#map',
			lat: this.props.lat,
			lng: this.props.lng
		});

		// Adding a marker to the location we are showing
		
		// map
		// add marker
		// lat
		// this.props.lat
		// ...
		map.addMarker({
			lat: this.props.lat,
			lng: this.props.lng
		});
	},

  // render
  // <div>
  // <p>
  // div map
	render(){

		return (
			<div className="map-holder">
				<p>Loading...</p>
				<div id="map"></div>
			</div>
		);
	}

});

module.exports = Map;
