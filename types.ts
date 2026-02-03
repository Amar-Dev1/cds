export interface NewsArticle {
  id: number;
  created_at: string;
  title: string;
  content: string;
  image_url: string | null;
}
