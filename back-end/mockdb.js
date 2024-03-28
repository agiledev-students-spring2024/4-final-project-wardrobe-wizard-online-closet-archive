
const mockdb = {
    shirts : [
        { name: 'Casual Shirt', 
          brand: 'Awesome Brand', 
          type: 'Casual', 
          color:'blue',
          notes: 'note 1',
          img: '/public/shirts/casual_shirt.webp'
        },
        { name: 'Formal Shirt', 
          brand: 'Formal Brand', 
          type: 'Formal',
          color:'grey', 
          notes: 'note 2',
          img: '/public/shirts/formal_shirt.webp'
        },
        { name: 'Favorite Shirt', 
          brand: 'Awesome Brand', 
          type: 'Casual', 
          color:'black',
          notes: 'note 3',
          img: '/public/shirts/favorite_shirt.webp'
        }
      ],
      
    pants :[
        { name: 'Casual Pants', 
          brand: 'Awesome Brand', 
          type: 'Casual', 
          color:'',
          img: '/public/pants/brown_pants.webp'
        },
        { name: 'Least Favorite Pants', 
          brand: 'Fake Brand 3', 
          type: 'Casual', 
          color:'',
          img: '/public/pants/extra_pants.jpg'
        },
        { name: 'Favorite Pants', 
          brand: 'Cool Brand', 
          type: 'Casual', 
          color:'',
          img: '/public/pants/comfy.webp'
        }
      ],
      
    dress : [ // modify this part to be dress
        { name: 'Best Dress', 
          brand: 'Awesome Brand', 
          type: 'Formal', 
          color:'',
          img: '/public/skirts/skirt_1.webp'
        },
        { name: 'Least Favorite Dress', 
          brand: 'Fake Brand 170', 
          type: 'Formal', 
          color:'',
          img: '/public/skirts/skirt_2.webp'
        },
        { name: '2nd Favorite Dress', 
          brand: 'Cool Brand', 
          type: 'Formal', 
          color:'',
          img: '/public/skirts/skirt_3.webp'
        }
      ],
      
    jackets :[
          { name: 'Ugly Jacket', 
            brand: 'Awful Brand', 
            type: 'Casual', 
            color:'',
            img: '/public/jackets/jacket_1.jpg'
          },
          { name: 'Coolest Jacket', 
            brand: 'Fake Brand 170', 
            type: 'Formal', 
            color:'',
            img: '/public/jackets/jacket_2.jpg'
          },
          { name: 'Okay Jacket', 
            brand: 'Cool Brand', 
            type: 'Casual', 
            color:'',
            img: '/public/jackets/jacket_3.webp'
          }
      ],
      
    shoes : [
        { name: 'Nice Shoes', 
            brand: 'Definitely Awesome', 
            type: 'Casual', 
            color:'',
            img: '/public/shoes/shoes_1.avif'
          },
          { name: 'Decent Shoes', 
            brand: 'Definitely Awesome', 
            type: 'Casual', 
            color:'',
            img: '/public/shoes/shoes_2.webp'
          },
          { name: 'Okay Shoes', 
            brand: 'Definitely Awesome', 
            type: 'Casual', 
            color:'',
            img: '/public/shoes/shoes_3.webp'
          }
      ],
      
    accessories : [
         { name: 'Most Expensive', 
            brand: 'Cheap-O', 
            type: 'Formal', 
            color:'',
            img: '/public/accessories/accessory_1.jpg'
          },
          { name: 'Best Accessory', 
            brand: 'Definitely Awesome', 
            type: 'Casual', 
            color:'',
            img: '/public/accessories/accessory_2.jpg'
          },
          { name: 'Pretty Cool', 
            brand: 'Definitely Awesome', 
            type: 'Casual', 
            color:'',
            img: '/public/accessories/accessory_3.webp'
          }
      ],
      
};

const findItemByName = (itemName) => {
  const categories = Object.values(mockdb); // Get all categories arrays
  for (const category of categories) {
    const item = category.find(item => item.name.toLowerCase() === itemName.toLowerCase());
    if (item) {
      return item; // Return the found item
    }
  }
  return null; // Return null if the item is not found
};

module.exports = {
  mockdb: mockdb,
  findItemByName: findItemByName
};