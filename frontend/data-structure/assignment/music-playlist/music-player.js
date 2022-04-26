const Song = require('./song')
const Playlist = require('./playlist')

module.exports = class MusicPlayer {
    constructor(playlist) {
        this.playlist = playlist
    }

    addSong(song) {
        // TODO: answer here
        this.playlist.songs.push(song)
    }

    play() {
        // TODO: answer here
        let output = ""
        if (this.playlist.songs.length === 0) {
            return output
        }
        if (this.playlist.isRepeatable === true) {
            let output = "Now Playing " + this.playlist.songs[0].singer + " - " + this.playlist.songs[0].title;
            this.playlist.songs.push(this.playlist.songs.shift())
            return output;
        } else {
            let output = "Now Playing " + this.playlist.songs[0].singer + " - " + this.playlist.songs[0].title;
            this.playlist.songs.shift();
            return output;
        }
    }
}