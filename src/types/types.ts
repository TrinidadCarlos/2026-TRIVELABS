export interface BlogPost {
  title: string;
  description: string;
  content?: string;
  image: string;
  tags: string[];
  relevance: "Tech Data" | "Dev News" | "Breaking News";
  relevanceType: "news" | "tech" | "dev"; // esto da color, son clases css en blogsection.css
  date: string;
  publishedBy: string;
  href: string;
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


export interface Service {
  level: string;
  price: string;
  priceValue: string;
  description: string;
  includes: string[];
  bestFor: string;
  discountPercentage?: string;
  timeDelivery?: string;
}

export interface ServiceFull {
  serviceTitle: string;
  allServices: Service[];
}
