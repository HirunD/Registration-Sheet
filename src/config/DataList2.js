import { db } from "./firebase"; 
import { collection, query, where, getDocs } from "firebase/firestore";
import "bulma/css/bulma.min.css";

let students = [];

const q = query(collection(db, "students"));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  students.push(doc.data().name);
  students.push(doc.data().school);
  students.push(doc.data().age);
  students.push(doc.data().event);

  console.log("array: ", students);
});

var table = "<tr>", perrow = 4;
students.forEach((value, i) => {
  table += `<td>${value}</td>`;
  var next = i + 1;
  if (next%perrow==0 && next!=students.length) { table += "</tr><tr>"; }
});
table += "</tr>";


setTimeout(() => {
  try {
    document.getElementById("wrap-2").innerHTML += table;
  } catch (error) {
    console.log(error);
  }
}, 2000);

export default students;