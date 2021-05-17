class AlunosService{
    constructor(){
        this.alunos = []
        this.updatelistalocalstorage()
    }

    add(aluno){
        if(!aluno instanceof AlunoModel){
            throw TypeError("aluno must be an instance of alunomodel")
        }
        this.alunos.push(aluno)
        this.updadeteLocal()
    }

    edit(aluno){
        aluno.generateAvarege()
        this.updadeteLocal()
    }

    searchAlunoId(id){
        return this.alunos.find(aluno => aluno._id === id)
    }

    busca(name){
        return this.alunos.filter(aluno => aluno.nome.indexOf(name) >= 0)
    }

    updadeteLocal(){
        const alunos = JSON.stringify(this.alunos)
        localStorage.setItem("alunos", alunos)
    }

    updatelistalocalstorage(){
        const local = localStorage.getItem("alunos")
        if(local){
            const alunos = JSON.parse(local)
            alunos.forEach(aluno => {
                this.add(new AlunoModel(aluno))                
            });
        }
    }
}