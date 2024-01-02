const insert = document.querySelector('#insert')

window.addEventListener('keydown', function(e){
    insert.innerHTML = `
        <div class="color">
        <h5>Pressed KEY details:</h5>
        <table>
        <tr>
          <th>Key</th>
          <th>Ascii Code</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === " " ? "Space":e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
        </table>      
        </div>
    `
})