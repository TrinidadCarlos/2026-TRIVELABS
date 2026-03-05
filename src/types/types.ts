export interface BlogPost {
  title: string;
  description: string;
  image: string;
  tags: string[];
  relevance: string;
  relevanceType: "news" | "tech" | "dev"; // esto da color, son clases css en blogsection.css
}

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  deliveryTime: string;
  type: "Landing" | "Sitio Web" | "CMS";
  brand?: string;
}
