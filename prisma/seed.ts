import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'ae2f8164-1c1e-4b6f-8a87-11e213eace57',
      name: 'Summer T-Shirt',
      price: 1999,
      size: 'M',
      shortDescription: 'Comfortable summer t-shirt',
      description:
        'A high-quality cotton t-shirt perfect for summer. Available in various colors and sizes.',
      category: 'Tops',
      mainImage: 'tshirt/main.jpg',
    },
    {
      id: 'b5d6c171-0e50-4d95-a5f7-78957f9214d5',
      name: 'Winter Jacket',
      price: 8999,
      size: 'L',
      shortDescription: 'Warm and stylish winter jacket',
      description:
        'A stylish and warm jacket for the cold winter months. Made from durable materials and designed for comfort.',
      category: 'Outerwear',
      mainImage: 'winterJacket/main.jpg',
    },
    {
      id: 'd55d4d8b-4b23-469e-96be-bf3dfdcf8690',
      name: 'Denim Jeans',
      price: 2999,
      size: '32',
      shortDescription: 'Classic blue denim jeans',
      description:
        'Classic blue jeans made from high-quality denim. Perfect for casual wear.',
      category: 'Bottoms',
      mainImage: 'denimJeans/main.jpg',
    },
    {
      id: 'd6ad66c0-2b1a-4ae3-8894-4541e32b1b85',
      name: 'Sneakers',
      price: 4999,
      size: '10',
      shortDescription: 'Comfortable and stylish sneakers',
      description:
        'Breathable and lightweight sneakers perfect for casual and athletic wear.',
      category: 'Footwear',
      mainImage: 'sneakers/main.jpg',
    },
    {
      id: '2e718815-b191-43b3-a3b8-3a6e60d8347a',
      name: 'Leather Jacket',
      price: 10999,
      size: 'L',
      shortDescription: 'Premium leather jacket',
      description:
        'High-quality leather jacket with a sleek design. Perfect for a stylish look.',
      category: 'Outerwear',
      mainImage: 'leatherJacket/main.jpg',
    },
    {
      id: '92fa4326-c7db-42b6-9b2c-5bb46b63cf4c',
      name: 'Baseball Cap',
      price: 999,
      size: 'One Size',
      shortDescription: 'Classic baseball cap',
      description:
        'Adjustable baseball cap with a timeless design. Suitable for all casual occasions.',
      category: 'Accessories',
      mainImage: 'baseballCap/main.jpg',
    },
    {
      id: '9d242d3e-4f93-437e-8aeb-95a98a3aab5b',
      name: 'Sweatpants',
      price: 2499,
      size: 'M',
      shortDescription: 'Comfortable sweatpants',
      description:
        'Soft and cozy sweatpants, perfect for lounging or workouts.',
      category: 'Bottoms',
      mainImage: 'sweatpants/main.jpg',
    },
    {
      id: '60bc81de-1d7f-4e7c-8666-216d80a27e2f',
      name: 'Hoodie',
      price: 3999,
      size: 'L',
      shortDescription: 'Warm and stylish hoodie',
      description:
        'A stylish hoodie with a soft inner lining, ideal for cool weather.',
      category: 'Tops',
      mainImage: 'hoodie/main.jpg',
    },
    {
      id: 'd2a94507-16a4-4267-9531-4edb5a9097d2',
      name: 'Sunglasses',
      price: 1499,
      size: 'One Size',
      shortDescription: 'Stylish sunglasses',
      description: 'UV-protection sunglasses with a modern design.',
      category: 'Accessories',
      mainImage: 'sunglasses/main.jpg',
    },
    {
      id: 'f4e0ed33-4d96-4f07-85d2-1f761cc43a2a',
      name: 'Running Shorts',
      price: 1999,
      size: 'M',
      shortDescription: 'Lightweight running shorts',
      description:
        'Breathable and comfortable shorts, perfect for running and other workouts.',
      category: 'Bottoms',
      mainImage: 'shorts/main.jpg',
    },
  ];
}

