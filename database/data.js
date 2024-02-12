const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createUser(email, username, password) {
  const newUser = await prisma.user.create({
    data: {
      email,
      username,
      password,
    },
  });
  return newUser;
}

// Usage
async function main() {
  const newUser = await createUser('example@example.com', 'exampleUser', 'password123');
  console.log('New user created:', newUser);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
