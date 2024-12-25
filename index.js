    

const mytext = 'Hello My name is Anvesh. I am a Front end developer';
const divwrap = document.getElementById("wrapper");

let index =0;

writeText =() =>{
    divwrap.innerText = mytext.slice(0,index);
    index++;
    if(index > mytext.length)
        {
            index = 0;
        }
}
setInterval(writeText,100)