
import { db } from "./config/firebase"; // update with your path to firestore config
import { collection, query, where, getDocs } from "firebase/firestore";
import "bulma/css/bulma.min.css";

let school = [];

const q = query(collection(db, "schools"));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  school.push(doc.data().name);
  school.push(doc.data().adress);
  school.push(doc.data().email);
  school.push(doc.data().whatsapp);

  console.log("array: ", school);
});

var table = "<tr>", perrow = 4;
school.forEach((value, i) => {
  table += `<td>${value}</td>`;
  var next = i + 1;
  if (next%perrow==0 && next!=school.length) { table += "</tr><tr>"; }
});
table += "</tr>";


setTimeout(() => {
    document.getElementById("wrap").innerHTML += table;
}, 1000);