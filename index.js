const button = document.querySelector("button");
const ul = document.querySelector(".p");
const li = document.querySelector("li");
const newJokes = async () => {
  const joke = await RandomJokes();
  // const li = document.createElement("li");
  li.innerText = joke;
  // ul.append(li);
};
const RandomJokes = async () => {
  const res = await axios.get("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });
  return res.data.joke;
};
button.addEventListener("click", newJokes);
