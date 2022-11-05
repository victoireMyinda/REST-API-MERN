const mongoose = require('mongoose')

const userModel = mongoose.Schema({
    nom: {
        type: String,
        required: [true, "ce champs est obligatoire"]
    },

    prenom: {
        type: String,
        required: [true, "ce champs est obligatoire"]
    },

    nomEtablissement: {
        type: String,
        required: [true, "ce champs est obligatoire"]
    },

    contact: {
        type: String,
    },

    motDePasse: {
        type: String,
        required: [true, "ce champs est obligatoire"]
    },
}, {
    timestamps: true
})


//model clientModel
const clientModel = mongoose.Schema({
    nom: {
        type: String,
        required: [true, "ce champs est obligatoire"]
    },

    prenom: {
        type: String,
        required: [true, "ce champs est obligatoire"]
    },

    adresse: {
        type: String,
        required: [true, "ce champs est obligatoire"]
    },

    modele: {
        type: String,
        required: [true, "ce champs est obligatoire"]
    },

    contact: {
        type: String,
        required: [true, "ce champs est obligatoire"]
    },

    mesure: {
        longDevant: {
            type: Integer,
            required: [true, "ce champs est obligatoire"]
        },

        epaul: {
            type: Integer,
            required: [true, "ce champs est obligatoire"]
        },

        tourEncolure: {
            type: Integer,
            required: [true, "ce champs est obligatoire"]
        },

        tourPoitrine: {
            type: Integer,
            required: [true, "ce champs est obligatoire"]
        },

        tourTaille: {
            type: Integer,
            required: [true, "ce champs est obligatoire"]
        },

        tourBassin: {
            type: Integer,
            required: [true, "ce champs est obligatoire"]
        },

        carrureDos: {
            type: Integer,
            required: [true, "ce champs est obligatoire"]
        },

        carrureDevant: {
            type: Integer,
            required: [true, "ce champs est obligatoire"]
        },

        longEpaule: {
            type: Integer,
            required: [true, "ce champs est obligatoire"]
        },

        longBras: {
            type: Integer,
            required: [true, "ce champs est obligatoire"]
        },
    }

}, {
    timestamps: true
})


const models = { userModel, clientModel }
modules.exports = models