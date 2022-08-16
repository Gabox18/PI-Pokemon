const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    hp: {
      type: DataTypes.INTEGER,
    },

    attack: {
      type: DataTypes.INTEGER,
    },

    defense: {
      type: DataTypes.INTEGER,
    },

    speed: {
      type: DataTypes.INTEGER,
    },

    height: {
      type: DataTypes.INTEGER,
    },

    weight: {
      type: DataTypes.INTEGER,
    },

    background_image: {
      type: DataTypes.TEXT,
      defaultValue : 'https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/118011151_640719076574401_1551517471314191853_n.png?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qVXZokCTiqsAX-lOWpd&_nc_ht=scontent-mia3-1.xx&oh=00_AT8AbAqGGx1fcjNOi-8D9mtrfMd3RAvfJ5vTz5fHZXQzEQ&oe=63079422'
    },

    createdInDb:{
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true,
     }
  },{timestamps: false});
};
