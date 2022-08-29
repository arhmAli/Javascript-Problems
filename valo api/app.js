const theBtn=document.querySelector('button');
const newLi=document.querySelector('li');

const gunImages=async function(){
    const theSkins= await axios.get("https://valorant-api.com/v1/weapons/skins?data");
    // let displayPic=document.createElement('img');
    // displayPic.src=theSkins.data.data[0].displayIcon;
    theImages(theSkins.data.data);
    // displayPic.append(theSkins.data.data[0].displayIcon);
    // displayPic.append(newLi);
    // document.body.append(displayPic);
    
}
theBtn.addEventListener('click',gunImages);
const theImages=(giveImage)=>{
    for (let i=[0];i<=[10];i++){
     const img=document.createElement('img');
            img.src=giveImage[i].displayIcon;
            document.body.append(img);
        }
        }
// const list=()=>{
    
// }
// const theImg=(giveImage)=>{
// for (let elem of theSkins){
// console.log(elem);
// }
// }