const mockProducts = [
    {
        id: 1,
        title: 'Product 1',
        description: 'Description for Product 1',
        images: [
            {
                url: '../public/product/bouquet/christie-kim-0IsBu45B3T8-unsplash (1).jpg',
                main: true,
                imageCaption: 'Photo by <a href="https://unsplash.com/@christieckim?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Christie Kim</a> on <a href="https://unsplash.com/photos/red-flower-arrangement-on-white-table-0IsBu45B3T8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
            }
        ],
        category: 'bouquet',
        price: 29.99,
        stock: 100
    },
    {
        id: 2,
        title: 'Product 2',
        description: 'Description for Product 2',
        images: [
            {
                url: '../public/product/bouquet/markus-clemens-mibjbNoS1XA-unsplash (1).jpg',
                main: true,
                imageCaption: 'Image for Product 2',
            }
        ],
        category: 'bouquet',
        price: 39.99,
        stock: 100
    },
    {
        id: 3,
        title: 'Product 3',
        description: 'Description for Product 3',
        images: [
            {
                url: '../public/product/bouquet/uljana-borodina-NFj6pEUdmpY-unsplash (1).jpg',
                main: true,
                imageCaption: 'Image for Product 3',
            }
        ],
        category: 'bouquet',
        price: 49.99,
        stock: 100
    },
    {
        id: 4,
        title: 'Product 4',
        description: 'Description for Product 4',
        images: [
            {
                url: '../public/product/wedding/jessie-daniella-aiNU4cA4UzQ-unsplash.jpg',
                main: true,
                imageCaption: 'Photo by <a href="https://unsplash.com/@jessiedaniella?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">jessie daniella</a> on <a href="https://unsplash.com/photos/jessie-daniella-aiNU4cA4UzQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
            }
        ],
        category: 'wedding',
        price: 59.99,
        stock: 100
    },
    {
        id: 5,
        title: 'Product 5',
        description: 'Description for Product 5',
        category: 'wedding',
        price: 59.99,
        stock: 100,
        images: [
            {
                url: '../public/product/wedding/jessie-daniella-QLuleNy8LMM-unsplash.jpg',
                main: true,
                imageCaption: 'Photo by <a href="https://unsplash.com/@jessiedaniella?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">jessie daniella</a> on <a href="https://unsplash.com/photos/pink-and-white-rose-bouquet-QLuleNy8LMM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',

            }
        ]
    },
    {
        id: 6,
        title: 'Snake plant',
        description: 'Description for Product 6',
        image: '../public/product/wedding/jessie-daniella-QLuleNy8LMM-unsplash.jpg',
        imageCaption: 'Photo by <a href="https://unsplash.com/@feeypflanzen?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">feey</a> on <a href="https://unsplash.com/photos/a-person-holding-a-potted-plant-in-their-hand-URA9g8uTFqg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
        category: 'wedding',
        price: 59.99,
        stock: 100,
        images: [
            {
                url: '../public/product/indoor-plants/feey-URA9g8uTFqg-unsplash.jpg',
                main: true,
                imageCaption: 'Photo by <a href="https://unsplash.com/@feeypflanzen?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">feey</a> on <a href="https://unsplash.com/photos/a-person-holding-a-potted-plant-in-their-hand-URA9g8uTFqg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
            },
            {
                url: '../public/product/indoor-plants/feey-pFmgDciTTKg-unsplash.jpg',
                main: false,
                imageCaption: 'Photo by <a href="https://unsplash.com/@feeypflanzen?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">feey</a> on <a href="https://unsplash.com/photos/a-person-holding-a-potted-plant-in-their-hand-URA9g8uTFqg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
            }
        ]
    }
];

const mockPaymentMethods = [
        { 
            key: 'credit-card',
            name: 'Credit Card',
            description: 'Pay with your credit card.',
            icon: 'creditcard'
        },
        { 
            key: 'pay-later',
            name: 'Pay Later',
            description: 'Choose to pay later at your convenience.',
            icon: 'cash'
        },
        { 
            key: 'bank-transfer',
            name: 'Bank Transfer',
            description: 'Transfer directly from your bank account.',
            icon: 'bank',
            disabled: false
        }
    ];

const hasDefaultAddress = true;

const countries = Object.freeze({
    ca: 'Canada',
    de: 'Germany',
});

const mockCustomer = {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '555-555-5555',
        defaultShippingAddress: (() => {
            if (!hasDefaultAddress) return null;
            return {
                id: 1,
                firstName: 'John',
                lastName: 'Doe',
                street: '123 Main St',
                city: 'Anytown',
                state: 'ON',
                postalCode: '12345',
                country: 'ca',
            }
        })(),
        defaultBillingAddress: (() => {
            if (!hasDefaultAddress) return null;
            return {
                id: 2,
                firstName: 'Jane',
                lastName: 'Doe',
                street: '456 Elm St',
                city: 'Othertown',
                state: 'Berlin',
                postalCode: '67890',
                country: 'de'
            }
        })()
};

const mockCart = {
    id: 1,
    voucher: {
        code: 'SUMMER21',
        discountAmount: 10.00,
        description: 'Summer 2021 Discount'
    },
    // voucher: null,
    items: [
        {
            id: 1,
            image: '../public/product/bouquet/christie-kim-0IsBu45B3T8-unsplash (1).jpg',
            title: 'Product 1',
            productLink: '/product/1',
            productId: 1,
            quantity: 2,
            stock: 10,
            price: {
                current: 29.99,
                original: 39.99
            },
        },
        {
            id: 2,
            image: '../public/product/bouquet/markus-clemens-mibjbNoS1XA-unsplash (1).jpg',
            title: 'Product 2',
            productLink: '/product/2',
            productId: 2,
            quantity: 1,
            stock: 10,
            price: {
                current: 19.99,
                original: 19.99
            }
        }
    ],
    billingAddress: { ...mockCustomer.defaultBillingAddress, isDefault: true },
    shippingAddress: { ...mockCustomer.defaultShippingAddress, isDefault: true },
    paymentMethod: mockPaymentMethods[0],
    subTotal: 59.98, // should be derived from items
    taxes: 5.99,
    shippingCost: 4.99,
    discount: 10.00,
    grandTotal: 59.98 // should be subtotal + tax + shipping - discount
}