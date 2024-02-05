
// const rootnode = document.getRootNode();
// const htmlelementNode = rootnode.childNodes[0];

// console.log(htmlelementNode.childNodes);
//  const text=htmlelementNode.childNodes[0];
//  const body=htmlelementNode.childNodes[1];
// console.log(text.nextSibling);
// console.log(text.nextSibling.nextElementSibling);


const h1 = document.querySelector("h1");
const h1parent = h1.parentElement;
const body = h1.parentElement.parentElement;
  console.log(h1parent);
  body.style.backgroundColor = "red"
  h1parent.style.color = "#ffffff";
  h1parent.style.padding= "0.8rem"
  h1parent.style.borderRadius = " 1rem"
  h1parent.style.backgroundColor = "blue"


