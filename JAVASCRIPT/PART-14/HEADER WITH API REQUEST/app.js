let url = "https://catfact.ninja/fact";
async function getCatFacts(){
    try{
         const config = {headers : {Accept : "text/html"}};
         let cF = await axios.get(url,config);
         console.log( cF.data);
    }
    catch(err){
        console.log(err);
        return "NO FACT FOUND";
    }
  
}
