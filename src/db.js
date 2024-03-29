// eslint-disable-next-line @typescript-eslint/no-var-requires
const faker = require('faker');

module.exports = () => {
  const size = 887;

  const db = {
    users: [],
  };

  for (let index = 1; index <= size; index++) {
    db.users.push({
      id: index,
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      country: faker.address.country(),
      isMember: faker.datatype.boolean(),
      createdAt: faker.date.past(),
    });
  }

  return db;
};
