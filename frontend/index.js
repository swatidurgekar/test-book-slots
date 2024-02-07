// import axios from "axios";

const listdiv = document.getElementsByClassName("list");
const url = "http://localhost:3000/";

function bookslot(id) {
  console.log(id);
}

async function getSlots() {
  const result = await axios.get(`${url}`);
  result.data.slots.map((slot) => {
    const div = document.createElement("div");
    div.id = slot.id;
    div.className = "listOfSlot";
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    span1.textContent = slot.time;
    span2.textContent = slot.numberofslots + " slots";
    div.appendChild(span1);
    div.appendChild(span2);
    div.addEventListener("click", () => bookslot(div.id));
    listdiv[0].appendChild(div);
  });
}
getSlots();

const form = document.getElementsByClassName("form")[0];
form.className = "displaynone";
