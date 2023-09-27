const redTea = 'https://images.unsplash.com/photo-1628153792464-21bffac488d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80'
const greenTea = 'https://images.unsplash.com/photo-1627894006066-b45786537103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2117&q=80'
const blackTea = 'https://images.unsplash.com/photo-1433891248364-3ce993ff0e92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
const floralTea = 'https://images.unsplash.com/photo-1563911892317-47551470aed8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
const mixedTea = 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
const teaTree = 'https://plus.unsplash.com/premium_photo-1692049123591-680942259565?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
const pickingTea = 'https://images.unsplash.com/photo-1615796000240-c0b7cd3d385f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80'
const teaPot = 'https://images.unsplash.com/photo-1587834323138-befbf2c33797?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
const mainPageBg = 'https://images.unsplash.com/photo-1575722290270-626b0208df99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'


export const products =[
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
    
]

function calculatePrice() {

    return (Math.random() * (15 - 5) + 5).toFixed(2) + "$/g";
  }



