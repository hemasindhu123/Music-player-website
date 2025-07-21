console.log("Welcome to Spotify");
//button js code
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    
    // Sample music data (in a real app, this would come from an API)
    const musicLibrary = [
        { id: 1, songName: "Warriyo-Mortals", filePath:"songs/1.mp3", cover: "covers/1.jpg" },
        { id: 2, songName: "Cielo-Huma-Huma", filePath:"songs/2.mp3", cover: "covers/2.jpg" },
        { id: 3, songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath:"songs/3.mp3", cover: "covers/3.jpg" },
        { id: 4, songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath:"songs/4.mp3", cover: "covers/4.jpg" },
        { id: 5, songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath:"songs/5.mp3", cover: "covers/5.jpg" },
        { id: 6, songName: "Ammayi-Animal", filePath:"songs/6.mp3", cover: "covers/6.jpg" },
        { id: 7, songName: "Raataan Lambiya-SHERSHAAH", filePath:"songs/7.mp3", cover: "covers/7.jpg" },
        { id: 8, songName: "Lokiverse BGM-Vikram", filePath:"songs/8.mp3", cover: "covers/8.jpg" },
        { id: 9, songName: "Hukum-JAILER", filePath:"songs/9.mp3", cover: "covers/9.jpg" },
        { id: 10, songName: "kurchi Madathapetti - Guntur Kaaram", filePath:"songs/10.mp3", cover: "covers/10.jpg" },
        { id: 11, songName: "Premalo - Court  Priyadarshi, Harsh Roshan, Sridevi ", filePath:"songs/11.mp3", cover: "covers/11.jpg" },
        { id: 12, songName: "Ayudha pooja- Devara", filePath:"songs/12.mp3", cover: "covers/12.jpg" },
        { id: 13, songName: "Chayela-Jawan", filePath:"songs/13.mp3", cover: "covers/13.jpg" },
        { id: 13, songName: "Perfect-ED sheeran", filePath:"songs/14.mp3", cover: "covers/14.jpg" },
    ];
   
    // Search function
    function performSearch(query) {
        if (!query.trim()) {
            searchResults.style.display = 'none';
            return;
        }
        
        const results = musicLibrary.filter(item => 
            item.songName.toLowerCase().includes(query.toLowerCase()) || 
            item.filePath.toLowerCase().includes(query.toLowerCase())
        );
        
        displayResults(results);
    }
    
    // Display results
    function displayResults(results) {
        searchResults.innerHTML = '';
        
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="no-results">No results found</div>';
            searchResults.style.display = 'block';
            return;
        }
        
        results.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `
                <img src="${item.cover}" alt="${item.songName}">
                <div class="search-result-info">
                    <div class="search-result-songName">${item.songName}</div>
                    <div class="search-result-filepath">${item.filePath}</div>
                </div>
            `;
            
            resultItem.addEventListener('click', () => {
                // In a real app, this would play the selected song
                console.log('Playing: ${item.songName} by ${item.filePath}');
                searchResults.style.display = 'none';
                searchInput.value = '';
            });
            
            searchResults.appendChild(resultItem);
        });
        
        searchResults.style.display = 'block';
    }
    
    // Event listeners
    searchButton.addEventListener('click', () => {
        performSearch(searchInput.value);
    });
    
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        } else if (searchInput.value.trim()) {
            performSearch(searchInput.value);
        } else {
            searchResults.style.display = 'none';
        }
    }); 
    
    // Close results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target) && !searchButton.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
});
//...........

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

 let songs=[
    {songName:"Warriyo-Mortals" ,filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo-Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Ammayi-Animal", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Raataan Lambiya-SHERSHAAH", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Lokiverse BGM-Vikram", filePth: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Hukum-JAILER", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "kurchi Madathapetti - Guntur Kaaram", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Premalo - Court  Priyadarshi, Harsh Roshan, Sridevi  ", filePath: "song/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "Ayudha pooja- Devara", filePath: "songs/12.mp3", coverPath: "covers/12.jpg"},
    {songName: "Chaleya- Jawan", filePath: "songs/13.mp3", coverPath: "covers/13.jpg"},
    {songName: "Perfect-ED sheeran", filePath: "songs/14.mp3", coverPath: "covers/14.jpg"},
 ]

 

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Handle spacebar play/pause
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault(); // Prevent default space bar behavior (e.g., scrolling)
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        } else {
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        }
    }
});
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=11){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
})
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    
})