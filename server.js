import express from 'express';

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static('public'));

// Endpoint to receive button click signal
app.post('/receive-signal', (req, res) => {
    try {
        // Log the received data from client
        console.log('Signal received from client:', req.body);
        
        // You can access specific fields if client sends JSON data
        // For example, if client sends { message: "Hello" }
        const clientMessage = req.body.message;
        console.log('Client message:', clientMessage);

        res.status(200).json({ message: 'Signal received successfully' });
    } catch (error) {
        console.error('Error processing signal:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});