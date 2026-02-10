import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api';

export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add auth token to requests if available
apiClient.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('auth_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
});

// API functions for backend communication
export const api = {
    // Products
    getProducts: () => apiClient.get('/products'),
    getProductBySlug: (slug: string) => apiClient.get(`/products/${slug}`),

    // Blog
    getBlogs: () => apiClient.get('/blogs'),
    getBlogBySlug: (slug: string) => apiClient.get(`/blogs/${slug}`),

    // Contact
    submitContactForm: (data: any) => apiClient.post('/contact', data),

    // Quote
    submitQuoteRequest: (data: any) => apiClient.post('/quote', data),
};
