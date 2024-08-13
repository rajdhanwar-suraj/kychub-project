export const getProducts = async () => {
    try {
        // Try fetching from the primary API
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
            throw new Error('Failed to fetch from dummyjson API');
        }
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Primary API failed:', error);
        
        // Fall back to the secondary API
        const fallbackResponse = await fetch('https://fakestoreapi.com/products');
        const fallbackData = await fallbackResponse.json();
        return fallbackData;
    }
};
