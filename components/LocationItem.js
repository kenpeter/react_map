// react
var React = require('react');

// location item
//var LocationItem = require('./LocationItem');

// moment, time right now
var moment = require('moment');

// location item
// react create class
var LocationItem = React.createClass({

  // handle click
  // the click is passed from parent
  // which allow search
  // with address
	handleClick(){
		this.props.onClick(this.props.address);
	},

  // render
	render(){
    // list group item
		var cn = "list-group-item";

    // this props
    // active
    // active location
		if(this.props.active){
		  // it will hight color
			cn += " active-location";
		}
  
    // return
    // class name
    // {}
    // cn
    // onclick
    // this
    // handle click
    // {}
    // this.props.address
    // <span>
    // class name
    // create at
    // {}
    // moment
    // this.props.timestamp
    // from now 
    // <span>
    // class name
    // glyph icon
    // glyph icon
    // menu right
    // </span>
		return (
			<a className={cn} onClick={this.handleClick}>
				{this.props.address}
				<span className="createdAt">{ moment(this.props.timestamp).fromNow() }</span>
				<span className="glyphicon glyphicon-menu-right"></span>
			</a>
		)

	}

});

module.exports = LocationItem;
