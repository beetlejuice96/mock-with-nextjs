import faker from "faker";

export default (req, res) => {
  const customers = [...new Array(10)].map((_, index) => {
    return {
      index,
      name: faker.name.findName(),
      city: faker.address.city(),
    };
  });
  res.status(200).json(JSON.stringify(customers));
};
