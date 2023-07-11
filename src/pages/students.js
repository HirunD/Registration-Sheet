import "../config/DataList2";
import * as XLSX from 'xlsx/xlsx.mjs';

const handleOnExport = () => {
 setTimeout(() => {
  var workbook = XLSX.utils.book_new();
  var ws = XLSX.utils.table_to_sheet(document.getElementById("wrap-2"));


  XLSX.utils.book_append_sheet(workbook, ws, "MySheet1");

  XLSX.writeFile(workbook, "sheetjs.xlsx");
 }, 1500);
}

function Students() {
  const refresh = () => window.location.reload(true);
  const home = () => window.location.href = "/";
  return (
    <>
    <table class="table" id="wrap-2">
      <thead>
        <tr>
          <th><abbr title="Position">Name</abbr></th>
          <th><abbr title="Played">School</abbr></th>
          <th><abbr title="Won">Age</abbr></th>
          <th><abbr title="Drawn">Event</abbr></th>
        </tr>
      </thead>
    </table>
    <div class="notification centered ">
      <button class="button is-link mr-6" onClick={handleOnExport}>Download</button>
      <button class="button is-danger mr-6" onClick={refresh}>Refresh</button>
      <button class="button is-primary" onClick={home}>Home</button>
      </div>
    </>
  );
}

export default Students;
