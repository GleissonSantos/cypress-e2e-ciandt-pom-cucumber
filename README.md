# Cypress E2E Testing - CI&T POM Cucumber

[![CI/CD Pipeline](https://github.com/GleissonSantos/cypress-e2e-ciandt-pom-cucumber/actions/workflows/pipeline-actions.yml/badge.svg)](https://github.com/GleissonSantos/cypress-e2e-ciandt-pom-cucumber/actions/workflows/pipeline-actions.yml)

## 📋 Description
End-to-end automated testing project using Cypress with Cucumber (BDD) and Page Object Model (POM) for the ServeRest application.

## 🛠️ Technologies Used
- **Cypress** - E2E testing framework
- **Cucumber** - BDD tool for scenario writing
- **Faker.js** - Test data generation
- **JavaScript ES6+** - Programming language
- **Page Object Model** - Design pattern for code organization
- **GitHub Actions** - CI/CD pipeline

## 📁 Project Structure
```
cypress/
├── e2e/
│   ├── features/          # .feature files (Gherkin/BDD)
│   └── step_definitions/  # Step implementations
├── fixtures/              # Test data and generators
├── pages/                 # Page Objects (POM)
├── screenshots/           # Test screenshots
├── support/              # Configurations and custom commands
└── utils/                # Utilities (in development)
```

## 🚀 How to Run

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Test Execution
```bash
# Interactive mode (Cypress Test Runner)
npx cypress open

# Headless mode
npx cypress run

# Run specific features
npx cypress run --spec "cypress/e2e/features/login.feature"

# Run by tags
npx cypress run --env tags="@login"
```

## 📝 Features Tested
- ✅ User login (regular and admin)
- ✅ User signup/registration
- ✅ Product management (basic CRUD)
- ✅ Form validation (positive and negative cases)

## 🧪 Test Scenarios

### Login
- Login as regular user with valid credentials
- Login as admin user with valid credentials  
- Login with invalid credentials (negative test)

### Signup
- Sign up new regular user successfully
- Sign up new admin user successfully
- Sign up with invalid email format (negative test)

### Product Management
- Register new product as admin user
- Product form validation

## 🎯 Design Patterns Implemented
- **Page Object Model (POM)** - Encapsulation of page elements and actions
- **BDD with Cucumber** - Scenarios written in natural language
- **Data Generator Pattern** - Dynamic test data generation
- **Separation of Concerns** - Organized and modular code structure
- **Factory Pattern** - Test data creation

## 🏗️ Architecture Features
- **Centralized selectors** in Page Objects
- **Reusable step definitions** with Cucumber
- **Dynamic test data** with Faker.js
- **CI/CD pipeline** with GitHub Actions
- **Conventional commits** for better git history
- **Cross-browser testing** support

## 📊 CI/CD Pipeline
- Automated testing on push/pull requests
- Node.js 20 environment
- Cypress execution in headless mode
- Test results and artifacts storage

## 📈 Future Improvements
- [x] ~~Implement negative test scenarios~~
- [x] ~~Configure CI/CD pipeline~~
- [ ] Implement test reporting (Allure/Mochawesome)


## 🤝 Contributing
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License.

**Developed by Gleisson Santos**