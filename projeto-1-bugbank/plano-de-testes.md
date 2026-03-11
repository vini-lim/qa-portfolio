# Plano de Testes — BugBank

## 1. Objetivo
Validar as funcionalidades principais do BugBank, identificando defeitos 
de funcionalidade, usabilidade e validação de dados.

## 2. Escopo
### Dentro do escopo:
- Cadastro de conta
- Login / Logout
- Transferência entre contas
- Visualização de extrato

### Fora do escopo:
- Testes de performance
- Testes de segurança

## 3. Tipos de Teste
- Teste funcional (caixa-preta)
- Teste exploratório

## 4. Critérios de Entrada
- Ambiente acessível em bugbank.netlify.app
- Navegador atualizado (Chrome ou Firefox)

## 5. Critérios de Saída
- 100% dos casos de teste executados
- Todos os bugs documentados com evidência

## 6. Ambiente
- URL: https://bugbank.netlify.app
- Navegador: Chrome (versão mais recente)
- OS: Windows / MacOS / Linux

## 7. Ferramentas
- Navegador para execução
- GitHub para documentação
- Snipping Tool / Lightshot para evidências (prints)

## 8. Assunções de Requisitos

Como o BugBank não tem documentação formal, alguns comportamentos 
esperados foram definidos por mim com base em boas práticas de mercado. 
Abaixo listo o que assumi para cada funcionalidade testada:

**Cadastro — Senha**  
Assumi que o sistema deveria exigir no mínimo 6 caracteres, já que esse 
é o padrão mínimo adotado pela maioria dos sistemas web hoje em dia.

**Cadastro — E-mail**  
Assumi que apenas e-mails no formato válido deveriam ser aceitos 
(ex.: usuario@dominio.com), conforme o padrão RFC 5322.

**Cadastro — Campos obrigatórios**  
Assumi que nome, e-mail, senha e confirmação de senha são campos 
obrigatórios, pois são dados essenciais para qualquer cadastro de usuário.

**Transferência — Valor mínimo**  
Assumi que o sistema não deveria permitir transferências com valor 
igual a R$ 0,00, por não fazer sentido do ponto de vista de negócio.

**Transferência — Saldo insuficiente**  
Assumi que uma transferência não deve ser processada quando o saldo 
da conta de origem for menor do que o valor solicitado.


