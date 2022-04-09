import stone_01 from "./assets/stone_01.jpg";
import stone_02 from "./assets/stone_02.jpg";
import stone_03 from "./assets/stone_03.jpg";
import stone_04 from "./assets/stone_04.jpg";
import stone_05 from "./assets/stone_05.jpg";

const stonesData = [
    {
      id: 1,
      name: "Cuarzo",
      stock: 1,
      cost: 140,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      weight: 1500,
      image: [stone_01]
    },/* https://www.reino-minerales.es/wp-content/uploads/2015/03/pierre-cristal-de-roche-700x480.jpg */
    {
        id: 2,
        name: "Citrino",
        stock: 3,
        cost: 160,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        weight: 1100,
        image:  [stone_02]
        /* "https://http2.mlstatic.com/D_NQ_NP_858663-MLM44641590923_012021-O.jpg" */
      },
      {
        id: 3,
        name: "Azul",
        stock: 2,
        cost: 120,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        weight: 1100,
        image: [stone_03]
        /* "https://http2.mlstatic.com/D_NQ_NP_957385-MLM49262505294_032022-W.jpg" */
      },
      {
        id: 4,
        name: "Fluorita",
        stock: 2,
        cost: 120,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        weight: 1100,
        image:[stone_04]
         /* "https://m.media-amazon.com/images/I/91x6ME2zzZL._AC_SX425_.jpg" */
      },
      {
        id: 5,
        name: "Amatista",
        stock: 4,
        cost: 170,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        weight: 1700,
        image: [stone_05]
        /* "https://cdn.doers.video/embed/080eccbfdd55a756e9a4ea36451a61526401840/5723adeb60a0e.jpg" */
      },
  ];

//PROMESA
export const getData = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            return resolve(stonesData);
        }, 1500)
    })
}

