class EditAlunoContorller {
    constructor(model, view, service) {
        this.model = model
        this.view = view
        this.service = service
        this.view.render(model)
    }

    edit(aluno, nome){
        aluno.nome = nome

        const notas = {}
        const materiasrow = Array.from(this.view.container.querySelectorAll("[data-materia]"))

        materiasrow.forEach(row => {
            const notasrow = Array.from(row.querySelectorAll("[data-trimestre]"))
            
            notas[row.getAttribute("data-materia")] = notasrow.map(nota => parseFloat(nota.value) || 0)
        })

        aluno.notas = notas
        this.service.edit(aluno)
    }
}