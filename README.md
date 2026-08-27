# 🛡️ Validador de Cadastro de Alunos em JavaScript

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Regras de Negócio](https://img.shields.io/badge/Módulo-Validação%20de%20Dados-blue?style=for-the-badge)](https://developer.mozilla.org/)
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE)

Motor de **validação de formulários e regras de negócio** em **JavaScript**, projetado para verificar a conformidade de dados cadastrais de estudantes em sistemas educacionais antes de sua persistência.

---

## 📋 Regras de Negócio Validadas

O script `ValidarCadastro.js` aplica um conjunto de verificações modulares sobre o objeto do aluno:

1. 👤 **Validação de Nome (`validarNome`):** Garante que o nome possua comprimento mínimo de caracteres para evitar preenchimentos incompletos.
2. 🎂 **Validação de Idade (`validarIdade`):** Assegura que o aluno tenha a idade mínima permitida para matrícula ($ge 14$ anos).
3. 📚 **Validação de Cursos (`validarCursos`):** Confere se o aluno selecionou a grade mínima obrigatória de matérias simultâneas.
4. 📅 **Validação de Assiduidade (`validarAssiduidade`):** Checa a integridade das datas de presença registradas.
5. 🎓 **Validação de RA (`validarRA`):** Confere se o Registro Acadêmico está presente e no padrão exigido.
6. 🎯 **Orquestrador (`validarCadastro`):** Executa todas as funções encadeadas e retorna o objeto de resposta:
   ```javascript
   {
       status: "valid",
       message: "Válido",
       aluno: { ... }
   }
   ```

---

## 🧪 Casos de Teste Inclusos

O código já possui cenários pré-configurados:
- **`aluno1` (Válido):** Cadastro completo atendendo a todos os requisitos.
- **`aluno2` (Inválido):** Cadastro com idade abaixo da permitida e pendências de cursos.

---

## 🚀 Como Executar

```bash
# Clonar o repositório
git clone https://github.com/lucaxaviers/validacao-cadastro-alunos.git

# Acessar a pasta
cd validacao-cadastro-alunos

# Executar com Node.js
node ValidarCadastro.js
```

---

> **Desenvolvido por Lucas Rodrigues Xavier**  
> *Projeto acadêmico com foco em regras de negócio e validações em JavaScript.*
