const API = 'http://localhost:8080/products';

export const getProducts = async () => {
    try {
        const response = await fetch(API);

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error("Error al obtener productos:", error);
        return [];
    }
};
