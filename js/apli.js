const alunosservide = new AlunosService()

const Alunosview = new AlunosView(document.querySelector("[data-table-alunos]"), new MateriasService().materias)

const alunoscontroler = new AlunosController(alunosservide, Alunosview)


document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault()
  const nome = document.getElementById("first_name").value

  alunoscontroler.add({ nome })

})

document.getElementById("search_name").addEventListener("input", function(){
  const name = this.value
  sessionStorage.setItem("search", name)
  
  if(name.length > 2 || name.length === 0){
    alunoscontroler.busca(name)
  }
})

const evente = new Event("input")

if(sessionStorage.getItem("search")){
  document.getElementById("search_name").value = sessionStorage.getItem("search")
  document.getElementById("search_name").dispatchEvent(evente)
}