/*
  Playlist
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  name: String,
  created: {
    type: Date,
    default: Date.now()
  },
  spotifyId: String,
  genre: String,
  tracks: [{
    type: Schema.Types.ObjectId,
    ref: 'Track'
  }]
});

module.exports = mongoose.model('Playlist', schema);
