/* David Liao
 Dec 16
array of products */
var products_array = [{
        'type': "console",
        'image': "./images/consoles.jpg"
    },
    {
        'type': "yugioh",
        'image': "./images/yugi_exodia.jpg"
    },
    {
        'type': "extra",
        'image': "./images/surprise.jpg"
    },
    {
        'type': "fromsoftware",
        'image': "./images/uLuW0iZ.jpg"
    },
    {
        'type': "treasure",
        'image': "./images/chest.jpg"
    }

]
var console = [
    //Console product 1
    {
        "name": "Playstation 5 Digital Edition",
        "price": 399.99,
        "image": "./images/ps5.jpg"
    },
    //console product 2
    {
        "name": "X Box Series X",
        "price": 499.99,
        "image": "./images/xboxX.jpg"
    },
    //console product 3
    {
        "name": "Playstation 5",
        "price": 499.99,
        "image": "./images/ps5.jpg"
    },
    //console product 4
    {
        "name": "iBUYPOWER - Element Gaming Desktop",
        "price": 1099.99,
        "image": "./images/ibuypower.jpg"
    },
    //console product 5
    {
        "name": "Nintendo Switch",
        "price": 299.99,
        "image": "./images/switch.jpg"
    }
]
var yugioh = [
    //yugioh product 1
    {
        "name": "Duelist Evolution - Dark Magician",
        "price": 100.0,
        "image": "./images/darkmagician.jpg",
        "link": "https://ygoprodeck.com/cyber-dragon-deck-2020/",


    },
    //yugioh product 2
    {
        "name": "Cyber Dragon 2020",
        "price": 300.0,
        "image": "./images/cyberdragon.jpg",
        "link": "https://ygoprodeck.com/cyber-dragon-deck-2020/",
    },
    //yugioh product 3
    {
        "name": "Blue-Eyes 2020",
        "price": 130.0,
        "image": "./images/blueeyes.jpg",
        "link": "https://ygoprodeck.com/blue-2/",
    },
    //yugioh product 4
    {
        "name": "Exodia 2020",
        "price": 130.0,
        "image": "./images/exodiadeck.jpg",
        "link": "https://ygoprodeck.com/exodia-deck-2020/",
    },
    //yugioh product 5
    {
        "name": "Subterror Princess",
        "price": 250.0,
        "image": "./images/subterrorprince.jpg",
        "link": "https://ygoprodeck.com/?s=subterror+princess",
    },
    //yugioh product 6
    {
        "name": "Control Gravekeeper",
        "price": 300.0,
        "image": "./images/controlgravekeeper.jpg",
        "link": "https://ygoprodeck.com/control-gravekeepers-december-2020/",
    }
]

var extra = [
    //extra product 1
    {
        "name": "MGS4 Solid Eye System",
        "price": 40.00,
        "image": "./images/solideye.jpg"
    },
    //extra product 2
    {
        "name": "MGS5 Box",
        "price": 15.99,
        "image": "./images/mgsbox.jpg"
    },
    //extra product 3
    {
        "name": "Alert Hat",
        "price": 15.99,
        "image": "./images/alerthat.jpg"
    },
    //extra product 4
    {
        "name": "PS Kaiba Add-On",
        "price": 15.99,
        "image": "./images/pskaiba.jpg"
    },
    //extra product 5
    {
        "name": "Millenium Item Set",
        "price": 15.99,
        "image": "./images/milleniumset.jpg"
    }
]

var fromsoftware = [
    //fromsoftware product 1
    {
        "name": "Yhorm the Giant",
        "price": 30.00,
        "image": "./images/yhorm.jpg"
    },
    //fromsoftware product 2
    {
        "name": "Sekiro's Loaded Umbrella",
        "price": 45.99,
        "image": "./images/umbrella.jpg"
    },

    //fromsoftware product 3
    {
        "name": "Greatsword of Artorias",
        "price": 150.99,
        "image": "./images/artoriasgs.jpg"
    },
    //fromsoftware product 4
    {
        "name": "Solaire of Astora Cosplay Costume",
        "price": 100.99,
        "image": "./images/praisethesun.jpg"
    },
    //fromsoftware product 5
    {
        "name": "Estus Flask Set",
        "price": 35.99,
        "image": "./images/estusflask.jpg"
    },
]

var treasure = [
    //treasure product 1
    {
        "name": "Darkeater Midir",
        "price": 20.00,
        "image": "./images/darkeatermidir.jpg"
    },
    //treasure product 2
    {
        "name": "Black Knights Order",
        "price": 40.99,
        "image": "./images/blackknight.jpg"
    },
    //treasure product 3
    {
        "name": "Soulsborne Dies Twice Poster by Vatividya",
        "price": 40.99,
        "image": "./images/vatiposter.jpg"
    },
    //treasure product 4
    {
        "name": "Yharnam View",
        "price": 25.99,
        "image": "./images/yharnam.jpg"
    },
    //treasure product 5
    {
        "name": "Disneyland in Lothric",
        "price": 25.99,
        "image": "./images/darkdisneyland.jpg"
    }
]

var allProducts = {
    "console": console,
    "yugioh": yugioh,
    "extra": extra,
    "fromsoftware": fromsoftware,
    "treasure": treasure


}
if (typeof module != 'undefined') {
    module.exports.allProducts = allProducts;
}