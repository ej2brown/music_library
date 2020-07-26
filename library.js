const library = {

  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },

  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },


  /////////////////////////////
  // FUNCTIONS TO IMPLEMENT:
  /////////////////////////////

  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  printPlaylists = function () {
    console.log(library['playlists']['p01']['id'], ": ", library['playlists']['p01']['name'], " - ", library['playlists']['p01']['tracks'].length, " tracks ")
    console.log(library['playlists']['p02']['id'], ": ", library['playlists']['p02']['name'], " - ", library['playlists']['p02']['tracks'].length, " tracks ")
  },
  // printPlaylists(library)

  // prints a list of all tracks, using the following format:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  printTracks = function () {
    console.log(library['tracks']['t01']['id'], ": ", library['tracks']['t01']['name'], "by", library['tracks']['t01']['artist'], "(", library['tracks']['t01']['album'], ")")
    console.log(library['tracks']['t02']['id'], ": ", library['tracks']['t02']['name'], "by", library['tracks']['t02']['artist'], "(", library['tracks']['t02']['album'], ")")
    console.log(library['tracks']['t03']['id'], ": ", library['tracks']['t03']['name'], "by", library['tracks']['t03']['artist'], "(", library['tracks']['t03']['album'], ")")
  },
  //printTracks(library)

  // prints a list of tracks for a given playlist, using the following format:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  printPlaylist = function (playlistId) {
    console.log(playlistId['playlists']['p01']['id'], ": ", playlistId['playlists']['p01']['name'], " - ", playlistId['playlists']['p01']['tracks'].length, " tracks ")
    console.log(playlistId['tracks']['t01']['id'], ": ", playlistId['tracks']['t01']['name'], "by", playlistId['tracks']['t01']['artist'], "(", playlistId['tracks']['t01']['album'], ")")
    console.log(playlistId['tracks']['t02']['id'], ": ", playlistId['tracks']['t02']['name'], "by", playlistId['tracks']['t02']['artist'], "(", library['tracks']['t02']['album'], ")")

  },
  //printPlaylist(library)

  // adds an existing track to an existing playlist
  addTrackToPlaylist = function (trackId, playlistId) {

    playlistId.push(trackId);
    console.log(playlistId)
  },

  //addTrackToPlaylist("t03", library['playlists']['p01']['tracks'])

  // generates a unique id
  // (already implemented: use this for addTrack and addPlaylist)
  generateUid = function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },


  // adds a track to the library
  addTrack = function (name, artist, album) {
    library['tracks'].t04 = {};
    library['tracks']['t04'].name = generateUid(name);
    library['tracks']['t04'].artist = generateUid(artist);
    library['tracks']['t04'].album = generateUid(album);
    console.log(library['tracks'].t04)
  },
  //addTrack("name", "artist", "album")

  // adds a playlist to the library
  addPlaylist = function (name) {
    library['playlists'].p03 = {};
    library['playlists']['p03'].name = generateUid(name);
    console.log(library['playlists']['p03'])
  },
  //addPlaylist("name")

  // STRETCH:
  // given a query string string, prints a list of tracks
  // where the name, artist or album contains the query string (case insensitive)
  // tip: use "string".search("tri") 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
  printSearchResults = function (query) {
    for (key of Object.keys(library['tracks']['t01'])) {
      if (library['tracks']['t01'][key] === library['tracks']['t01'][key].search(query)) {
        console.log(library['tracks']['t01'][key]);
        return library['tracks']['t01'][key];
      }
    }
  }
  //printSearchResults('tri')

};