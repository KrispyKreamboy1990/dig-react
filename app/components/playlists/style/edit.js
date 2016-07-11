var css = 
`/* new & edit playlist css */

.query-options-elements {
  margin-top: 15px;
  padding: 8px;
  background-color: #EEE;
  border-radius: 6px;
  border: 1px solid black;
}

.query-options-elements > li {
  margin-bottom: 18px;
}

.query-options-elements > li > .bpm-slider-container {
  margin-top: 12px;
  padding-top: 2px;
  padding-bottom: 42px;
}

.query-options-elements .no-selected-tags {
  color: #999;
  font-style: italic;
}
.query-options-elements .selected-tags a.btn-tag {
  font-size: 12px;
  display: inline-block;
  border-radius: 5px;
  background-color: #DDD;
  padding: 6px;
  vertical-align: center;
  margin-right: 8px;
  margin-bottom: 8px;
  color: #555;
}

.query-options-elements .selected-tags a.btn-tag:hover {
  background-color: #EEE;
  color: black;
  text-decoration: none;
}
.query-options-elements .selected-tags a.btn-tag i.fa {
  font-size: 13px;
}

.query-options-elements .artist-list,
.query-options-elements .tags-list {
  max-height: 200px;
  overflow: scroll;
  padding: 0px 10px;
  border-radius: 3px;
  border: 1px solid #999;
  width: 90%;
  margin: 0px auto;
  cursor: default;
}

.query-options-elements .artist-list li,
.query-options-elements .tags-list li {
  padding: 1px 8px;
  margin: 0px;
}

.query-options-elements .tag-filter {
  background-color: #CCC;
  padding: 8px;
  border-radius: 6px;
}

.query-options-elements .tag-filter .selected-tags {
  border: 1px solid black;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 14px;
  margin-right: 38px;
  background-color: white;
}

.query-options-elements .tag-filter .tags-chevron {
  width: 30px;
  height: 30px;
  border-radius: 4px;
  margin-top: 4px;
}

.query-options-elements .tag-filter .tags-chevron:hover {
  background-color: white;
}
.query-options-elements .tag-filter .tags-list {
  background-color: white;
  border-radius: 6px;
}

.query-options-elements .artist-filter {
  background-color: #CCC;
  padding: 8px;
  border-radius: 6px;
}

.query-options-elements .artist-filter .artist-list {
  background-color: #EEE;;
  border: 0px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 6px;
  overflow: hidden;
}

.query-options-elements .artist-list li:hover,
.query-options-elements .tags-list li:hover {
  background-color: #FFF;
  border-radius: 8px;
}

.query-options-elements select#typelist,
.query-options-elements select#sort {
  margin: 0 auto;
  width: 130px;  
}
.query-options-elements select#lic {
  width: 180px;
  margin: 0 auto;
}


.query-options-elements .lic-help {
  display: none;
}

.query-options-elements .form-control[for="instrumentalOnly"] {
  width: 50%;
  margin: 0 auto;
}

.query-options-elements input[type="checkbox"] {
  margin-left: 3px;
}

.query-options-elements .match-all {
  display: block;
  margin: 12px 8px;
  text-align: center;
}

.track-list {
  padding: 8px;
  background-color: #EEE;
  border-radius: 5px;
  min-height: 300px;
}

.track-list > li > .name {
  font-weight: bold;
}

.track-list > li > .by {
  color: #BBB;
}

.track-list > li > .artist {
  font-style: italic;
}

.save-playlist-form .playlist-save-label {
  width: 20%;
  float:  left;
  text-align: right;
  vertical-align: middle;
  display: inline-block;
  margin: 8px;
}

.save-playlist-form input[type="text"] {
  width: 75%;
}

.save-playlist-form .save-button {
  margin: 20px 44%;
}

`;

module.exports = css;

//