function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   function onClick() {
      const searchText = document.getElementById('searchField').value.toLowerCase();
      const rows = document.querySelectorAll('tbody tr');
      rows.forEach(function(row) {
         const rowData = row.textContent.toLowerCase();
         if (rowData.includes(searchText)) {
            row.classList.add('select');
         } else {
            row.classList.remove('select');
         }
      });
   }
}
