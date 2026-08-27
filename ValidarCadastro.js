const aluno1 = {
  nome: "Lucas Rodrigues Xavier",
  idade: 17,
  cursando: ["TC", "BD", "IA"],
  presenca: ["2022-01-01", "2022-01-02", "2022-01-03", "2022-01-04"],
  RA: "22230021"
};

const aluno2 = {
  nome: "Marcos",
  idade: 5,
  cursando: ["INFO", "ADM"],
  presenca: ["2022-01-01"],
  RA: "222848"
};

function validarNome(aluno) {
  if (!aluno.nome || aluno.nome.length < 10) {
    console.log(`❌ [Nome]: "${aluno.nome || ''}" inválido. Deve possuir no mínimo 10 caracteres.`);
    return false;
  }
  return true;
}

function validarIdade(aluno) {
  const idade = Number(aluno.idade);
  if (isNaN(idade) || idade < 14) {
    console.log(`❌ [Idade]: ${aluno.idade} anos inválido. A idade mínima obrigatória é 14 anos.`);
    return false;
  }
  return true;
}

function validarCursos(aluno) {
  const cursos = aluno.cursando || aluno.cursos;
  if (!Array.isArray(cursos) || cursos.length < 3) {
    console.log(`❌ [Cursos]: ${cursos ? cursos.length : 0} curso(s) selecionado(s). Mínimo exigido: 3 disciplinas.`);
    return false;
  }
  return true;
}

function validarAssiduidade(aluno) {
  const presenca = aluno.presenca || aluno.presença;
  if (!Array.isArray(presenca) || presenca.length === 0) {
    console.log("❌ [Assiduidade]: Histórico de frequência inválido ou não registrado.");
    return false;
  }
  return true;
}

function validarRA(aluno) {
  const ra = aluno.RA || aluno.ra;
  if (!ra || String(ra).trim().length < 6) {
    console.log("❌ [RA]: Registro Acadêmico inválido ou com formato incorreto.");
    return false;
  }
  return true;
}

function validarCadastro(aluno) {
  console.log(`\n--------------------------------------------------`);
  console.log(`🔍 Validando cadastro de: ${aluno.nome}...`);
  
  const nomeValido = validarNome(aluno);
  const idadeValida = validarIdade(aluno);
  const cursosValidos = validarCursos(aluno);
  const assiduidadeValida = validarAssiduidade(aluno);
  const raValido = validarRA(aluno);

  const aprovado = nomeValido && idadeValida && cursosValidos && assiduidadeValida && raValido;

  if (aprovado) {
    const response = {
      status: "valid",
      message: "Aluno aprovado em todas as regras de matrícula!",
      aluno: aluno
    };
    console.log("✅ Resultado:", response.message);
    return response;
  } else {
    console.log("⚠️ Resultado: Cadastro reprovado devido a inconsistências acima.");
    return {
      status: "invalid",
      message: "Cadastro contém pendências com as regras da instituição.",
      aluno: aluno
    };
  }
}

// Execução dos testes
console.log("=== SISTEMA DE VALIDAÇÃO DE MATRÍCULAS ===");
validarCadastro(aluno1);
validarCadastro(aluno2);
