const { db, Plant, Detail } = require('./index')

const plants = [
  {name: 'Aloe Vera',
  imgUrl: 'https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/aloe-vera-white-pot_sunwand24-ss_edit.jpg?itok=Y7HnaYk3'},

  {name: 'Jade Plant',
  imgUrl: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/1/7/1/shutterstock_1346551367.jpg.rend.hgtvcom.616.462.suffix/1578422274012.jpeg'},

  {name: 'Pothos',
  imgUrl: 'https://www.whiteflowerfarm.com/mas_assets/cache/image/5/b/b/7/23479.Jpg'},

  {name: 'Snake Plant',
  imgUrl: 'https://secure.img1-ag.wfcdn.com/im/94864537/compr-r85/3809/38091101/35-artificial-foliage-plant-in-pot.jpg'},

  {name: 'ZZ Plant',
  imgUrl: 'https://www.easternleaf.com/v/vspfiles/photos/808380-03-2.jpg?v-cache=1556729985'}
]

const details = [
  {
    description: 'An easy, attractive succulent that makes for a great indoor companion. The sap from aloe vera plants is used as a skin moisturizer and to heal minor cuts and ease sunburn.',
    wateringFrequency: 'About once a week in warmer months and about once every two weeks in winter.',
    light: 'Bright, indirect sunlight',
    plantId: 1
  },
  {
    description: 'Jade plants have thick, woody stems and oval-shaped leaves. They live for a very long time, often being passed down from generation to generation and reaching heights of three feet or more when grown indoors.',
    wateringFrequency: 'Varies. Water it deeply, then wait until the soil has mostly dried out before you water it again.',
    light: 'At least 4 hours of direct sunlight each day',
    plantId: 2
  },
  {
    description: 'Also called Devil\'s Ivy. Its vining nature makes it a great choice for use in hanging baskets, draped across shelves, or climbing up a wall. According to a study by NASA, pothos is one of the best air-purifying houseplants.',
    wateringFrequency: 'Only water when the soil feels dry.',
    light: 'Bright, indirect light',
    plantId: 3
  },
  {
    description: 'Also known as “Mother-in-Law’s Tongue”, snake plants are native to southern Africa. This succulent plant is very forgiving and perfect for beginners.',
    wateringFrequency: 'Do not water too frequently. Let the soil mostly dry out between waterings.',
    light: 'Bright, indirect light, but can tolerate some direct sunlight',
    plantId: 4
  },
  {
    description: 'Zamioculcas zamiifolia, affectionately called the ZZ plant or Zanzibar Gem, is a tropical plant. The ZZ Plant is characterized by its thick waxy green leaves and is a great air purifying option.',
    wateringFrequency: 'Allow the soil to become dry at the top to the touch between watering and do not over water.',
    light: 'Medium to low indirect light, avoid direct sunlight',
    plantId: 5
  }
]

const syncAndSeed = async () => {
  await db.sync({force: true});
  Promise.all([
    Plant.bulkCreate(plants),
    Detail.bulkCreate(details)
  ])
}

module.exports = {
  db,
  Plant,
  Detail,
  syncAndSeed
}