function getImages() {
  return [
    // Images for 'Summer T-Shirt'
    {
      url: 'tshirt/1.jpg',
      productId: 'ae2f8164-1c1e-4b6f-8a87-11e213eace57',
    },
    {
      url: 'tshirt/2.jpg',
      productId: 'ae2f8164-1c1e-4b6f-8a87-11e213eace57',
    },
    {
      url: 'tshirt/3.jpg',
      productId: 'ae2f8164-1c1e-4b6f-8a87-11e213eace57',
    },
    {
      url: 'tshirt/4.jpg',
      productId: 'ae2f8164-1c1e-4b6f-8a87-11e213eace57',
    },
    // Images for 'Winter Jacket'
    {
      url: 'winterJacket/1.jpg',
      productId: 'b5d6c171-0e50-4d95-a5f7-78957f9214d5',
    },
    {
      url: 'winterJacket/2.jpg',
      productId: 'b5d6c171-0e50-4d95-a5f7-78957f9214d5',
    },
    {
      url: 'winterJacket/3.jpg',
      productId: 'b5d6c171-0e50-4d95-a5f7-78957f9214d5',
    },
    {
      url: 'winterJacket/4.jpg',
      productId: 'b5d6c171-0e50-4d95-a5f7-78957f9214d5',
    },
    // Images for 'Denim Jeans'
    {
      url: 'denimJeans/1.jpg',
      productId: 'd55d4d8b-4b23-469e-96be-bf3dfdcf8690',
    },
    {
      url: 'denimJeans/2.jpg',
      productId: 'd55d4d8b-4b23-469e-96be-bf3dfdcf8690',
    },
    {
      url: 'denimJeans/3.jpg',
      productId: 'd55d4d8b-4b23-469e-96be-bf3dfdcf8690',
    },
    {
      url: 'denimJeans/4.jpg',
      productId: 'd55d4d8b-4b23-469e-96be-bf3dfdcf8690',
    },
    // Images for 'Sneakers'
    {
      url: 'sneakers/1.jpg',
      productId: 'd6ad66c0-2b1a-4ae3-8894-4541e32b1b85',
    },
    {
      url: 'sneakers/2.jpg',
      productId: 'd6ad66c0-2b1a-4ae3-8894-4541e32b1b85',
    },
    {
      url: 'sneakers/3.jpg',
      productId: 'd6ad66c0-2b1a-4ae3-8894-4541e32b1b85',
    },
    {
      url: 'sneakers/4.jpg',
      productId: 'd6ad66c0-2b1a-4ae3-8894-4541e32b1b85',
    },
    // Images for 'Leather Jacket'
    {
      url: 'leatherJacket/1.jpg',
      productId: '2e718815-b191-43b3-a3b8-3a6e60d8347a',
    },
    {
      url: 'leatherJacket/2.jpg',
      productId: '2e718815-b191-43b3-a3b8-3a6e60d8347a',
    },
    {
      url: 'leatherJacket/3.jpg',
      productId: '2e718815-b191-43b3-a3b8-3a6e60d8347a',
    },
    {
      url: 'leatherJacket/4.jpg',
      productId: '2e718815-b191-43b3-a3b8-3a6e60d8347a',
    },
    // Images for 'Baseball Cap'
    {
      url: 'baseballCap/1.jpg',
      productId: '92fa4326-c7db-42b6-9b2c-5bb46b63cf4c',
    },
    {
      url: 'baseballCap/2.jpg',
      productId: '92fa4326-c7db-42b6-9b2c-5bb46b63cf4c',
    },
    {
      url: 'baseballCap/3.jpg',
      productId: '92fa4326-c7db-42b6-9b2c-5bb46b63cf4c',
    },
    {
      url: 'baseballCap/4.jpg',
      productId: '92fa4326-c7db-42b6-9b2c-5bb46b63cf4c',
    },
    // Images for 'Sweatpants'
    {
      url: 'sweatpants/1.jpg',
      productId: '9d242d3e-4f93-437e-8aeb-95a98a3aab5b',
    },
    {
      url: 'sweatpants/2.jpg',
      productId: '9d242d3e-4f93-437e-8aeb-95a98a3aab5b',
    },
    {
      url: 'sweatpants/3.jpg',
      productId: '9d242d3e-4f93-437e-8aeb-95a98a3aab5b',
    },
    {
      url: 'sweatpants/4.jpg',
      productId: '9d242d3e-4f93-437e-8aeb-95a98a3aab5b',
    },
    // Images for 'Hoodie'
    {
      url: 'hoodie/1.jpg',
      productId: '60bc81de-1d7f-4e7c-8666-216d80a27e2f',
    },
    {
      url: 'hoodie/2.jpg',
      productId: '60bc81de-1d7f-4e7c-8666-216d80a27e2f',
    },
    {
      url: 'hoodie/3.jpg',
      productId: '60bc81de-1d7f-4e7c-8666-216d80a27e2f',
    },
    {
      url: 'hoodie/4.jpg',
      productId: '60bc81de-1d7f-4e7c-8666-216d80a27e2f',
    },
    // Images for 'Sunglasses'
    {
      url: 'sunglasses/1.jpg',
      productId: 'd2a94507-16a4-4267-9531-4edb5a9097d2',
    },
    {
      url: 'sunglasses/2.jpg',
      productId: 'd2a94507-16a4-4267-9531-4edb5a9097d2',
    },
    {
      url: 'sunglasses/3.jpg',
      productId: 'd2a94507-16a4-4267-9531-4edb5a9097d2',
    },
    {
      url: 'sunglasses/4.jpg',
      productId: 'd2a94507-16a4-4267-9531-4edb5a9097d2',
    },
    // Images for 'Running Shorts'
    {
      url: 'shorts/1.jpg',
      productId: 'f4e0ed33-4d96-4f07-85d2-1f761cc43a2a',
    },
    {
      url: 'shorts/2.jpg',
      productId: 'f4e0ed33-4d96-4f07-85d2-1f761cc43a2a',
    },
    {
      url: 'shorts/3.jpg',
      productId: 'f4e0ed33-4d96-4f07-85d2-1f761cc43a2a',
    },
    {
      url: 'shorts/4.jpg',
      productId: 'f4e0ed33-4d96-4f07-85d2-1f761cc43a2a',
    },
  ];
}

