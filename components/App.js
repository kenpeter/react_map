// react
var React = require('react');

// search comp
var Search = require('./Search');

// map comp
var Map = require('./Map');

// current location under the map
var CurrentLocation = require('./CurrentLocation');

// location list
var LocationList = require('./LocationList');


// var app
// react
// create class
var App = React.createClass({

  // get init state of app comp
	getInitialState(){

		// Extract the favorite locations from local storage
		// location from storage
		var favorites = [];

    // if local storage favor
		if(localStorage.favorites){
		  // json parse
		  // local storage favor
		  // favor == favor
			favorites = JSON.parse(localStorage.favorites);
		}

    // favor contains not only address and also time stamp
		// Nobody would get mad if we center it on Paris by default
    // return {}
    // favor: favor from local storage
    // curr address, paris
    // map coord
    // lat
    // lang
		return {
			favorites: favorites,
			currentAddress: 'Paris, France',
			mapCoordinates: {
				lat: 48.856614,
				lng: 2.3522219
			}
		};
	},

  // favor or unfavor
  // with param addr
	toggleFavorite(address){
    // if addr is favor
		if(this.isAddressInFavorites(address)){
		  // this
		  // remove from favor
			this.removeFromFavorites(address);
		}
		else {
		  // this
		  // add to favor  
			this.addToFavorites(address);
		}

	},

  // add to favor
  // param addr
	addToFavorites(address){
    // favor = this.state.favor
		var favorites = this.state.favorites;

    // favor arr
    // push
    // {}
    // {addr: addr, time: now}
		favorites.push({
			address: address,
			timestamp: Date.now()
		});

    // this
    // set state
    // {}
    // the state only contains favor addr
    // we don't set curr addr and its coords, because
    // ..................?
    // because we don't touch them.
		this.setState({
			favorites: favorites
		});

    // json
    // stirngify
    // favor array
    // local storage
    // .favor save it
		localStorage.favorites = JSON.stringify(favorites);
	},

  // remove from favor
  // addr
	removeFromFavorites(address){
    // fav arr
    // this state favor
		var favorites = this.state.favorites;
		var index = -1;

    // for favor
    // len
		for(var i = 0; i < favorites.length; i++){
      // if fav
      // [i]
      // addr === addr
			if(favorites[i].address == address){
			  // index == i
			  // break
				index = i;
				break;
			}

		}

		// If it was found, remove it from the favorites array
    // found index !=== -1
		if(index !== -1){
			// favor array
			// splice
			// index start to remove index
			// 1 means how many
			favorites.splice(index, 1);

      // set state
      // set arr
			this.setState({
				favorites: favorites
			});

      // local storage
      // favor
      // json
      // stringify
			localStorage.favorites = JSON.stringify(favorites);
		}

	},

  // is addr in favor
  // addr
	isAddressInFavorites(address){
    // fav ===
    // this state favor
		var favorites = this.state.favorites;

    // loop, true or false
		for(var i = 0; i < favorites.length; i++){

			if(favorites[i].address == address){
				return true;
			}

		}

		return false;
	},

  // searchfor address
  // addr
	searchForAddress(address){
		// self
		// this
		var self = this;

		// We will use GMaps' geocode functionality,
		// which is built on top of the Google Maps API
    // gmap
    // geo code
    // {}
    // {addr: addr, callback: func}
    // res, status
		GMaps.geocode({
			address: address,
			callback: function(results, status) {
        // if not ok, return
				if (status !== 'OK') return;
				
        // res[0], geo, location
        // vr lat and lng
				var latlng = results[0].geometry.location;

        // self
        // set state
        // this without the favor addrs.
        // because we don't change favor addrs, so no touch
        // res[0], formatted_addr
        // {
        //    curr_addr: curr_addr
        //    map_corrd: {
        //      lat: lat_and_lng.lat,
        //      lng: lat_and_lng.lng
        //    }
        // }
				self.setState({
					currentAddress: results[0].formatted_address,
					mapCoordinates: {
						lat: latlng.lat(),
						lng: latlng.lng()
					}
				});

			}
		});

	},

  // render
	render(){
    // return ()
    // <div></div>
    // <search>
    // on search
    // this.search for addr
    //
    // <map>
    // lat
    // this.state.coord.lat
    // lng
    // this.state.corrd.lng
    //
    // curr location
    // addr == this.state.curr_addr
    // favor, true or false
    // toggle, method
    // favorite={this.isAddressInFavorites(this.state.currentAddress)}, control the star
    //
    // location list
    // locations
    // this.state.favor
    // active location addr
    // this.state.curr_addr
    // on click, this search for addr
    //
		return (

			<div>
				<h1>Your Google Maps Locations</h1>

				<Search onSearch={this.searchForAddress} />

				<Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />

				<CurrentLocation address={this.state.currentAddress} 
					favorite={this.isAddressInFavorites(this.state.currentAddress)} 
					onFavoriteToggle={this.toggleFavorite} />

				<LocationList locations={this.state.favorites} activeLocationAddress={this.state.currentAddress} 
					onClick={this.searchForAddress} />

			</div>

		);
	}

});

// module
// exports
// app
module.exports = App;
