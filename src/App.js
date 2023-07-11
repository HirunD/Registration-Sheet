import { useState, useEffect } from "react";
import "./DataList";

function App() {
  return (
    <table class="table" id="wrap">
       <thead>
    <tr>
      <th><abbr title="Position">School</abbr></th>
      <th><abbr title="Played">Adress</abbr></th>
      <th><abbr title="Won">Email</abbr></th>
      <th><abbr title="Drawn">Whatsapp No</abbr></th>
    </tr>
  </thead>
    </table>
  );
}

export default App;
