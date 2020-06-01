
//hats
import BrownBrim from "../../asset/images/hats/brown-brim.png"
import blueBeanie from "../../asset/images/hats/blue-beanie.png"
import BrownCowboy from "../../asset/images/hats/brown-cowboy.png"
import GreyBrim from "../../asset/images/hats/grey-brim.png"
import GreenBeanie from "../../asset/images/hats/green-beanie.png"
import TreeCap from "../../asset/images/hats/palm-tree-cap.png"
import WolfCap from "../../asset/images/hats/wolf-cap.png"
import RedBeanie from "../../asset/images/hats/red-beanie.png"
import BlueSnapback from "../../asset/images/hats/blue-snapback.png"
// sneakers
import AdidasNms from "../../asset/images/sneakers/adidas-nmd.png"
import AdidasYeezy from "../../asset/images/sneakers/yeezy.png"
import BlackConverse from "../../asset/images/sneakers/black-converse.png"
import NikeWhite from "../../asset/images/sneakers/white-nike-high-tops.png"
import NikeRed from "../../asset/images/sneakers/nikes-red.png"
import NikeBrown from "../../asset/images/sneakers/nike-brown.png"
import AirJordan from "../../asset/images/sneakers/nike-funky.png"
import TimberLands from "../../asset/images/sneakers/timberlands.png"
//Jackets
import BlackJean from "../../asset/images/jackets/black-shearling.png"
import BlueJean from "../../asset/images/jackets/blue-jean-jacket.png"
import BrownShear from "../../asset/images/jackets/brown-shearling.png"
import TanTrench from "../../asset/images/jackets/brown-trench.png"
import GreyJean from "../../asset/images/jackets/grey-jean-jacket.png"
//Womens
import BlueTank from "../../asset/images/Womens/blue-tank.png"
import FloralBlouse from "../../asset/images/Womens/floral-blouse.png"
import FloralSkirt from "../../asset/images/Womens/floral-skirt.png"
import RedPolKa from "../../asset/images/Womens/red-polka-dot-dress.png"
import StripedSweater from "../../asset/images/Womens/striped-sweater.png"
import WhiteVest from "../../asset/images/Womens/white-vest.png"
import YellowTrack from "../../asset/images/Womens/yellow-track-suit.png"
//Mens
import CamoVest from "../../asset/images/mens/camo-vest.png"
import FloralShirt from "../../asset/images/mens/floral-shirt.png"
import LongSleeve from "../../asset/images/mens/long-sleeve.png"
import PinkShirt from "../../asset/images/mens/pink-shirt.png"
import PolkaDot from "../../asset/images/mens/polka-dot-shirt.png"
import RollUp from "../../asset/images/mens/roll-up-jean-shirt.png"



const SHOP_DATA = {
   hats : {
        id: 1,
        title: 'Hats',
        routeName: 'hats',
        items: [
            {
                id: 1,
                name: 'Brown Brim',
                imageUrl: BrownBrim,
                price: 25
            },
            {
                id: 2,
                name: 'Blue Beanie',
                imageUrl: blueBeanie,
                price: 18
            },
            {
                id: 3,
                name: 'Brown Cowboy',
                imageUrl: BrownCowboy,
                price: 35
            },
            {
                id: 4,
                name: 'Grey Brim',
                imageUrl: GreyBrim,
                price: 25
            },
            {
                id: 5,
                name: 'Green Beanie',
                imageUrl: GreenBeanie,
                price: 18
            },
            {
                id: 6,
                name: 'Palm Tree Cap',
                imageUrl: TreeCap,
                price: 14
            },
            {
                id: 7,
                name: 'Red Beanie',
                imageUrl: RedBeanie,
                price: 18
            },
            {
                id: 8,
                name: 'Wolf Cap',
                imageUrl: WolfCap,
                price: 14
            },
            {
                id: 9,
                name: 'Blue Snapback',
                imageUrl: BlueSnapback,
                price: 16
            }
        ]
    },
   sneakers : {
        id: 2,
        title: 'Sneakers',
        routeName: 'sneakers',
        items: [
            {
                id: 10,
                name: 'Adidas NMD',
                imageUrl: AdidasNms,
                price: 220
            },
            {
                id: 11,
                name: 'Adidas Yeezy',
                imageUrl: AdidasYeezy,
                price: 280
            },
            {
                id: 12,
                name: 'Black Converse',
                imageUrl: BlackConverse,
                price: 110
            },
            {
                id: 13,
                name: 'Nike White AirForce',
                imageUrl: NikeWhite,
                price: 160
            },
            {
                id: 14,
                name: 'Nike Red High Tops',
                imageUrl: NikeRed,
                price: 160
            },
            {
                id: 15,
                name: 'Nike Brown High Tops',
                imageUrl: NikeBrown,
                price: 160
            },
            {
                id: 16,
                name: 'Air Jordan Limited',
                imageUrl: AirJordan,
                price: 190
            },
            {
                id: 17,
                name: 'Timberlands',
                imageUrl: TimberLands,
                price: 200
            }
        ]
    },
   jackets : {
        id: 3,
        title: 'Jackets',
        routeName: 'jackets',
        items: [
            {
                id: 18,
                name: 'Black Jean Shearling',
                imageUrl: BlackJean,
                price: 125
            },
            {
                id: 19,
                name: 'Blue Jean Jacket',
                imageUrl: BlueJean,
                price: 90
            },
            {
                id: 20,
                name: 'Grey Jean Jacket',
                imageUrl: GreyJean,
                price: 90
            },
            {
                id: 21,
                name: 'Brown Shearling',
                imageUrl: BrownShear,
                price: 165
            },
            {
                id: 22,
                name: 'Tan Trench',
                imageUrl: TanTrench,
                price: 185
            }
        ]
    },
   womens : {
        id: 4,
        title: 'Womens',
        routeName: 'womens',
        items: [
            {
                id: 23,
                name: 'Blue Tank top',
                imageUrl: BlueTank,
                price: 25
            },
            {
                id: 24,
                name: 'Floral Blouse',
                imageUrl: FloralBlouse,
                price: 20
            },
            {
                id: 25,
                name: 'Floral Dress',
                imageUrl: FloralSkirt,
                price: 80
            },
            {
                id: 26,
                name: 'Red Dots Dress',
                imageUrl: RedPolKa,
                price: 80
            },
            {
                id: 27,
                name: 'Striped Sweater',
                imageUrl: StripedSweater,
                price: 45
            },
            {
                id: 28,
                name: 'Yellow Track Suit',
                imageUrl: YellowTrack,
                price: 135
            },
            {
                id: 29,
                name: 'White Blouse',
                imageUrl: WhiteVest,
                price: 20
            }
        ]
    },
   mens : {
        id: 5,
        title: 'Mens',
        routeName: 'mens',
        items: [
            {
                id: 30,
                name: 'Camo Down Vest',
                imageUrl: CamoVest,
                price: 325
            },
            {
                id: 31,
                name: 'Floral T-shirt',
                imageUrl: FloralShirt,
                price: 20
            },
            {
                id: 32,
                name: 'Black & White Longsleeve',
                imageUrl: LongSleeve,
                price: 25
            },
            {
                id: 33,
                name: 'Pink T-shirt',
                imageUrl: PinkShirt,
                price: 25
            },
            {
                id: 34,
                name: 'Jean Long Sleeve',
                imageUrl: RollUp,
                price: 40
            },
            {
                id: 35,
                name: 'Burgundy T-shirt',
                imageUrl: PolkaDot,
                price: 25
            }
        ]
    }
}

export default SHOP_DATA;