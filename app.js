import {articles} from "./data.js";

const toggleBtn = document.querySelector(".btn");
const itemsDiv = document.querySelector(".items");

toggleBtn.addEventListener("click",() => {
    document.documentElement.classList.toggle("dark-mode");
});

const addItems = articles
    .map((article) =>{
        const {title, date, length, snippet} = article;
        const dateItem = date.toLocaleString("default", {month: "long", day:"numeric"});
        const year = date.getFullYear();
        return `<section class="item">
        <h3 class="titleItem">${title}</h3>
        <div class="subtitle">
            <span class="date">${dateItem},${year}</span>
            <span class="time">${length} min read</span>
        </div>
        <div class="contentItem">
            <p>${snippet}</p>
        </div>
    </section>`;
    }).join("");

itemsDiv.innerHTML = addItems;

