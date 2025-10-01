import { faker } from '@faker-js/faker';


class DataGenerator {
  
  static generateValidUser() {
    return {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(6),
    };
  }

  static generateLoginCredentials() {
    return {
      email: faker.internet.email(),
      password: faker.internet.password({ length: 8, memorable: true })
    };
  }

  static generateProduct() {
    return {
      name: faker.commerce.productName(),
      preco: faker.commerce.price({ min: 10, max: 1000, dec: 0 }),
      descricao: faker.commerce.productDescription(),
      quantidade: faker.number.int({ min: 1, max: 100 })
    };
  }
}

export default DataGenerator;