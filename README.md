<div align="center">

# 🛡️ Validador de Cadastro de Alunos em JavaScript

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/M%C3%B3dulo-Valida%C3%A7%C3%A3o%20de%20Dados-blue?style=for-the-badge" alt="Validador" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

<p align="center">
  Motor de validação de regras de negócio em JavaScript para conferência cadastral de estudantes antes da matrícula.
</p>

---

</div>

## 📋 Regras de Validação

```mermaid
flowchart TD
    A[Objeto Aluno] --> B{Nome >= 10 letras?}
    B -- Não --> B1[Erro: Nome Inválido]
    B -- Sim --> C{Idade >= 14 anos?}
    C -- Não --> C1[Erro: Idade Mínima Não Atingida]
    C -- Sim --> D{Cursos >= 3?}
    D -- Não --> D1[Erro: Cursos Insuficientes]
    D -- Sim --> E{Assiduidade & RA Válidos?}
    E -- Sim --> F[Status: Valido]
```

1. **`validarNome`:** Comprimento mínimo de caracteres.
2. **`validarIdade`:** Idade mínima de 14 anos.
3. **`validarCursos`:** Mínimo de 3 disciplinas selecionadas.
4. **`validarAssiduidade`:** Histórico de frequência em formato ISO.
5. **`validarRA`:** Formato de Registro Acadêmico.

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

<div align="center">
  <sub>Desenvolvido no contexto de Engenharia de Software</sub>
</div>
