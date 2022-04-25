const Song = require('./song')
const Playlist = require('./playlist')

module.exports = class MusicPlayer {
    constructor(playlist) {
        this.playlist = playlist
    }

    addSong(song) {
        // TODO: answer here
        let song = new Song(song)
        this.playlist.addSong(song)
    
    }

    play() {
        // TODO: answer here
        let song = this.playlist.getNextSong()

        if (song) {
            console.log(`Playing ${song.title} by ${song.artist}`)
        } else {
            console.log('No more songs to play')
        }
    }
}