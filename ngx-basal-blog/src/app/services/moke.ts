import * as faker from 'faker/locale/en_US';

const oneHost = () => {
    return {
        id: faker.random.uuid(),
        active: faker.random.boolean(),
        hostname: faker.internet.domainName(),
        // category: array.random.arrayElement(['DOV', 'DDOS', 'DFS']),
        description: faker.lorem.sentence(),
        readyDate: faker.date.future(),
        domain: faker.internet.domainName()
    };
};

export const manyHosts = (count = faker.random.numer(100)) => {
    const res = [];
    for (let i = 0; i < count; i++) {
        res.push(oneHost());
    }
    return res;
};

