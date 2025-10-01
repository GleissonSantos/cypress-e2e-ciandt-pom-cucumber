# Cypress E2E Testing - CI&T POM Cucumber

## 📋 Descrição
Projeto de testes automatizados E2E usando Cypress com Cucumber (BDD) e Page Object Model (POM) para a aplicação ServeRest.

## 🛠️ Tecnologias Utilizadas
- **Cypress** - Framework de testes E2E
- **Cucumber** - Ferramenta BDD para escrita de cenários
- **Faker.js** - Geração de dados de teste
- **JavaScript ES6+** - Linguagem de programação
- **Page Object Model** - Padrão de design para organização do código

## 📁 Estrutura do Projeto
```
cypress/
├── e2e/
│   ├── features/          # Arquivos .feature (Gherkin/BDD)
│   └── step_definitions/  # Implementação dos steps
├── fixtures/              # Dados de teste e geradores
├── pages/                 # Page Objects (POM)
├── screenshots/           # Screenshots dos testes
├── support/              # Configurações e comandos customizados
└── utils/                # Utilitários (em desenvolvimento)
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação
```bash
npm install
```

### Execução dos Testes
```bash
# Modo interativo (Cypress Test Runner)
npx cypress open

# Modo headless
npx cypress run

# Executar features específicas
npx cypress run --spec "cypress/e2e/features/login.feature"
```

## 📝 Funcionalidades Testadas
- ✅ Login de usuários (regular e admin)
- ✅ Cadastro de novos usuários
- 🚧 Gerenciamento de produtos (em desenvolvimento)

## 🧪 Cenários de Teste
### Login
- Login com usuário regular válido
- Login com usuário admin válido

### Registro
- Cadastro de usuário regular com sucesso
- Cadastro de usuário admin com sucesso

## 🎯 Padrões Implementados
- **Page Object Model (POM)** - Encapsulamento de elementos e ações das páginas
- **BDD com Cucumber** - Cenários escritos em linguagem natural
- **Data Generator** - Geração dinâmica de dados de teste
- **Separação de Responsabilidades** - Código organizado e modular

## 📊 Próximas Melhorias
- [ ] Implementar cenários de teste negativos
- [ ] Configurar CI/CD
- [ ] Implementar relatórios de teste
- [ ] Adicionar mais validações e assertions

**Desenvolvido por Gleisson Santos**