exports.getAllProfessores = (req, res) => {
    return res.json(professores)
};

exports.createProfessor = (req, res) => {
    const novoProfessor = req.body;
    professores.push(novoProfessor);

    res.status(201).json(
        {'mensagem': 'Professor Inserido com sucesso'}
    );
};

exports.getProfessorById = (req, res) => {
    const professorId = req.params.id;
    const professor = professores.find(u => u.id == professorId);
    if(!professor){
        return res.status(404).json(
            {'mensagem': 'Professor não encontrado'}
        )
    }
    return res.json(professor)
}

exports.getTurmaProfessorById = (req, res) => {
    const professorId = req.params.id;
    const professor = professores.find(u => u.id == professorId)
    if(!professor){
        return res.status(404).json(
            {'mensagem': 'Professor não encontrado'}
        )
    }
    return res.json(professor.turmas)
}

exports.getProfessoresByDep = (req, res) => {
    const departamento = req.params.departamento;
    const profDepartamento = professores.filter(u => u.departamento == departamento)
    if(!profDepartamento){
        return res.status(404).json(
            {'mensagem': 'Departamento não existente || Sem professores nesse departamento'}
        )
    }
    return res.json(profDepartamento)
}

exports.updateProfessor = (req, res) => {
    const professorId = req.params.id;
    const profUpd = req.body;
    const profPosicaoArray = professores.findIndex(u => u.id == professorId)
    const professorAntigo = professores[profPosicaoArray]

    if(profPosicaoArray === -1){
        return res.status(404).json(
            {'mensagem': 'ID não existente'}
        )
    }

    professores[profPosicaoArray] = {
        "id": profUpd.id || professorAntigo.id,
        "nome": profUpd.nome || professorAntigo.nome,
        "idade": profUpd.idade || professorAntigo.idade,
        "departamento": profUpd.departamento || professorAntigo.departamento,
        "turmas": profUpd.turmas || professorAntigo.turmas,
    }
    return res.json(professores[profPosicaoArray])    
}

exports.deletarProfessor = (req, res) => {
    const professorId = req.params.id;
    const profPosicaoArray = professores.findIndex(u => u.id == professorId)

    if(profPosicaoArray === -1){
        return res.status(404).json(
            {'mensagem': 'id inexistente'}
        )
    }

    professores.splice(profPosicaoArray, 1);
    return res.json(professores)
}

exports.updateTurma = (req, res) => {
    const professorId = req.params.id
    const professor = professores.find(u => u.id == professorId)
    const turmaNova = req.body

    if(!professor){
         return res.status(404).json(
            {'mensagem': 'id inexistente'}
        )
    }

    professor.turmas.push(turmaNova)
    return res.json(
        {'mensagem': 'Turma adicionada com sucesso'}
    )

}

const professores = [
    {
    "id": "1",
    "nome": "Prof. Carlos",
    "idade": 40,
    "departamento": "Matemática",
    "turmas": [
      { 
        "codigo": "9A", 
        "disciplina": "MAT101", 
        "alunos": ["João", "Maria", "Pedro"] 
      },
      { 
        "codigo": "10A", 
        "disciplina": "MAT201", 
        "alunos": ["Ana", "Luiz"]
      }
    ]
  },
  {
    "id": "2",
    "nome": "Prof. Ana",
    "idade": 35,
    "departamento": "História",
    "turmas": [
      { 
        "codigo": "9A", 
        "disciplina": "HIS101", 
        "alunos": ["João", "Pedro"] 
      },
      { 
        "codigo": "10B", 
        "disciplina": "HIS201", 
        "alunos": ["Maria", "Carlos", "Luiza"]
      }
    ]
  },
  {
    "id": "3",
    "nome": "Prof. João",
    "idade": 50,
    "departamento": "Ciências",
    "turmas": [
      { 
        "codigo": "9A", 
        "disciplina": "CIE101", 
        "alunos": ["João", "Maria"]
      },
      { 
        "codigo": "9B", 
        "disciplina": "CIE101", 
        "alunos": ["Pedro", "Luiz"]
      }
    ]
  }
]