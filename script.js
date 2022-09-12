

document.addEventListener("DOMContentLoaded", function(event) { var audio = document.createElement("AUDIO")

var sound = new Howl({
    src: ['./r.mp3'],
    autoplay: true,
    loop: true,
    volume: 0.5,
});

sound.play();
    //Do work
    let element=document.getElementById('er');
    let element2=document.getElementsByClassName('info')[0];
    
    console.log(element)
    let i=1;
    let v=["v1.png","v2.png","v3.png","v4.png","v5.jpg",]
    let vv=["I'm the king of my own kingdom","He is lover also, Fighter also","Mah life, Mah rules","Amtitude ka baap","Baapo ka Baap"]
    setInterval(() => {
        console.log("Entered")
        element.style.backgroundImage=`url(${v[i]})`;
        element2.innerHTML=vv[i];
        i=(i+1)%v.length;
    }, 4000);


});