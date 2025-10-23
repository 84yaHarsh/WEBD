let btn = document.querySelector('button');
let url = "https://dog.ceo/api/breeds/image/random";
btn.addEventListener("click",async ()=>{
     let link = await getImage();
     let img = document.querySelector("img");
     img.setAttribute("src",link);
     console.log(link);
})
async function getImage(){
    try{
        let img = await axios.get(url);
        return img.data.message;
}
catch(err){
    console.log(err);
    return "NO IMAGE FOUND";
}
    }
  


