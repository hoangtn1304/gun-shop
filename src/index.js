const { app } = require('@azure/functions');

app.setup({
    enableHttpStream: true,
});

// Define the GetProducts function
app.http('GetProducts', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (context, req) => {
        const products = [
            { id: 1, name: 'Sword', price: 100 },
            { id: 2, name: 'Axe', price: 150 },
            { id: 3, name: 'Gun', price: 200 },
        ];

        context.res = {
            body: products,
        };
    }
});
