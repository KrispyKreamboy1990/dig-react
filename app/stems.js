import React  from 'react';
import env    from './services/env';
import App    from './app';
import routes from './routes/stems';

import {
          Header,
          Footer
        } from './components/stems';

var rewriteRules = [
  { regex: /^\/files\/([^\/]+)\/([^\/]+)/, now: '/stems?ids=$2' },
  { regex: /^\/people\/([^\/]+)\/.*$/,     now: '/people/$1' },
  { regex: /^\/keep-ccmixter-open-and-free/, now: '/news/206102' },
];

env.set({
  routes,
  rewriteRules,
  bannerTopic: 'stemsBanner',
  supportPlaylist: false,
  supportWavImg: true,
//  rpcHost: 'http://ccm/api/',
//  queryHost: 'http://ccm/api/query?',
//  queriesHost: 'http://ccm/api/queries?',
});

module.exports = function(props) { return <App {...props} header={Header} footer={Footer} />; };
