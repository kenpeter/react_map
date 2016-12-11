// react
var React = require('react');

// var
// curr location
// react create class
// toggle favorite
// this props
// on favor toggle
// this props address
// 
var CurrentLocation = React.createClass({
  // 
	toggleFavorite(){
	  // add favor
	  // or remove favor
		this.props.onFavoriteToggle(this.props.address);
	},

  // render
	render(){
    // class name
    // glyphicon
    // glyphicon, star, empty
		var starClassName = "glyphicon glyphicon-star-empty";

    // this props
    // favor
		if(this.props.favorite){
		  // gly phicon, glyphicon-star
			starClassName = "glyphicon glyphicon-star";
		}

    // return
    // div class name
    // col-xs-12
    // col-md-6
    // col-md-offset-3, it means it move right 3 columns
    // curr location
    // h4
    // save-location
    // {}
    // this.props.addr
    // span
    // classname
    // star class name
    // on click
    // this.togglefavor
    // aria hidden true
    // aria-hidden, hide
		return (
			<div className="col-xs-12 col-md-6 col-md-offset-3 current-location">
				<h4 id="save-location">{this.props.address}</h4>
				<span className={starClassName} onClick={this.toggleFavorite} aria-hidden="true"></span>
			</div>
		);
	}

});

// module
// exports
// curr locations
module.exports = CurrentLocation;
