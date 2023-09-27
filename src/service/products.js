const redTea = 'https://unsplash.com/photos/T9yWxecVV2Q'
const greenTea = 'https://unsplash.com/photos/gT_rAfFvCyw'
const blackTea = 'https://unsplash.com/photos/2CRgKZAyPXg'
const floralTea = 'https://unsplash.com/photos/4orQSKpTKPI'
const mixedTea = 'https://unsplash.com/photos/59Kh3TAajg0'
const teaTree = 'https://unsplash.com/photos/a-lush-green-field-filled-with-lots-of-trees-vH3l29R9eJw'
const pickingTea = 'https://unsplash.com/photos/teUe-6Mn9kI'
const teaPot = 'https://unsplash.com/photos/BOIBMiFYIPo'
const mainPageBg = 'https://unsplash.com/photos/XXuVXLy5gHU'


const products =[
    {
        id: 1,
        name: 'Red Tea',
        price: calculatePrice(), 
        imageUrl: redTea,
      },
      {
        id: 2,
        name: 'Green Tea',
        price: calculatePrice(),
        imageUrl: greenTea,
      },
      {
        id: 3,
        name: 'Black Tea',
        price: calculatePrice(),
        imageUrl: blackTea,
      },
      {
        id: 4,
        name: 'Floral Tea',
        price: calculatePrice(),
        imageUrl: floralTea,
      },
      {
        id: 5,
        name: 'Mixed Tea',
        price: calculatePrice(),
        imageUrl: mixedTea,
      },
      {
        id: 6,
        name: 'Tea Tree',
        price: calculatePrice(),
        imageUrl: teaTree,
      },
      {
        id: 7,
        name: 'Picking Tea',
        price: calculatePrice(),
        imageUrl: pickingTea,
      },
      {
        id: 8,
        name: 'Tea Pot',
        price: calculatePrice(),
        imageUrl: teaPot,
      },
      {
        id: 9,
        name: 'Main Page Background',
        price: calculatePrice(),
        imageUrl: mainPageBg,
      },
]

function calculatePrice() {

    return (Math.random() * (15 - 5) + 5).toFixed(2) + "$/g";
  }


  console.log(products);
