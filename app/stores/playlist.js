import rsvp        from 'rsvp';
import Query       from './query';
import ccmixter    from '../models/ccmixter';
import serialize   from '../models/serialize';
import { oassign } from '../unicorns/goodies';

var Playlist = Query.extend({

  queryParams: {},
  model: {},

  applyParams: function(params) {
    var newParams = oassign({},this.queryParams,params);
    this.emit('playlist-loading');
    this.playlist(newParams)
      .then( model => this.emit('playlist', model ) );
  },

  _playlist: function(params) {
    params.dataview = 'links_by';
    params.f = 'json';
    return this.query(params).then( serialize(ccmixter.Upload) );
  },

  playlist: function(params) {
    if( !params.offset ) {
      params.offset = 0;
    }
    this.queryParams = oassign({},params);

    var modelRequest = {
      playlist: this._playlist( params ),
      total: this.count( params ),
    };
    return rsvp.hash( modelRequest ).then( results => {
      results.store = this;
      results.queryParams = this.queryParams;
      this.model = results;
      return results;
    });
  },


});


module.exports = function(params) {
  var pl = new Playlist();
  return pl.playlist(params).then( () => pl );
};