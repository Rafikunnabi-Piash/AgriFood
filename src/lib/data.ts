import { Product } from '../store/useStore';

export const products: Product[] = [
  {
    id: "1",
    name: "Wildflower Raw Honey",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1587049352847-4d4b126a310c?auto=format&fit=crop&q=80&w=800",
    category: "Honey",
    rating: 4.8,
    reviews: 124,
    isOrganic: true,
    description: "Pure, unfiltered wildflower honey sourced directly from local beekeepers. Rich in antioxidants and natural enzymes.",
    nutritionInfo: { calories: "60", fat: "0g", carbs: "17g", protein: "0g" }
  },
  {
    id: "2",
    name: "Organic Raw Almonds",
    price: 15.49,
    image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&q=80&w=800",
    category: "Nuts",
    rating: 4.9,
    reviews: 89,
    isOrganic: true,
    description: "Premium California-grown organic raw almonds. Perfect for snacking, baking, or making fresh almond milk.",
    nutritionInfo: { calories: "160", fat: "14g", carbs: "6g", protein: "6g" }
  },
  {
    id: "3",
    name: "Extra Virgin Olive Oil",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=800",
    category: "Oils",
    rating: 4.7,
    reviews: 210,
    isOrganic: true,
    description: "Cold-pressed extra virgin olive oil from sun-drenched Mediterranean groves. Robust, peppery finish perfect for finishing dishes.",
    nutritionInfo: { calories: "120", fat: "14g", carbs: "0g", protein: "0g" }
  },
  {
    id: "4",
    name: "Rolled Whole Oats",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=800",
    category: "Grains",
    rating: 4.6,
    reviews: 56,
    isOrganic: false,
    description: "Thick-cut rolled oats, ideal for a hearty, healthy breakfast or baking wholesome cookies and bread.",
    nutritionInfo: { calories: "150", fat: "2.5g", carbs: "27g", protein: "5g" }
  },
  {
    id: "5",
    name: "Premium Walnut Halves",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?auto=format&fit=crop&q=80&w=800",
    category: "Nuts",
    rating: 4.8,
    reviews: 112,
    isOrganic: true,
    description: "Unsalted, raw walnut halves packed with Omega-3s. A smart addition to salads, oatmeal, or snacking.",
    nutritionInfo: { calories: "180", fat: "18g", carbs: "4g", protein: "4g" }
  },
  {
    id: "6",
    name: "Avocado Oil",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1525904097878-c0f1c6974bf6?auto=format&fit=crop&q=80&w=800",
    category: "Oils",
    rating: 4.9,
    reviews: 145,
    isOrganic: true,
    description: "100% pure avocado oil, naturally refined for high heat cooking and gentle flavor perfect for dressings.",
    nutritionInfo: { calories: "120", fat: "14g", carbs: "0g", protein: "0g" }
  },
  {
    id: "7",
    name: "Himalayan Pink Salt",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1518110925495-2cc0bf39a1a4?auto=format&fit=crop&q=80&w=800",
    category: "Organic Items",
    rating: 4.7,
    reviews: 88,
    isOrganic: false,
    description: "Unrefined pink salt mined from the Himalayan mountains, rich in trace minerals and exquisite flavor.",
    nutritionInfo: { calories: "0", fat: "0g", carbs: "0g", protein: "0g" }
  },
  {
    id: "8",
    name: "Organic Chia Seeds",
    price: 12.49,
    image: "https://images.unsplash.com/photo-1515589139368-80f438a2e72f?auto=format&fit=crop&q=80&w=800",
    category: "Organic Items",
    rating: 4.9,
    reviews: 420,
    isOrganic: true,
    description: "A superfood powerhouse loaded with fiber, protein, and Omega-3s. Excellent for smoothies, puddings, or baking.",
    nutritionInfo: { calories: "130", fat: "9g", carbs: "10g", protein: "5g" }
  }
];

export const categories = ["All", "Honey", "Nuts", "Oils", "Grains", "Organic Items"];
