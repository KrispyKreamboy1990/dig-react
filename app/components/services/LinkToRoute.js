'use strict';

import React         from 'react';
import serviceLookup from '../services';

var Link = React.createClass({
  
  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    if( typeof this.props.href === 'string' && this.props.href !== '#') {
      var router = serviceLookup('router');
      router.navigateTo( this.props.href );
    }
    return true;
  },

  render: function() {

    return (
      <a {...this.props} onClick={this.handleClick} >
        {this.props.children}
      </a>
    );
  }
});

Link.navigateTo = function(path) {
  var router = serviceLookup('router');
  router.navigateTo( path );  
};

module.exports = Link;
