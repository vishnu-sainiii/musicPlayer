console.log("WELCOME TO SPOTIFY");

//initialisation of varuiables:
let songindex=0;
let audioelement= new Audio('AUDIO/1.mp3');
 let masterplay=document.getElementById('masterplay');
 let progressbar=document.getElementById("progressbar");
let gif= document.getElementById('gif');
let songitem=Array.from(document.getElementsByClassName('songitem'));

let AUDIO=[
    {songname: "RAM-SIYA RAM",filepath:"AUDIO/1.mp3", coverpath:"COVER/1.jpg"},
    {songname: "DEVA-DEVA",filepath:"AUDIO/2.mp3", coverpath:"COVER/2.jpg"},
    {songname: "KAHANI SUNO",filepath:"AUDIO/3.mp3", coverpath:"COVER/3.jpg"},
    {songname: "KESARIYA",filepath:"AUDIO/4.mp3", coverpath:"COVER/4.jpg"},
    {songname: "MAAN MERI JAAN",filepath:"AUDIO/5.mp3", coverpath:"COVER/5.jpg"},
    {songname: "MANN BHAREYA",filepath:"AUDIO/6.mp3", coverpath:"COVER/6.jpg"},
    {songname: "HOTA KAYI BAAR",filepath:"AUDIO/7.mp3", coverpath:"COVER/7.jpg"},
    {songname: "100 JANAM",filepath:"AUDIO/8.mp3", coverpath:"COVER/8.jpg"},
]

songitem.forEach((element,i) => {
    console.log(element,i);
        // element.getElementsByTagName("img")[0].src=AUDIO[i].filepath;
        element.getElementsByTagName('img')[0].src=AUDIO[i].coverpath;
        element.getElementsByClassName('songname')[0].innerText=AUDIO[i].songname;
});

// audioelement.play();

masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


//listen to events:
audioelement.addEventListener('timeupdate',()=>{
    //update seekbar:
    progress= parseInt((audioelement.currentTime/audioelement.duration)*100);
    progressbar.value=progress;
})

progressbar.addEventListener('change',()=>{
    audioelement.currentTime=progressbar.value * audioelement.duration/100;
})
const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        });
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src=`AUDIO/${songindex+1}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    });
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>=7){
        songindex = 0
    }
    else{
        songindex += 1;
    }
    audioelement.src = `AUDIO/${songindex+1}.mp3`;
    // masterSongName.innerText = AUDIO[songindex].songName;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<=0){
        songindex = 0
    }
    else{
        songindex -= 1;
    }
    audioelement.src = `AUDIO/${songindex+1}.mp3`;
    // masterSongName.innerText = AUDIO[songindex].songName;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
