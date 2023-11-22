const card = document.querySelector(".card");
const btn = document.querySelector("#srcBtn");
let result;

async function gitdata(namee) {
  try {
    const raw = await fetch(`https://api.github.com/users/${namee}`);
    const data = await raw.json();
    card.innerHTML = `<img src="${data.avatar_url}"
    alt="">
    <h1>Name</h1>
    <a href="${data.html_url}">${data.name}</a>
    <h2>Followers: ${data.followers}</h2>
    <h2>Public repo: ${data.public_repos}</h2>`;
  } catch (err) {
    alert(err);
  }
}
btn.addEventListener("click", (e) => {
  e.preventDefault();
  result = document.querySelector("#search").value;
  gitdata(result);
});
