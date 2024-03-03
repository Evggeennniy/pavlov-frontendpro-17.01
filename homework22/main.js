const body = document.body;
const img = document.createElement("img");
img.setAttribute("src", `./images/${Math.floor(Math.random() * 9 + 1)}.jpg`);
body.append(img);
