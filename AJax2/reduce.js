const alunos = [{
    aluno:'John',bolsista:false,nota:10
},
{
    aluno:'ANA',bolsista:true,nota:8
}]

console.log(alunos.map(e=>e.bolsista).reduce((obj1,obj2) => obj1 && obj2))