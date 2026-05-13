
alert("Script loaded from Vercel");
console.log("External script loaded");

const p = document.createElement("p");

p.innerText =
  "This paragraph is added by external script.js";

document.body.appendChild(p);
