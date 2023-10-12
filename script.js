"use strict";

const data = [
  {
    title : "Cat",
    content : "Cat is a very playful pet.",
    img : "img/cat.png",
  },
  {
    title : "Dog",
    content : "Dog is a very faithful pet.",
    img : "img/dog.png",
  },
  {
    title : "Guinea Pig",
    content : "Guinea Pig  is a very lazy pet.",
    img : "img/guinea.png",
  },
  {
    title : "Rabiit",
    content : "Rabbit is a very naughty pet.",
    img : "img/rabbit.png",
  },
]

const image = document.querySelector("img");
const title = document.querySelector("h2");
const content = document.querySelector("p");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const randomBtn = document.querySelector("button");

let index = 0;

const render = (currentIndex) =>{
  const element = data[currentIndex];
  image.src = element.img;
  title.innerText = element.title;
  content.innerText = element.content;
}
window.addEventListener("DOMContentLoaded",()=>{
  render(index);
})

nextBtn.addEventListener("click",()=>{
    ++index;
 if ( index > data.length - 1){
  index = 0;
 }
 render(index);
})

prevBtn.addEventListener("click",()=>{
 --index;
 if ( index < 0){
  index = data.length - 1;
 }
 render(index)
})

randomBtn.addEventListener("click",()=>{
  const randomIndex = Math.trunc(Math.random()* data.length)
  render(randomIndex)
})