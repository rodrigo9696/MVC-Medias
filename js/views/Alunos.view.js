export class AlunosView {
    constructor(table, materias) {
        this.tableList = table
        this.tableHeader = this.tableList.querySelector("thead")
        this.tablebody = this.tableList.querySelector("tbody")
        this.materias = materias
        this.renderiza()
    }

    renderiza() {
        const htmlHeader = document.createElement("tr")
        htmlHeader.innerHTML = "<td>Nome</td>"

        let htmlheadermaterias = this.materias.map(materia => {
            return "<td class='center'>" + materia + "</td>"
        }).join("")
        htmlHeader.innerHTML += htmlheadermaterias
        this.tableHeader.appendChild(htmlHeader)
    }

    mostraaluno(alunos) {
        this.tablebody.innerHTML = ""
        alunos.forEach(aluno => {
            const htmlbody = document.createElement("tr")
            let htmlmedias = `<td><a href="edit.html?id=${aluno._id}">${aluno.nome}</a></td>`
            let encontrado = false

            this.materias.forEach(materia =>{
                if(materia in aluno.notas){
                    encontrado = true
                }
            })

            if(encontrado){
                this.materias.forEach(materia => {
                    htmlmedias += `<td class='center'>
                        ${aluno.media[materia] !== undefined ?
                            aluno.media[materia] :
                            `<a href="edit.html?id=${aluno._id}">Incluir Nota</a>`
                        }
                    </td>`
                })
            }else{
                htmlmedias += `<td class="center" colspan="${this.materias.length}">
                    <a href="edit.html?id=${aluno._id}">Incluir Notas</a>
                </td>`
            }

            
            htmlbody.innerHTML = htmlmedias
            this.tablebody.appendChild(htmlbody)
        })
    }
}