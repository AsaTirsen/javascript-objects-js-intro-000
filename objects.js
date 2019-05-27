var playlist = {artistName: "songTitle"}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = "songTitle";
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  var playlist = {artistName: "songTitle"}
  var newPlaylist = delete playlist.artistName;
  return newPlaylist;
}
