const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5004;

// MongoDB connection URI
const MONGO_URI = "mongodb+srv://varun:454697@ksp.gqt0t.mongodb.net/M_v";

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB with better error handling
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connection successful'))
.catch(err => console.error('MongoDB connection error:', err));

const db = mongoose.connection;
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define Contact schema with TTL index for auto-deletion after 7 days
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now, expires: '7d' }  // Auto-delete after 7 days
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema, 'contact');

// Route to handle contact form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    console.log('Received contact form data:', { name, email, phone, subject, message });

    // Check DB connection before saving
    if (mongoose.connection.readyState !== 1) {
      console.error('Database not connected. Connection state:', mongoose.connection.readyState);
      return res.status(500).json({ error: 'Database connection issue', details: 'Not connected to database' });
    }

    // Create a new contact document
    const newContact = new Contact({ name, email, phone, subject, message });

    // Validate before saving
    const validationError = newContact.validateSync();
    if (validationError) {
      console.error('Validation error:', validationError);
      return res.status(400).json({ error: 'Validation failed', details: validationError.message });
    }

    // Save contact form data
    const savedContact = await newContact.save();
    console.log('Contact saved successfully with ID:', savedContact._id);

    res.status(201).json({ message: 'Contact saved successfully', id: savedContact._id });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ 
      error: 'Failed to save contact', 
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Route to check database connection
app.get('/api/test-db', async (req, res) => {
  try {
    const connectionState = {
      readyState: mongoose.connection.readyState,
      status: ['disconnected', 'connected', 'connecting', 'disconnecting'][mongoose.connection.readyState] || 'unknown'
    };
    res.status(200).json({ 
      message: 'DB connection test', 
      connection: connectionState,
      models: Object.keys(mongoose.models)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to fetch all contacts
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Failed to fetch contacts', details: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
