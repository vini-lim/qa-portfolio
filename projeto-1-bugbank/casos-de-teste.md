# Casos de teste — BugBank

## CT-000 | Compatibilidade Cross-Browser 🟡
**Técnica:** Teste de Compatibilidade  
**Pré-condição:** Ter o Google Chrome instalado com ao menos uma
extensão ativa.

**Passos:**
1. Acessar https://bugbank.netlify.app no Chrome em modo normal.
2. Observar o comportamento do sistema.
3. Abrir uma nova aba anônima (Ctrl+Shift+N).
4. Acessar https://bugbank.netlify.app na aba anônima.
5. Observar o comportamento do sistema.

**Resultado Esperado:**  
O sistema deve carregar e funcionar corretamente no Chrome em
ambos os modos (normal e anônimo).

**Resultado Obtido:**  
O sistema não carregou corretamente no Chrome em modo normal.
Na aba anônima, o sistema funcionou normalmente.
Diagnóstico: provável conflito com extensão instalada ou cache
do navegador, já que a aba anônima desativa extensões por padrão.

**Status:** Falhou  
**Evidência:** [print do erro no Chrome normal vs funcionando
no anônimo]

---

## CT-001 | Cadastro com dados válidos 🔴
**Técnica:** EP (dado válido)  
**Pré-condição:** Estar na tela de cadastro

**Passos:**
1. Preencher nome: "Alice".
2. Preencher e-mail: "teste1@qa.com".
3. Preencher senha: "123456".
4. Confirmar senha: "123456".
5. Marcar a opção de criar conta com saldo.
6. Clicar em "Cadastrar".
7. Repetir o fluxo criando a conta "Bia" com e-mail "teste2@qa.com", mesma senha, sem marcar a opção de saldo inicial.

**Resultado Esperado:**  
Ambas as contas são criadas com sucesso, uma mensagem informando a criação da conta é exibida e o sistema retorna para a tela de login após cada cadastro.

**Resultado Obtido:**  
Pop‑up com mensagem de conta criada com sucesso (ex.: conta 179-5) e retorno para a tela de login, validado para as duas contas (com saldo e sem saldo).

**Status:** Passou

---

## CT-002 | Cadastro com e-mail inválido 🔴
**Técnica:** EP (dado inválido)  
**Pré-condição:** Estar na tela de cadastro.

**Passos:**
1. Preencher nome: "Teste Email Inválido".
2. Preencher e-mail: "emailsemarroba".
3. Preencher senha: "123456".
4. Confirmar senha: "123456".
5. Clicar em "Cadastrar".

**Resultado Esperado:**  
O sistema deve exibir mensagem de erro informando que o e-mail é inválido e não deve criar a conta.

**Resultado Obtido:**  
Após clicar em "Cadastrar", o sistema exibe uma mensagem orientando a incluir um "@" no e‑mail.

**Status:** Passou

---

## CT-003 | Cadastro com senha de 2 dígitos 🔴
**Técnica:** BVA (dado inválido)  
**Pré-condição:** Estar na tela de cadastro.

**Passos:**
1. Preencher nome: "Teste Senha".
2. Preencher e-mail: "teste03@qa.com".
3. Preencher senha: "12".
4. Confirmar senha: "12".
5. Clicar em "Cadastrar".

**Resultado Esperado:**  
O sistema deve exibir mensagem de erro informando que a senha não atende ao mínimo de caracteres e não deve criar a conta.

**Resultado Obtido:**  
A conta foi criada com sucesso, aceitando uma senha de apenas 2 dígitos.

**Status:** Falhou

---

## CT-004 | Cadastro com campos em branco 🔴
**Técnica:** EP (dado inválido)  
**Pré-condição:** Estar na tela de cadastro.

**Passos:**
1. Deixar todos os campos em branco (nome, e-mail, senha e confirmação de senha).
2. Clicar em "Cadastrar".

**Resultado Esperado:**  
O sistema deve exibir mensagem de erro em todos os campos obrigatórios,
impedindo a criação da conta.

**Resultado Obtido:**  
O sistema exibiu mensagem de campo obrigatório em E-mail , Senha e Confirmação de senha que estavam em branco, o campo Nome não exibiu a mensagem, sem prosseguir com o cadastro.

**Status:** Passou

---

## CT-005 | Login com credenciais válidas 🔴
**Técnica:** EP (dado válido)  
**Pré-condição:** Ter contas cadastradas (Alice com saldo inicial, Bia sem saldo).

**Passos:**
1. Informar e-mail e senha corretos da conta "Alice".
2. Clicar em "Entrar".
3. Verificar se o nome do usuário, número da conta digital e saldo são exibidos.
4. Sair da conta (logout).
5. Repetir os passos 1 a 3 para a conta "Bia".

