const { Pokemon , Types } = require('../db.js')

const CreateTypesDB = async (arrTypes) => {
  arrTypes.forEach((genre) => {
    Types.findOrCreate({
      where: { name: genre },
    });
  });
  let alltypes = await Types.findAll()
  return alltypes.map(e=>e.name)//.toString().trim().split(',')
};

module.exports = {
  CreateTypesDB
}