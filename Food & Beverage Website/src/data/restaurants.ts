import { Restaurant } from '../types';

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Bella Vista Italian',
    cuisine: 'Italian',
    rating: 4.8,
    deliveryTime: '25-35 min',
    deliveryFee: 2.99,
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=500',
    location: 'New York',
    menu: [
      {
        id: '1-1',
        name: 'Margherita Pizza',
        description: 'Fresh mozzarella, tomato sauce, basil',
        price: 16.99,
        image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Pizza'
      },
      {
        id: '1-2',
        name: 'Chicken Alfredo',
        description: 'Grilled chicken breast with creamy alfredo sauce',
        price: 19.99,
        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Pasta'
      },
      {
        id: '1-3',
        name: 'Caesar Salad',
        description: 'Romaine lettuce, parmesan, croutons, caesar dressing',
        price: 12.99,
        image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Salad'
      }
    ]
  },
  {
    id: '2',
    name: 'Dragon Palace',
    cuisine: 'Chinese',
    rating: 4.6,
    deliveryTime: '30-40 min',
    deliveryFee: 3.49,
    image: 'https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=500',
    location: 'New York',
    menu: [
      {
        id: '2-1',
        name: 'Sweet & Sour Chicken',
        description: 'Crispy chicken with sweet and sour sauce',
        price: 17.99,
        image: 'https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Main'
      },
      {
        id: '2-2',
        name: 'Beef Lo Mein',
        description: 'Stir-fried noodles with beef and vegetables',
        price: 15.99,
        image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Noodles'
      }
    ]
  },
  {
    id: '3',
    name: 'Taco Fiesta',
    cuisine: 'Mexican',
    rating: 4.7,
    deliveryTime: '20-30 min',
    deliveryFee: 2.49,
    image: 'https://images.pexels.com/photos/2087090/pexels-photo-2087090.jpeg?auto=compress&cs=tinysrgb&w=500',
    location: 'Los Angeles',
    menu: [
      {
        id: '3-1',
        name: 'Chicken Tacos',
        description: 'Three soft shell tacos with grilled chicken',
        price: 13.99,
        image: 'https://images.pexels.com/photos/2087090/pexels-photo-2087090.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Tacos'
      },
      {
        id: '3-2',
        name: 'Beef Burrito',
        description: 'Large burrito with seasoned beef, rice, and beans',
        price: 16.99,
        image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Burrito'
      }
    ]
  },
  {
    id: '4',
    name: 'Burger Junction',
    cuisine: 'American',
    rating: 4.5,
    deliveryTime: '15-25 min',
    deliveryFee: 1.99,
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=500',
    location: 'Chicago',
    menu: [
      {
        id: '4-1',
        name: 'Classic Cheeseburger',
        description: 'Beef patty, cheese, lettuce, tomato, onion',
        price: 14.99,
        image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Burger'
      },
      {
        id: '4-2',
        name: 'Loaded Fries',
        description: 'Crispy fries with cheese, bacon, and green onions',
        price: 9.99,
        image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Sides'
      }
    ]
  },
  {
    id: '5',
    name: 'Sakura Sushi',
    cuisine: 'Japanese',
    rating: 4.9,
    deliveryTime: '35-45 min',
    deliveryFee: 4.99,
    image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=500',
    location: 'San Francisco',
    menu: [
      {
        id: '5-1',
        name: 'Salmon Roll',
        description: 'Fresh salmon, avocado, cucumber',
        price: 12.99,
        image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Sushi'
      },
      {
        id: '5-2',
        name: 'Chicken Teriyaki',
        description: 'Grilled chicken with teriyaki sauce and rice',
        price: 18.99,
        image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Main'
      }
    ]
  }
];