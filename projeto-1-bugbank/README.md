# Projeto 1 — Testes Manuais | BugBank

Este projeto faz parte do meu portfólio de QA e tem como objetivo 
documentar a prática de testes manuais em um sistema bancário fictício 
chamado BugBank. Todo o trabalho foi feito de forma independente, sem 
experiência profissional prévia, com o objetivo de desenvolver e 
demonstrar habilidades reais de teste de software.

---

# 🎯 Objetivo

Aplicar técnicas de teste manual — como Equivalence Partitioning (EP) 
e Boundary Value Analysis (BVA) — para mapear, executar e documentar 
casos de teste, identificar defeitos e registrá-los em formato 
profissional de bug report.

---

# 🌐 Sistema Testado

- Nome:  BugBank
- URL:  https://bugbank.netlify.app
- Descrição: Aplicação web bancária fictícia criada para fins de 
  prática em testes de software. Não possui banco de dados real — 
  os dados são armazenados no localStorage do navegador.

---

# 🛠️ Ferramentas Utilizadas

- Google Chrome (aba anônima) — execução dos testes
- GitHub — versionamento e documentação
- Snipping Tool — captura de evidências

---

# 📁 Estrutura do Projeto

```
projeto-1-bugbank/
├── plano-de-testes.md       ← escopo, critérios e assunções de requisitos
├── casos-de-teste.md        ← 10 casos de teste com técnica e resultado
├── relatorio-de-bugs.md     ← 2 bugs documentados com passos e evidências
└── README.md                ← este arquivo
```

---

## 📊 Resumo da Execução

| Métrica | Resultado |
|---|---|
| Total de casos de teste | 10 |
| Casos que passaram | 8 |
| Casos que falharam | 2 |
| Bugs encontrados | 2 |

---

# 🐞 Bugs Encontrados

BUG-001 — Sistema aceita senha com apenas 2 dígitos no cadastro  
*Severidade: Alta

BUG-002 — Extrato não exibe o tipo da transação  
*Severidade: Média

O detalhamento completo de cada bug (passos para reprodução, 
resultado esperado vs. obtido e evidências) está em 
está em [`relatorio-de-bugs.md`](./relatorio-de-bugs.md).
.

---

# 📝 Observação sobre Requisitos

O BugBank não possui documentação formal (SRS). Alguns comportamentos 
esperados foram definidos por mim com base em boas práticas de mercado. 
Todas as assunções estão listadas na seção 8 do 
seção 8 do [`plano-de-testes.md`](./plano-de-testes.md).
.

---

## 👩‍💻 Sobre mim ##

Em transição para a área de QA, com foco em construir base técnica
sólida em testes manuais e automação. Este projeto reflete minha
dedicação em aprender e aplicar na prática o processo real de
garantia de qualidade — desde o planejamento dos testes até o
registro de defeitos.

📎 [Ver portfólio completo](../README.md)

