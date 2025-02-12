import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Conectar a MongoDB
const connectDB = async () => {
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
        console.error('La variable de entorno MONGODB_URI no está definida');
        process.exit(1); // Salir del proceso si no está definida
    }

    try {
        await mongoose.connect(mongoURI); // Eliminar las opciones
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1); // Salir del proceso si hay un error
    }
};

// Llamar a la función de conexión
connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Taured Group API is running!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;