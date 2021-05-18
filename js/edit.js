import { MateriasService } from "./Services/materias.service.js"
import { AlunosService } from "./Services/Alunos.service.js"
import {EditAluniView} from "./views/editaluno.view.js"
import {EditAlunoContorller} from "./controllers/editaluno.controler.js"


const alunosService = new AlunosService()

const paramString = window.location.search
const pransURL = new URLSearchParams(paramString)
const id = parseInt(pransURL.get("id"))

const aluno = alunosService.searchAlunoId(id)

document.getElementById("first_name").value = aluno.nome

const editAlunoView = new EditAluniView(document.querySelector("[data-edit-aluno-form]"), new MateriasService().materias)

const editaluno = new EditAlunoContorller(aluno, editAlunoView, alunosService)

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault()
    const nome = document.querySelector("#first_name").value

    editaluno.edit(aluno, nome)
    window.location.assign("index.html")
})