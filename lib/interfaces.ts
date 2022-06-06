export type Product = {
   product_id: string;
   variant_id: string;
   total_price: string;
   price_per_unit: string;
   list_price_id: string;
   sku: string;
   categories: string[];
   units_per_pack: number;
   image_url: string;
   handle: string;
   compare_at_price: string;
   allowed_packs: number[];
   name: string;
   description: string;
   discount_percentage: number;
   size: number;
   price_per_litre: string;
}
export type Movie = {
   adult: boolean
   backdrop_path: string
   genre_ids: number[]
   id: number
   original_language: string
   original_title: string
   overview: string
   popularity: number
   poster_path: string
   release_date: string
   title: string
   video: boolean
   vote_average: number
   vote_count: number
   imhHover?: string
}