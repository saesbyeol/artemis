import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Create demo user
  const hashedPassword = await hash("Demo1234", 12);

  const user = await prisma.user.upsert({
    where: { email: "operator@artemis.dev" },
    update: {},
    create: {
      name: "Alex Morgan",
      email: "operator@artemis.dev",
      hashedPassword,
      organization: "Artemis Defense Systems",
      role: "operator",
      clearanceLevel: "top-secret",
    },
  });

  console.log(`Seeded demo user: ${user.email}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
