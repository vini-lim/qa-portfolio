# Relatório de Bugs — BugBank

## BUG-001 | Sistema aceita senha com apenas 2 dígitos no cadastro

**ID do Caso de Teste relacionado:** CT-003  
**Severidade:** Alta  
**Prioridade:** Média  

**Pré-condições:**  
Estar na tela de cadastro do BugBank.

**Base para o teste:**  
Assunção de Requisito nº 01 (plano-de-testes.md) — senha deve ter no mínimo 6 caracteres,
conforme padrão adotado em sistemas web.

**Passos para reprodução:**
1. Preencher o nome com "Teste Senha".
2. Preencher o e-mail com "teste03@qa.com".
3. Preencher a senha com "12".
4. Confirmar a senha com "12".
5. Clicar em "Cadastrar".

**Resultado Esperado:**  
O sistema deve impedir o cadastro, exibindo mensagem de erro sobre o tamanho mínimo da senha e não criando a conta.

**Resultado Obtido:**  
O sistema exibe mensagem de sucesso e cria a conta normalmente, aceitando senha com apenas 2 dígitos.

**Evidência:**  
[Incluir print da tela de sucesso com a conta criada e, se possível, o campo de senha preenchido antes do envio.]

**Ambiente:**  
- Navegador: Chrome (aba anônima)  
- Sistema: BugBank (https://bugbank.netlify.app)

---

## BUG-002 | Extrato não exibe o tipo da transação

**ID do Caso de Teste relacionado:** CT-010  
**Severidade:** Média  
**Prioridade:** Média  

**Pré-condições:**  
Ter ao menos uma transferência realizada entre duas contas.

**Passos para reprodução:**
1. Realizar uma transferência entre duas contas (ex.: Alice → Bia,
valor R$ 400,00).
2. Acessar a aba "Extrato" em qualquer uma das contas envolvidas.
3. Observar as informações exibidas para cada transação.

**Resultado Esperado:**  
O extrato deve exibir data, valor e tipo da transação (ex.:
"Transferência enviada" ou "Transferência recebida").

**Resultado Obtido:**  
O extrato exibe apenas data e valor. O campo de tipo da transação
não é exibido em nenhuma das contas testadas.

**Evidência:**  


**Ambiente:**  
- Navegador: Chrome (aba anônima)  
- Sistema: BugBank (https://bugbank.netlify.app)

**Base para o teste:**  
Assunção de Requisito — sistemas bancários convencionalmente exibem
o tipo da transação no extrato para permitir rastreabilidade das
movimentações.

---

## BUG-003 | Sistema não carrega no Chrome em modo normal

**ID do Caso de Teste relacionado:** CT-000  
**Severidade:** Média  
**Prioridade:** Baixa  

**Pré-condições:**  
Ter o Google Chrome instalado com ao menos uma extensão ativa.

**Passos para reprodução:**
1. Abrir o Google Chrome em modo normal.
2. Acessar https://bugbank.netlify.app.
3. Observar o comportamento do sistema.

**Resultado Esperado:**  
O sistema deve carregar e funcionar normalmente no Chrome,
independente de extensões instaladas.

**Resultado Obtido:**  
O sistema não carregou corretamente no Chrome em modo normal.
Ao acessar via aba anônima (sem extensões ativas), o sistema
funcionou normalmente, indicando que o problema está relacionado
a alguma extensão instalada ou cache do navegador.

**Workaround:**  
Acessar o sistema via aba anônima (Ctrl+Shift+N) enquanto o
problema não é investigado.

**Evidência:**  
[Print do erro no Chrome modo normal + print do sistema
funcionando na aba anônima.]

**Ambiente:**  
- Navegador: Google Chrome (modo normal e aba anônima)  
- Sistema: BugBank (https://bugbank.netlify.app)

**Observação:**  
Por não ser possível identificar qual extensão específica causa
o conflito sem acesso ao ambiente do usuário final, recomenda-se
investigar extensões de bloqueio de conteúdo (ex.: AdBlock,
uBlock Origin) como primeiro passo de diagnóstico.






