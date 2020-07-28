var socket = io.connect('https://stark-bayou-29370.herokuapp.com/')

window.socket.emit('playOnlineRequest',info);
    
const username = "guest"
socket.on('chat-message',data =>{
    console.log(data)
})

var info ={
    username :"gg"
}
socket.on('connect',function(){
    console.log("hii")
})
socket.on('hh',function(d){
    console.log("hii",d);
})

Playerturn =true;

function send(){
    const message = messageInputt.value
    data = {
        msg : message,
        name:username
    }
    socket.emit('send-message',data)
    messageInputt.value = '' 
}
function setname(){
    const name = nameelement.value
    console.log(name)
    socket.emit("name",name)
}

socket.on('their',data=>{
    const msg = document.createElement('li')
    msg.innerText = data.name +":" +data.msg 
    msgcontainer.append(msg)
})




function Press(val1,val2,val3){
    
    
    window.socket.emit('playOnlineRequest',info);
    if(A[val1][val2]===0)
    {
        
        console.log(window.A)
        window.A[val1][val2]=1;
        Playerturn=false;
        var v1=val1+1;
        var v2=val2+1;
        document.getElementById('a'+v1+v2).style.backgroundColor='yellow';
    }
    
}

function array() {
    const a = [];
    window.A = [];
    for(var i=0; i<5; i++) {
        window.A[i] = [];
        for(var j=0; j<5; j++) {
            window.A[i][j] = 0;
        }
    }
    while(a.length < 25){
        var r = Math.floor(Math.random() * 25) + 1;
        if(a.indexOf(r) === -1) a.push(r);
    }
    var iterator = a.values();
    const a11 = document.getElementById('a11')
    const a12 = document.getElementById('a12')
    const a13 = document.getElementById('a13')
    const a14 = document.getElementById('a14')
    const a15 = document.getElementById('a15')

    const a21 = document.getElementById('a21')
    const a22 = document.getElementById('a22')
    const a23 = document.getElementById('a23')
    const a24 = document.getElementById('a24')
    const a25 = document.getElementById('a25')
    const a31 = document.getElementById('a31')
    const a32 = document.getElementById('a32')
    const a33 = document.getElementById('a33')
    const a34 = document.getElementById('a34')
    const a35 = document.getElementById('a35')
    const a41 = document.getElementById('a41')
    const a42 = document.getElementById('a42')
    const a43 = document.getElementById('a43')
    const a44 = document.getElementById('a44')
    const a45 = document.getElementById('a45')
    const a51 = document.getElementById('a51')
    const a52 = document.getElementById('a52')
    const a53 = document.getElementById('a53')
    const a54 = document.getElementById('a54')
    const a55 = document.getElementById('a55')

    a11.innerHTML = iterator.next().value;
    a12.innerHTML = iterator.next().value;
    a13.innerHTML = iterator.next().value;
    a14.innerHTML = iterator.next().value;
    a15.innerHTML = iterator.next().value;
    a21.innerHTML = iterator.next().value;
    a22.innerHTML = iterator.next().value;
    a23.innerHTML = iterator.next().value;
    a24.innerHTML = iterator.next().value;
    a25.innerHTML = iterator.next().value;
    a31.innerHTML = iterator.next().value;
    a32.innerHTML = iterator.next().value;
    a33.innerHTML = iterator.next().value;
    a34.innerHTML = iterator.next().value;
    a35.innerHTML = iterator.next().value;
    a41.innerHTML = iterator.next().value;
    a42.innerHTML = iterator.next().value;
    a43.innerHTML = iterator.next().value;
    a44.innerHTML = iterator.next().value;
    a45.innerHTML = iterator.next().value;
    a51.innerHTML = iterator.next().value;
    a52.innerHTML = iterator.next().value;
    a53.innerHTML = iterator.next().value;
    a54.innerHTML = iterator.next().value;
    a55.innerHTML = iterator.next().value;
    
 }