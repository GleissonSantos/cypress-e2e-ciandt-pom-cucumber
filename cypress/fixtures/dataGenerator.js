import { faker } from '@faker-js/faker';

class DataGenerator {
  
  static generateValidUser() {
    return {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(6),
    };
  }

  static generateInvalidLoginUser() {
    return {
      email: "teste@123.com",
      password: "123" 
    };
  } 

  static generateInvalidEmailUser() {
    return {
      name: faker.person.fullName(),
      email: "teste@123",
      password: faker.internet.password({ length: 8, memorable: true })
    };
  } 

  static generateValidProduct() {
    return {
      name: faker.commerce.productName(),
      price: faker.commerce.price({ min: 10, max: 1000, dec: 0 }),
      description: faker.commerce.productDescription(),
      quantity: faker.number.int({ min: 1, max: 100 })
    };
  }
}

export default DataGenerator;