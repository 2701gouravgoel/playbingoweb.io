const socket = io('http://localhost:4000')
var matrix = [];
for(var i=0; i<5; i++) {
    matrix[i] = new Array(5);
}

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
const username = "guest"
socket.on('chat-message',data =>{
    console.log(data)
})

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

var matrix = [];
for(var i=0; i<5; i++) {
    matrix[i] = new Array(5);
}
function array() {
    var a = [];
    while(a.length < 25){
        var r = Math.floor(Math.random() * 25) + 1;
        if(a.indexOf(r) === -1) a.push(r);
    }
    var iterator = a.values();
    for (let i of iterator) 
    {   
        console.log(i+" ")
    }
    
    matrix[0][0]= iterator.next().value;
    matrix[0][1]= iterator.next().value;
    matrix[0][2]= iterator.next().value;
    matrix[0][3]= iterator.next().value;
    matrix[0][4]= iterator.next().value;
    
    matrix[1][0]= iterator.next().value;
    matrix[1][1]= iterator.next().value;
    matrix[1][2]= iterator.next().value;
    matrix[1][3]= iterator.next().value;
    matrix[1][4]= iterator.next().value;
    
    matrix[2][0]= iterator.next().value;
    matrix[2][1]= iterator.next().value;
    matrix[2][2]= iterator.next().value;
    matrix[2][3]= iterator.next().value;
    matrix[2][4]= iterator.next().value;
    
    matrix[3][0]= iterator.next().value;
    matrix[3][1]= iterator.next().value;
    matrix[3][2]= iterator.next().value;
    matrix[3][3]= iterator.next().value;
    matrix[3][4]= iterator.next().value;
    
    matrix[4][0]= iterator.next().value;
    matrix[4][1]= iterator.next().value;
    matrix[4][2]= iterator.next().value;
    matrix[4][3]= iterator.next().value;
    matrix[4][4]= iterator.next().value;

    a11.textContent = matrix[0][0];
    a12.textContent = matrix[0][1];
    a13.textContent = matrix[0][2];
    a14.textContent = matrix[0][3];
    a15.textContent = matrix[0][4];
    a21.textContent = matrix[1][0];
    a22.textContent = matrix[1][1];
    a23.textContent = matrix[1][2];
    a24.textContent = matrix[1][3];
    a25.textContent = matrix[1][4];
    a31.textContent = matrix[2][0];
    a32.textContent = matrix[2][1];
    a33.textContent = matrix[2][2];
    a34.textContent = matrix[2][3];
    a35.textContent = matrix[2][4];
    a41.textContent = matrix[3][0];
    a42.textContent = matrix[3][1];
    a43.textContent = matrix[3][2];
    a44.textContent = matrix[3][3];
    a45.textContent = matrix[3][4];
    a51.textContent = matrix[4][0];
    a52.textContent = matrix[4][1];
    a53.textContent = matrix[4][2];
    a54.textContent = matrix[4][3];
    a55.textContent = matrix[4][4];
 }