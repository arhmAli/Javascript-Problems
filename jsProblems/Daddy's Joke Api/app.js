const mainHeadin=document.querySelector(".headin");
const theButton=document.querySelector(".btn");
const jokes=document.querySelector(".list");

const dadJokes = async()=>{
    const jokeText=await getData();
    const newLi=document.createElement('li');
newLi.append(jokeText   );
jokes.append(newLi)
}
const getData = async()=>{
    try{
    const config = {headers:{ Accept:'application/json'} }
    const res = await axios.get('https://icanhazdadjoke.com/',config)
return res.data.joke;
    }
    catch (e){
        return "sorry no jokes here!"
    }
}

theButton.addEventListener('click',dadJokes)
