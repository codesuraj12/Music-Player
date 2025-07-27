const musicLibrary = {
    cool: [
        { name: 'Weekend', id: 1, file: '2nd music.mp3' },
        { name: 'Pop Song 2', id: 2, file: '1st music.mp3' },
        { name: 'Shaky', id: 3, file: '4th music.mp3' },
        { name: 'Faded', id: 4, file: '3rd music.mp3' },
    ],
    rock: [
        { name: 'Demon Slayer', id: 1, file: '2nd music.mp3' },
        { name: 'Pop Song 1', id: 2, file: 'rock1.mp3' },
        { name: 'Coachella', id: 3, file: '3rd music.mp3' },
        { name: 'Golden', id: 4, file: '1st music.mp3' },
    ],
};

const getAllSongs = () => {
    const allSongs = [];
    Object.keys(musicLibrary).forEach(genre => {
        musicLibrary[genre].forEach(song => {
            allSongs.push({
                ...song,
                file: `/music/${genre}/${song.file}`, // Original filename use kar
                genre: genre
            });
        });
    });
    return allSongs;
};

const allSongs = getAllSongs();