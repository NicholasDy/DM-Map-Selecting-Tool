const User = require('./user');
const Npc = require("./npc")
const Locations = require('./locations')
const Encounter = require('./encounter')

User.hasMany(Encounter, {
    foreignKey: "user_id",
    onDelete:'SET NULL'
})

Locations.hasMany(Npc, {
    foreignKey:"npc_id"
})

Locations.belongsToMany(Encounter, {
    foreignKey:"encounter_id", 
    through: "encounter_location"
})

Npc.belongsToMany(Locations,{
    foreignKey:"locations_id",
    through:"Npc_locations"
})

module.exports = {User, Npc, Locations, Encounter}