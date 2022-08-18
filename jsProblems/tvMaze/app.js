const formGet=document.querySelector('.theForm');
const theBtn=document.querySelector('button');
formGet.addEventListener('submit',async function(e){
    e.preventDefault();
    const searchValue=formGet.elements.query.value;
    const config={ params:{q:searchValue}}
    const res=await axios.get(`https://api.tvmaze.com/search/shows`,config);
    theImages(res.data)
    formGet.elements.query.value='';
})
const theImages=(giveImage)=>{
    for (let result of giveImage){
        if (result.show.image){
            const img=document.createElement('img');
            img.src=result.show.image.medium;
            document.body.append(img);
            formGet.addEventListener('click',async function(){
                document.body.removeChild(img);
            })
        }
    }
}

