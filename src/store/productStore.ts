
import { create } from 'zustand';
import { Product, ProductStage, Priority } from '@/types/product';

interface ProductFilters {
  stage?: ProductStage[];
  priority?: Priority[];
  category?: string[];
  searchQuery?: string;
}

interface ProductStore {
  products: Product[];
  selectedProduct: Product | null;
  filters: ProductFilters;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  setProducts: (products: Product[]) => void;
  addProduct: (product: Product) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  selectProduct: (product: Product | null) => void;
  setFilters: (filters: ProductFilters) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  
  // Computed
  filteredProducts: () => Product[];
  getProductById: (id: string) => Product | undefined;
  getProductsByStage: (stage: ProductStage) => Product[];
  getCounts: () => Record<ProductStage, number>;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  selectedProduct: null,
  filters: {},
  isLoading: false,
  error: null,

  setProducts: (products) => set({ products }),
  
  addProduct: (product) => set((state) => ({
    products: [...state.products, product]
  })),
  
  updateProduct: (id, updates) => set((state) => ({
    products: state.products.map(p => 
      p.id === id ? { ...p, ...updates, updatedAt: new Date() } : p
    )
  })),
  
  deleteProduct: (id) => set((state) => ({
    products: state.products.filter(p => p.id !== id),
    selectedProduct: state.selectedProduct?.id === id ? null : state.selectedProduct
  })),
  
  selectProduct: (product) => set({ selectedProduct: product }),
  
  setFilters: (filters) => set({ filters }),
  
  setLoading: (isLoading) => set({ isLoading }),
  
  setError: (error) => set({ error }),
  
  filteredProducts: () => {
    const { products, filters } = get();
    return products.filter(product => {
      if (filters.stage && filters.stage.length > 0 && !filters.stage.includes(product.stage)) {
        return false;
      }
      if (filters.priority && filters.priority.length > 0 && !filters.priority.includes(product.priority)) {
        return false;
      }
      if (filters.category && filters.category.length > 0 && !filters.category.includes(product.category)) {
        return false;
      }
      if (filters.searchQuery && filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase();
        return product.name.toLowerCase().includes(query) ||
               product.description.toLowerCase().includes(query) ||
               product.metadata.tags.some(tag => tag.toLowerCase().includes(query));
      }
      return true;
    });
  },
  
  getProductById: (id) => get().products.find(p => p.id === id),
  
  getProductsByStage: (stage) => get().products.filter(p => p.stage === stage),
  
  getCounts: () => {
    const products = get().products;
    return {
      ideation: products.filter(p => p.stage === 'ideation').length,
      development: products.filter(p => p.stage === 'development').length,
      'go-to-market': products.filter(p => p.stage === 'go-to-market').length,
      launch: products.filter(p => p.stage === 'launch').length,
      live: products.filter(p => p.stage === 'live').length,
      'post-launch': products.filter(p => p.stage === 'post-launch').length,
    };
  }
}));
