class AlunosController{
    constructor(service,view){
        view.mostraaluno(service.alunos)
        this.view = view
        this.service = service
    }

    add(aluno){
        this.service.add(new AlunoModel(aluno))
        this.view.mostraaluno(this.service.alunos)
    }

    busca(name){
        const dados = this.service.busca(name)
        this.view.mostraaluno(dados)
    }
}