// function getOrders() {
//   return [
//     {
//       id: '1ecf60b6-4a6f-4534-a551-51d1e7d435a3',
//       userName: 'John Doe',
//       userEmail: 'john.doe@example.com',
//       userAddress: '123 Main St, Anytown, USA',
//       delivery: 'Standard Shipping',
//       priceOnlyProducts: 13998,
//       priceTotal: 14498,
//       createdAt: '2024-05-26T10:00:00Z',
//       updatedAt: '2024-05-26T10:00:00Z',
//     },
//     {
//       id: 'af7b35b3-9ff3-4995-b9a5-154b0c8c59e8',
//       userName: 'Jane Smith',
//       userEmail: 'jane.smith@example.com',
//       userAddress: '456 Elm St, Othertown, USA',
//       delivery: 'Express Shipping',
//       priceOnlyProducts: 2999,
//       priceTotal: 3499,
//       createdAt: '2024-05-26T12:00:00Z',
//       updatedAt: '2024-05-26T12:00:00Z',
//     },
//     {
//       id: '1dbf9b86-9b10-4990-8287-73fc728db015',
//       userName: 'Alice Johnson',
//       userEmail: 'alice.johnson@example.com',
//       userAddress: '789 Oak St, Anycity, USA',
//       delivery: 'Standard Shipping',
//       priceOnlyProducts: 1999,
//       priceTotal: 2499,
//       createdAt: '2024-05-26T14:00:00Z',
//       updatedAt: '2024-05-26T14:00:00Z',
//     },
//     {
//       id: 'c7029c19-d6a6-47d2-8d15-88d07f13a8d7',
//       userName: 'Bob Brown',
//       userEmail: 'bob.brown@example.com',
//       userAddress: '321 Pine St, Yourtown, USA',
//       delivery: 'Standard Shipping',
//       priceOnlyProducts: 15998,
//       priceTotal: 16498,
//       createdAt: '2024-05-26T16:00:00Z',
//       updatedAt: '2024-05-26T16:00:00Z',
//     },
//     {
//       id: 'ea742b9c-69a4-4f5d-a59e-8e22b7984d52',
//       userName: 'Catherine Green',
//       userEmail: 'catherine.green@example.com',
//       userAddress: '654 Maple St, Mytown, USA',
//       delivery: 'Express Shipping',
//       priceOnlyProducts: 2499,
//       priceTotal: 2999,
//       createdAt: '2024-05-26T18:00:00Z',
//       updatedAt: '2024-05-26T18:00:00Z',
//     },
//   ];
// }

// function getOrderProduct() {
//   return [
//     {
//       orderId: '1ecf60b6-4a6f-4534-a551-51d1e7d435a3',
//       productId: 'b5d6c171-0e50-4d95-a5f7-78957f9214d5',
//     },
//     {
//       orderId: '1ecf60b6-4a6f-4534-a551-51d1e7d435a3',
//       productId: 'd55d4d8b-4b23-469e-96be-bf3dfdcf8690',
//     },
//     {
//       orderId: 'af7b35b3-9ff3-4995-b9a5-154b0c8c59e8',
//       productId: 'd55d4d8b-4b23-469e-96be-bf3dfdcf8690',
//     },
//     {
//       orderId: '1dbf9b86-9b10-4990-8287-73fc728db015',
//       productId: 'ae2f8164-1c1e-4b6f-8a87-11e213eace57',
//     },
//     {
//       orderId: '1dbf9b86-9b10-4990-8287-73fc728db015',
//       productId: 'b5d6c171-0e50-4d95-a5f7-78957f9214d5',
//     },
//     {
//       orderId: '1dbf9b86-9b10-4990-8287-73fc728db015',
//       productId: '9d242d3e-4f93-437e-8aeb-95a98a3aab5b',
//     },
//     {
//       orderId: 'c7029c19-d6a6-47d2-8d15-88d07f13a8d7',
//       productId: '2e718815-b191-43b3-a3b8-3a6e60d8347a',
//     },
//     {
//       orderId: 'ea742b9c-69a4-4f5d-a59e-8e22b7984d52',
//       productId: '9d242d3e-4f93-437e-8aeb-95a98a3aab5b',
//     },
//   ];
// }

async function seed() {
  // Delete existing data
  await db.order.deleteMany();
  await db.product.deleteMany();
  await db.image.deleteMany();

  // Seed products
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );

  // Seed images
  await Promise.all(
    getImages().map((image) => {
      return db.image.create({ data: image });
    }),
  );
}

seed();
