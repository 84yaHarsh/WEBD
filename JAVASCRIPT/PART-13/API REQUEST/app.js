let url = "https://catfact.ninja/fact?max_length=140";
fetch(url)
.then((res)=>{ // gets HTTP response object
    console.log(res);
    return res.json();   // & converts to JSON to js object
})
.then((data)=>{    // get actual data
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});

