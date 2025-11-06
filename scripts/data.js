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

const hasDefaultBillingAddress = true;
const hasDefaultShippingAddress = true;

const countries = Object.freeze({
    Canada: 'Canada',
    Germany: 'Germany',
});

const mockCustomer = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '555-555-5555',
    dob: '1990-01-01',
    defaultShippingAddress: (() => {
        if (!hasDefaultShippingAddress) return null;
        return {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            street: '123 Main St',
            city: 'Anytown',
            state: 'ON',
            postalCode: '12345',
            country: countries.Canada,
        }
    })(),
    defaultBillingAddress: (() => {
        if (!hasDefaultBillingAddress) return null;
        return {
            id: 2,
            firstName: 'Jane',
            lastName: 'Doe',
            street: '456 Elm St',
            city: 'Othertown',
            state: 'Berlin',
            postalCode: '67890',
            country: countries.Germany,
        }
    })(),
    newsletterSubscribed: true
};

const mockOrders = [
    {
        id: 1,
        orderNumber: 'ORD-1001',
        timestamp: '2025-10-01:15:30:00Z',
        canCancel: false,
        canReturn: false,
        status: 'shipped',
        shippingCost: 4.99,
        discountAmount: 9.00,
        totalAmount: 79.97,
        billingAddress: {
            name: 'John Doe',
            address: '123 Main St',
            city: 'Anytown',
            postalCode: '12345',
            country: 'Canada',
            email: 'john.doe@example.com'
        },
        shippingAddress: {
            name: 'John Doe',
            address: '123 Main St',
            city: 'Anytown',
            postalCode: '12345',
            country: 'Canada'
        },
        items: [
            {
                id: 1,
                title: 'Product 1',
                quantity: 2,
                image: '../public/product/bouquet/christie-kim-0IsBu45B3T8-unsplash (1).jpg',
                productLink: '/product/1',
                productId: 1,
                quantity: 2,
                originalPrice: 29.99,
                discounts: [
                    {
                        type: 'sale',
                        amount: 5.00,
                        description: 'Spring Sale',
                        amountType: 'fixed'
                    },
                    {
                        type: 'voucher',
                        amount: 4.00,
                        description: 'SUMMER21 Discount',
                        amountType: 'percentage'
                    }
                ]
            }, {
                id: 2,
                title: 'Product 2',
                quantity: 1,
                image: '../public/product/bouquet/markus-clemens-mibjbNoS1XA-unsplash (1).jpg',
                productLink: '/product/2',
                productId: 2,
                originalPrice: 19.99,
                discounts: [],
            }
        ],
        tracking: {
            trackingNumber: 'TRACK123456789',
            trackingLink: 'https://www.example.com/track?code=ORD-1001',
            status: 'In Transit',
            estimatedDelivery: '2025-10-05',
            history: [
                { timestamp: '2025-10-02', status: 'Shipped', location: 'Origin Facility' },
                { timestamp: '2025-10-03', status: 'In Transit', location: 'In Transit Facility' },
            ],
            carrier: 'FastShip'
        }
    },
    {
        id: 2,
        orderNumber: 'ORD-1002',
        timestamp: '2025-10-02:15:30:00Z',
        canCancel: true,
        canReturn: false,
        status: 'processing',
        shippingCost: 0,
        discountAmount: 5.00,
        totalAmount: 29.99,
        billingAddress: {
            name: 'John Doe',
            address: '123 Main St',
            city: 'Anytown',
            postalCode: '12345',
            country: 'Canada',
            email: 'john.doe@example.com'
        },
        shippingAddress: {
            name: 'John Doe',
            address: '123 Main St',
            city: 'Anytown',
            postalCode: '12345',
            country: 'Canada'
        },
        items: [
            {
                id: 1,
                title: 'Product 1',
                quantity: 1,
                image: '../public/product/bouquet/christie-kim-0IsBu45B3T8-unsplash (1).jpg',
                productLink: '/product/1',
                productId: 1,
                originalPrice: 29.99,
                discounts: []
            }
        ],
        tracking: null
    },
    {
        id: 3,
        orderNumber: 'ORD-1003',
        timestamp: '2025-10-03:15:30:00Z',
        canCancel: false,
        canReturn: true,
        status: 'delivered',
        shippingCost: 0,
        discountAmount: 0.00,
        totalAmount: 49.99,
        billingAddress: {
            name: 'John Doe',
            address: '123 Main St',
            city: 'Anytown',
            postalCode: '12345',
            country: 'Canada',
            email: 'john.doe@example.com'
        },
        shippingAddress: {
            name: 'John Doe',
            address: '123 Main St',
            city: 'Anytown',
            postalCode: '12345',
            country: 'Canada'
        },
        items: [
            {
                id: 1,
                title: 'Product 3',
                quantity: 1,
                image: '../public/product/bouquet/uljana-borodina-NFj6pEUdmpY-unsplash (1).jpg',
                productLink: '/product/3',
                productId: 3,
                originalPrice: 49.99,
                discounts: []
            }
        ],
        tracking: {
            trackingLink: 'https://www.example.com/track?code=ORD-1003',
            trackingNumber: 'TRACK123456789',
            status: 'Delivered',
            estimatedDelivery: '2025-10-07',
            history: [
                { timestamp: '2025-10-04', status: 'Out for Delivery', location: 'Local Facility' },
                { timestamp: '2025-10-05', status: 'Delivered', location: 'Customer Address' },
            ],
            carrier: 'FastShip'
        }
    },
    {
        id: 4,
        orderNumber: 'ORD-1004',
        timestamp: '2025-10-04:15:30:00Z',
        canCancel: false,
        canReturn: false,
        status: 'returned',
        shippingCost: 4.99,
        discountAmount: 15.00,
        totalAmount: 119.99,
        billingAddress: {
            name: 'John Doe',
            address: '123 Main St',
            city: 'Anytown',
            postalCode: '12345',
            country: 'Canada',
            email: 'john.doe@example.com'
        },
        shippingAddress: {
            name: 'John Doe',
            address: '123 Main St',
            city: 'Anytown',
            postalCode: '12345',
            country: 'Canada'
        },
        items: [
            {
                id: 1,
                title: 'Product 4',
                quantity: 2,
                image: '../public/product/wedding/jessie-daniella-aiNU4cA4UzQ-unsplash.jpg',
                productLink: '/product/4',
                productId: 4,
                originalPrice: 59.99,
                discounts: [
                    {
                        type: 'voucher',
                        amount: 15.00,
                        description: 'WELCOME15 Discount',
                        amountType: 'fixed'
                    }
                ]
            }
        ],
        tracking: {
            trackingLink: 'https://www.example.com/track?code=ORD-1004',
            carrier: 'FastShip Partner'
        }
    }
]

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
            }
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
    shippingCost: 4.99,
    discount: 10.00,
    grandTotal: 59.98 // should be subtotal + tax + shipping - discount
}

const mockModalContent = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, nec dictum nisi nisl euismod enim. Suspendisse potenti. Mauris euismod, nisl eget consectetur sagittis, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi. Sed euismod, nisl eget consectetur sagittis, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi. 

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam euismod, nisl eget consectetur sagittis, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Mauris euismod, nisl eget consectetur sagittis, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi. 

Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 

Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. 

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. 

Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula. Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis lectus. Vivamus consectetuer risus et tortor. 
`;

const mockSearchSuggestions = [
    { id: 1, label: 'Snake Plant' },
    { id: 2, label: 'Snake Plant Care' },
    { id: 3, label: 'Snake Plant Benefits' },
    { id: 4, label: 'Snake Plant Varieties' },
    { id: 5, label: 'Snake Plant Propagation' },
];
