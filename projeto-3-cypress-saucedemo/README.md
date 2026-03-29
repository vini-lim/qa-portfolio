# Projeto 3 — Automação E2E | SauceDemo | Cypress

![Cypress Tests](https://github.com/vini-lim/qa-portfolio/actions/workflows/cypress.yml/badge.svg)

Este projeto faz parte do meu portfólio de QA e tem como objetivo demonstrar
automação de testes E2E utilizando **Cypress**, **Cucumber (BDD)** e **Page Object Model (POM)**.
Os testes rodam automaticamente a cada push via **GitHub Actions (CI/CD)**.

---

## 🎯 Objetivo

Automatizar fluxos críticos da aplicação SauceDemo validando comportamentos
esperados e inesperados através de cenários escritos em linguagem natural (Gherkin),
conectados a código JavaScript organizado com Page Object Model.

---

## 🌐 Aplicação Testada

- **Nome:** SauceDemo
- **URL:** https://www.saucedemo.com
- **Tipo:** E-commerce fictício criado para prática de automação de testes
- **Credenciais de teste:** `standard_user` / `secret_sauce`

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Função |
|---|---|
| **Cypress** | Framework de automação E2E |
| **Cucumber** | Plugin BDD para Cypress |
| **Gherkin** | Linguagem para escrita dos cenários |
| **Page Object Model** | Padrão de organização do código |
| **GitHub Actions** | CI/CD — execução automática dos testes |
| **Node.js** | Runtime JavaScript |

---

## 📁 Estrutura do Projeto
```
projeto-3-cypress-saucedemo/
├── cypress/
│   ├── e2e/
│   │   └── features/
│   │       ├── login.feature        ← cenários de login
│   │       ├── carrinho.feature     ← cenários do carrinho
│   │       ├── checkout.feature     ← cenários de checkout
│   │       └── logout.feature       ← cenários de logout
│   └── support/
│       ├── pages/
│       │   ├── LoginPage.js         ← Page Object da tela de login
│       │   ├── CarrinhoPage.js      ← Page Object do carrinho
│       │   ├── CheckoutPage.js      ← Page Object do checkout
│       │   └── NavPage.js           ← Page Object da navegação
│       ├── step_definitions/
│       │   ├── login.steps.js       ← steps do Gherkin para login
│       │   ├── carrinho.steps.js    ← steps do Gherkin para carrinho
│       │   ├── checkout.steps.js    ← steps do Gherkin para checkout
│       │   └── logout.steps.js      ← steps do Gherkin para logout
│       └── e2e.js                   ← suporte global do Cypress
├── docs/
│   ├── plano-de-testes.md           ← escopo e estratégia
│   └── relatorio-de-bugs.md         ← bugs e ajustes encontrados
├── .github/
│   └── workflows/
│       └── cypress.yml              ← pipeline CI/CD
├── cypress.config.js
├── package.json
└── README.md
```

---

## 📊 Cobertura de Testes

| Feature | Cenários | Caminho Feliz | Negativo | Status |
|---|---|---|---|---|
| Login | 4 | 1 | 3 | ✅ |
| Carrinho | 4 | 3 | 1 | ✅ |
| Checkout | 3 | 1 | 2 | ✅ |
| Logout | 2 | 1 | 1 | ✅ |
| **Total** | **13** | **6** | **7** | **✅ 100%** |

---

## 🧠 Conceitos Aplicados

**BDD (Behavior Driven Development)**
Testes escritos em linguagem natural com Gherkin (`Given/When/Then`),
permitindo que qualquer pessoa da equipe entenda o que está sendo testado
sem precisar conhecer código.

**Page Object Model (POM)**
Cada página da aplicação tem sua própria classe JavaScript com seletores
e ações encapsulados. Isso evita repetição de código e facilita manutenção
— se um seletor mudar, você corrige em um lugar só.

**CI/CD com GitHub Actions**
A cada push na branch `main`, o GitHub sobe automaticamente uma máquina
virtual, instala as dependências e executa todos os 13 cenários.
O resultado aparece diretamente no repositório com o badge de status.

---

## 🚀 Como Rodar Localmente

### Pré-requisitos
- Node.js instalado
- Google Chrome instalado

### Instalação
```bash
# Clone o repositório
git clone https://github.com/vini-lim/qa-portfolio.git

# Entre na pasta do projeto
cd qa-portfolio/projeto-3-cypress-saucedemo

# Instale as dependências
npm install
```

### Executar em modo visual (recomendado para desenvolvimento)
```bash
npm run test:open
```

### Executar em modo headless (como no CI/CD)
```bash
npm test
```

---

## 👨‍💻 Sobre mim

Em transição para a área de QA, com foco em construir base técnica
sólida em testes manuais e automação. Este projeto reflete minha
dedicação em aprender e aplicar na prática o processo real de
garantia de qualidade.

📎 [Ver portfólio completo](../README.md)
