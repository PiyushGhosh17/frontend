const apps = [
  { name: "Netflix", path: "images/netflix.png" },
  { name: "Amazone Prime", path: "images/prime.png" },
  { name: "Hotstar", path: "images/hotstar.jpeg" },
];

const elements = document.getElementById("apps");
elements.style.fontSize = "40px";
apps.forEach (item=>{
    let image = document.createElement("img");
    image.src = item.path;
    image.width = 30;
    image.height = 30;
    image.style.borderRadius="5px";
    image.style.marginRight="5px";
    const txt = document.createTextNode(item.name);
    const node = document.createElement("li");
    node.append(image, txt);
    elements.appendChild(node);
}) 






