// react
var React = require('react');

// location item
var LocationItem = require('./LocationItem');

// list
var LocationList = React.createClass({

  // render
	render(){

    // self
    // this
		var self = this;

    // locations
    // this
    // props
    // locations
    // map
    // func
    // l
    // return
    // location item
    // address
    // {}
    // l.addr
    // timestamp
    // l.timestamp
    // active {}
    // active
    // onclick self.props
    // onCLick
		var locations = this.props.locations.map(function(l){

			var active = self.props.activeLocationAddress == l.address;

			// Notice that we are passing the onClick callback of this
			// LocationList to each LocationItem.

			return <LocationItem address={l.address} timestamp={l.timestamp} 
					active={active} onClick={self.props.onClick} />
		});

    // if location .length
    // return null
		if(!locations.length){
			return null;
		}

    // return
    // list-group
    // col-xs-12
    // col-md-6
    // col-md-offset-3
    // span
    // class name
    // list group item active
    // saved location
    // {}
    // {locations}
		return (
			<div className="list-group col-xs-12 col-md-6 col-md-offset-3">
				<span className="list-group-item active">Saved Locations</span>
				{locations}
			</div>
		)

	}

});

module.exports = LocationList;