**Resultado Esperado:**  
O login deve ser bem‑sucedido para ambas as contas, exibindo o nome cadastrado, o número da conta digital e o saldo correto (R$ 1.000,00 para Alice e R$ 0,00 para Bia).

**Resultado Obtido:**  
Login bem‑sucedido em ambas as contas, com nome cadastrado exibido, número da conta digital visível e saldo inicial de R$ 1.000,00 para a conta Alice e R$ 0,00 para a conta Bia.

**Status:** Passou

---

## CT-006 | Login com senha errada 🔴
**Técnica:** EP (dado inválido)  
**Pré-condição:** Ter uma conta cadastrada no BugBank.

**Passos:**
1. Informar o e-mail de uma conta existente e uma senha incorreta.
2. Clicar em "Entrar".

**Resultado Esperado:**  
O sistema deve exibir mensagem de erro informando que as credenciais
são inválidas e não deve permitir o acesso à conta.

**Resultado Obtido:**  
O sistema exibiu a mensagem "Usuário ou senha inválido" e bloqueou
o acesso à conta.

**Status:** Passou

---

## CT-007 | Transferência com saldo suficiente 🔴
**Técnica:** EP (dado válido)  
**Pré-condição:** Ter 2 contas cadastradas (Alice com saldo de R$ 1.000,00
e Bia com saldo R$ 0,00) e estar logado na conta Alice.

**Passos:**
1. Acessar a opção "Transferência" no menu.
2. Informar o número da conta destino (conta Bia).
3. Informar um valor válido para transferência (R$ 400,00).
4. Confirmar a transferência.
5. Verificar o saldo atualizado da conta Alice.
6. Fazer logout e logar na conta Bia.
7. Verificar se o saldo da conta Bia foi atualizado com o valor recebido.

**Resultado Esperado:**  
A transferência deve ser processada com sucesso, o saldo da conta origem
deve ser reduzido pelo valor transferido e o saldo da conta destino deve
ser acrescido do mesmo valor.

**Resultado Obtido:**  
O sistema exibiu a mensagem "Transferência realizada com sucesso" e o
saldo da conta Alice foi atualizado de R$ 1.000,00 para R$ 600,00.
Após logar na conta Bia, o saldo foi atualizado de R$ 0,00 para R$ 400,00.

**Status:** Passou

---

## CT-008 | Transferência com saldo insuficiente 🔴
**Técnica:** EP (dado inválido) + BVA  
**Pré-condição:** Estar logado na conta Alice com saldo de R$ 600,00
(após a transferência do CT-007).

**Passos:**
1. Acessar a opção "Transferência" no menu.
2. Informar o número da conta destino (conta Bia 13-2).
3. Informar um valor superior ao saldo disponível ( R$ 600,00).
4. Confirmar a transferência.
5. Verificar se o saldo da conta Alice permaneceu inalterado.

**Resultado Esperado:**  
O sistema deve exibir mensagem de erro informando saldo insuficiente
e não deve processar a transferência, mantendo o saldo da conta 
origem inalterado.

**Resultado Obtido:**  
O sistema exibiu mensagem informando que não há saldo suficiente para
realizar a transferência. O saldo da conta Alice permaneceu em R$ 600,00.

**Status:** Passou

---

## CT-009 | Transferência com valor zerado 🟡
**Técnica:** BVA (valor limite = zero)  
**Pré-condição:** Estar logado em uma conta com acesso à funcionalidade
de transferência (ex.: conta Alice).

**Passos:**
1. Acessar a opção "Transferência" no menu.
2. Informar o número de uma conta destino válida (conta Bia 13-2).
3. Informar o valor R$ 0,00 no campo de transferência.
4. Confirmar a transferência.

**Resultado Esperado:**  
O sistema deve exibir mensagem de erro informando que o valor
informado é inválido e não deve processar a transferência.

**Resultado Obtido:**  
O sistema exibiu mensagem informando que a transferência não pode
ser realizada com valor igual a R$ 0,00 ou negativo.

**Status:** Passou

---

## CT-010 | Visualizar extrato após transferência 🟡
**Técnica:** Teste Funcional  
**Pré-condição:** Ter realizado ao menos 1 transferência (CT-007 já
executado, conta Alice com transferência de R$ 400,00 para conta Bia).

**Passos:**
1. Estar logado na conta Alice.
2. Acessar a aba "Extrato".
3. Verificar se a transferência realizada aparece listada.
4. Verificar se os dados exibidos estão completos: data, valor e
tipo da transação.
5. Fazer logout, logar na conta Bia e repetir os passos 2 a 4.

**Resultado Esperado:**  
O extrato deve exibir todas as transações realizadas contendo data,
valor e tipo da transação (ex.: "Transferência enviada" /
"Transferência recebida").

**Resultado Obtido:**  
O extrato exibe data e valor da transação, porém o tipo da transação
não é exibido em nenhuma das duas contas testadas (Alice e Bia).

**Status:** Falhou
