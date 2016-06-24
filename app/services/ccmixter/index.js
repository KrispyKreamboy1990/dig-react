import RPCAdapter   from '../rpc-adapter';
import Eventer      from '../eventer';

import Feed      from './feed';
import Playlists from './playlists';
import User      from './user';
import Upload    from './upload';

class CCMixter extends Eventer
{
  constructor() {
    super(...arguments);
    this.adapter = RPCAdapter;

    this.feed        = new Feed(this);
    this.playlists   = new Playlists(this);
    this.playlist    = this.playlists;
    this.user        = new User(this);
    this.upload      = new Upload(this);
    this.uploads     = this.upload;
  }

  _call_wrap(promise,debug) {
    return promise.then( result=> {
      if( !result || typeof result.status === 'undefined' || result.status === 'error' ) {
        throw result && result.errmsg || 'because error ' + debug;
      }
      return result.data === undefined ? result : result.data;
    });
  }

  _call(cmd) {
    return this._call_wrap(this.adapter.callOne(cmd),cmd);
  }

  post(cmd,args) {
    return this._call_wrap(this.adapter.post(cmd,args),cmd);
  }

  patch(cmd,args) {
    return this._call_wrap(this.adapter.patch(cmd,args),cmd);
  }
}

module.exports = new CCMixter();
