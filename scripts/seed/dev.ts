import db, { genId } from '../../src/modules/db';

const run = async () => {
  await db.submission.createMany({
    data: [
      {
        id: genId(),
        submittedAt: new Date(),
        data: "Hello from form submission"
      },
    ],
  });
};

// Auto run this module when called directly
if (require.main === module) {
  run().then(() => {
    console.log('Data seed complete');
    process.exit();
  });
}
