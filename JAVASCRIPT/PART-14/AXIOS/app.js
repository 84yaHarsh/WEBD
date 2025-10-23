let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let facts = await getFacts();
  console.log(facts);
  let p = document.querySelector('#result');
  p.innerText = facts;
});

let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (err) {
    console.log(err);
    return "No facts found";
  }
}
