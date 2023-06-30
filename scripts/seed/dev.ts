import db, { genId } from '../../src/modules/db';

const run = async () => {
  await db.post.createMany({
    data: [
      {
        id: genId(),
        publishedAt: new Date(),
      },
      {
        id: genId(),
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
