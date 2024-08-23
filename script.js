console.log("Let's listen to Music")
//add variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songItem'))

//song list
let songs = [
    {songName:"#1", filePath:"1.mp3", coverPath:"10.jpg"},
    {songName:"#2", filePath:"2.mp3", coverPath:"1.jpeg"},
    {songName:"#3", filePath:"3.mp3", coverPath:"2.jpeg"},
    {songName:"#4", filePath:"4.mp3", coverPath:"3.jpeg"},
    {songName:"#5", filePath:"5.mp3", coverPath:"4.jpeg"},
    {songName:"#6", filePath:"6.mp3", coverPath:"5.jpeg"}
]

//
songitems.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;
});

//play and pause music

masterPlay.addEventListener('click' ,()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity='1';
    }
    else{
    audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity='0';
    }
    
})

audioElement.addEventListener('timeupdate', ()=>{
    //seek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
    
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach( (element)=>{
        element.addEventListener('click',(e)=>{
            makeAllPlays();
            songIndex = parseInt(e.target.id)
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src=`${songIndex+1}.mp3`;
            audioElement.currentTime=0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            document.getElementById('name').innerHTML=`${songIndex}.mp3`;
            
        })
}

)

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
     audioElement.src=`${songIndex+1}.mp3`;
     audioElement.currentTime=0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('prev').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
     audioElement.src=`${songIndex+1}.mp3`;
     audioElement.currentTime=0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
})
