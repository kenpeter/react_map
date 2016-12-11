// react
var ReactDOM = require('react-dom');
var React = require('react');

// search
// react
// create class
var Search = React.createClass({

  // get init state
  // return
  // {}
  // value: ""
	getInitialState() {
		return { value: '' };
	},

  // handle change
  // event
  // this
  // set state
  // {
  //    value:
  // }
  // event.target.value
	handleChange(event) {
		this.setState({value: event.target.value});
	},

  // handle submit
  // event
  // event
  // prevent default
	handleSubmit(event){
		// event
		// prevent default
		event.preventDefault();
		
		// When the form is submitted, call the onSearch callback that is passed to the component

    // this
    // props
    // on search
    // this state
    // value
		this.props.onSearch(this.state.value);

    // this
    // get dom node
    // query selector
    // input
    // blur
		// Unfocus the text input field
		//this.getDOMNode().querySelector('input').blur();
		ReactDOM.findDOMNode(this).querySelector('input').blur();
	},

  // render
	render() {
    // return
    // <form>
    // id= geo coding form
    // class name
    // form-horizontal
    // on submit
    // {}
    // this handle submit
    // div
    // class name === form-group
    // div
    // classname
    // col-xs-12
    // col-md-6
    // col-md-offset-3
    // div
    // classname
    // input-group
    // <input>
    // type="text"
    // classname
    // form-control
    // id=address
    // placeholder
    // this.state.value
    // on change
    // handlechange
    // <span>
    // classname
    // input-group-btn, there is a button
    // <span>
    // classname
    // glyphicon
    // glyphicon-search
    // aria-hidden
    // true
		return (
			<form id="geocoding_form" className="form-horizontal" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<div className="col-xs-12 col-md-6 col-md-offset-3">
						<div className="input-group">
							<input type="text" className="form-control" id="address" placeholder="Find a location..." 
							value={this.state.value} onChange={this.handleChange} />
							<span className="input-group-btn">
								<span className="glyphicon glyphicon-search" aria-hidden="true"></span>
							</span>
						</div>
					</div>
				</div>
			</form>
		);

	}
});

// module
// exports
// search
module.exports = Search;
