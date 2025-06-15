
export interface Review {
  id: number;
  stars: number;
  comment: string;
}

export interface GenReview {
  username: string;
  stars: number;
  comment: string;
  date?: string;
}

export interface Product {
  id: string;
  userId: string;
  product_name: string;
  price: number;
  img: string;
  thumbnail_img: string[]; 
  hover_img: string;
  description: string;
  likes: number;
  reviews: Review[];
}

export const ProductList : Product[] = [
    {
        id: "665f5b2a4b4f3a71e9d5d811",
        userId: "trial@gmail.com",
        product_name: "Product Test",
        price: 5000,
        img: "/earpod2.jpg",
        thumbnail_img: [
            // "/earpod.jpg",
            // "/earpod2.jpg"
        ],
        hover_img: "/earpod2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, inventore sapiente neque hic facilis nemo dolorem veritatis quaerat odit officiis?",
        likes: 0,
        reviews: [
            {
                id: 1252,
                stars: 5,
                comment: "I love this product its very nice"
            },
            {
                id: 152,
                stars: 2,
                comment: "I dont like this type of color"
            },
            {
                id: 155,
                stars: 5,
                comment: "Very useuful product"
            },
            {
                id: 16,
                stars: 4,
                comment: "it's ok, I recommend it"
            },
        ]
    },
    {
        id: "665f5b2a4b4f3a71e9d5d812",
        userId: "trial@gmail.com",
        product_name: "Product Test",
        price: 5000,
        img: "/earpod.jpg",
        thumbnail_img: [
            "/earpod.jpg",
            "/earpod2.jpg"
        ],
        hover_img: "/earpod2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, inventore sapiente neque hic facilis nemo dolorem veritatis quaerat odit officiis?",
        likes: 4,
        reviews: [
            {
                id: 156,
                stars: 555,
                comment: "I love this product its very nice"
            },
        ]
    },
    {
        id: "665f5b2a4b4f3a71e9d5d813",
        userId: "trial@gmail.com",
        product_name: "Product name",
        price: 5000,
        img: "/earpod.jpg",
        thumbnail_img: [
            "/earpod.jpg",
            "/earpod2.jpg"
        ],
        hover_img: "/earpod2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, inventore sapiente neque hic facilis nemo dolorem veritatis quaerat odit officiis?",
        likes: 0,
        reviews: [
            
            {
                id: 16,
                stars: 5,
                comment: "it's ok, I recommend it"
            },
        ]
    },
    {
        id: "665f5b2a4b4f3a71e9d5d814",
        userId: "trial@gmail.com",
        product_name: "Product name",
        price: 5000,
        img: "/earpod.jpg",
        thumbnail_img: [
            "/earpod.jpg",
            "/earpod2.jpg"
        ],
        hover_img: "/earpod2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, inventore sapiente neque hic facilis nemo dolorem veritatis quaerat odit officiis?",
        likes: 4,
        reviews: [
            
        ]
    },
    {
        id: "665f5b2a4b4f3a71e9d5d815",
        userId: "trial@gmail.com",
        product_name: "Product name",
        price: 5000,
        img: "/earpod.jpg",
        thumbnail_img: [
            "/earpod.jpg",
            "/earpod2.jpg"
        ],
        hover_img: "/earpod2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, inventore sapiente neque hic facilis nemo dolorem veritatis quaerat odit officiis?",
        likes: 4,
        reviews: [
            {
                id: 16,
                stars: 5,
                comment: "I love this product its very nice"
            },
            
            {
                id: 155,
                stars: 5,
                comment: "Very useuful product"
            },
            {
                id: 162,
                stars: 5,
                comment: "it's ok, I recommend it"
            },
        ]
    },
    {
        id: "665f5b2a4b4f3a71e9d5d816",
        userId: "trial@gmail.com",
        product_name: "Product name",
        price: 5000,
        img: "/earpod.jpg",
        thumbnail_img: [
            "/earpod.jpg",
            "/earpod2.jpg"
        ],
        hover_img: "/earpod2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, inventore sapiente neque hic facilis nemo dolorem veritatis quaerat odit officiis?",
        likes: 4,
        reviews: [
           
        ]
    },
    {
        id: "665f5b2a4b4f3a71e9d5d817",
        userId: "trial@gmail.com",
        product_name: "Product name",
        price: 5000,
        img: "/earpod.jpg",
        thumbnail_img: [
            "/earpod.jpg",
            "/earpod2.jpg"
        ],
        hover_img: "/earpod2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, inventore sapiente neque hic facilis nemo dolorem veritatis quaerat odit officiis?",
        likes: 4,
        reviews: [
            {
                id: 1,
                stars: 5,
                comment: "I love this product its very nice"
            },
            {
                id: 144,
                stars: 5,
                comment: "I dont like this type of color"
            },
            {
                id: 16,
                stars: 5,
                comment: "Very useuful product"
            },
            
        ]
    },
    {
        id: "665f5b2a4b4f3a71e9d5d818",
        userId: "trial@gmail.com",
        product_name: "Product name",
        price: 5000,
        img: "/earpod.jpg",
        thumbnail_img: [
            "/earpod.jpg",
            "/earpod2.jpg"
        ],
        hover_img: "/earpod2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, inventore sapiente neque hic facilis nemo dolorem veritatis quaerat odit officiis?",
        likes: 4,
        reviews: [
            {
                id: 1333,
                stars: 5,
                comment: "I love this product its very nice"
            },
            {
                id: 133,
                stars: 5,
                comment: "I dont like this type of color"
            },
           
        ]
    },
    {
        id: "665f5b2a4b4f3a71e9d5d819",
        userId: "trial@gmail.com",
        product_name: "Product name",
        price: 5000,
        img: "/earpod.jpg",
        thumbnail_img: [
            "/earpod.jpg",
            "/earpod2.jpg"
        ],
        hover_img: "/earpod2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, inventore sapiente neque hic facilis nemo dolorem veritatis quaerat odit officiis?",
        likes: 4,
        reviews: [
            {
                id: 1,
                stars: 5,
                comment: "I love this product its very nice"
            },
           
            {
                id: 13,
                stars: 5,
                comment: "it's ok, I recommend it"
            },
        ]
    },
    {
        id: "665f5b2a4b4f3a71e9d5d810",
        userId: "trial@gmail.com",
        product_name: "Product name",
        price: 5000,
        img: "/earpod2.jpg",
        thumbnail_img: [
            "/earpod.jpg",
            "/earpod2.jpg"
        ],
        hover_img: "/earpod2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, inventore sapiente neque hic facilis nemo dolorem veritatis quaerat odit officiis?",
        likes: 4,
        reviews: [
            {
                id: 1222,
                stars: 5,
                comment: "I love this product its very nice"
            },
            {
                id: 121,
                stars: 5,
                comment: "I dont like this type of color"
            },
            {
                id: 12,
                stars: 35,
                comment: "Very useuful product"
            },
            {
                id: 17,
                stars: 5,
                comment: "it's ok, I recommend it"
            },
        ]
    },
    {
        id: "665f5b2a4b4f3a71e9d5d111",
        userId: "trial@email.com",
        product_name: "Product Test",
        price: 5000,
        img: "/earpod.jpg",
        thumbnail_img: [
            "/earpod.jpg",
            "/earpod2.jpg"
        ],
        hover_img: "/earpod2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, inventore sapiente neque hic facilis nemo dolorem veritatis quaerat odit officiis?",
        likes: 4,
        reviews: [
            {
                id: 67,
                stars: 5,
                comment: "I love this product its very nice"
            },
            {
                id: 6,
                stars: 5,
                comment: "I dont like this type of color"
            },
            {
                id: 2,
                stars: 5,
                comment: "Very useuful product"
            },
            {
                id: 3,
                stars: 5,
                comment: "it's ok, I recommend it"
            },
        ]
    },
   
]

export const GeneralReview : GenReview[] = [
    { 
        username: "Prince",
        stars: 5,
        comment: "I love this product its very nice"
    },
    {        username: "Mike",
        stars: 2,
        comment: "I dont like this type of color"
    },
    {        username: "Johnson",
        stars: 5,
        comment: "Very useuful product"
    },
]
