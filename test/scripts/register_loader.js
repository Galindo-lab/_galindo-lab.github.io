

const target = document.getElementById("lista-registros");

window.onload = () => {
  for(element in registers) {
    href = registers[element]["href"]
    author = registers[element]["author"]
    year = registers[element]["year"]
    
    target.innerHTML += `
      <section class="book">
        <a href='${href}'>${element}</a>
        <br/>
        <sub>${author}, ${year}</sub>
      </section>
    `
  }
}
