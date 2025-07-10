document.addEventListener('DOMContentLoaded', function() {
    // Carrusel automático
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    setInterval(nextSlide, 5000);

    // Base de datos de productos (10 por categoría)
    const products = [
        // Maquillaje (10 productos)
        {
            id: 1,
            name: 'Paleta de Sombras Profesional',
            category: 'maquillaje',
            price: 250,
            image: 'https://m.media-amazon.com/images/I/51GqfVwaB0L._AC_.jpg',
            description: '15 tonos mate y brillantes, alta pigmentación'
        },
        {
            id: 2,
            name: 'Base de Maquillaje Líquida',
            category: 'maquillaje',
            price: 90,
            image: 'https://www.maybelline.com.mx/consejos-de-maquillaje/-/media/project/loreal/brand-sites/mny/americas/latam/articles/mx/face/elige-la-base-de-maquillaje-fit-me/fit-me-base-liquida.jpg?rev=208489eef2834621ada6ebfbc14992d4',
            description: 'Cobertura completa, 12 tonos disponibles'
        },
        {
            id: 3,
            name: 'Labial Matte Luxe',
            category: 'maquillaje',
            price: 98,
            image: 'https://img.ltwebstatic.com/images3_spmp/2024/04/10/b0/1712697991cccacba94387bdc2019d19572ea91e7f_thumbnail_720x.jpg',
            description: 'Larga duración, no se seca los labios'
        },
        {
            id: 4,
            name: 'Máscara de Pestañas Volumizadora',
            category: 'maquillaje',
            price: 86,
            image: 'https://cdn.shopify.com/s/files/1/1365/5917/products/thickening-mascara-engrosadora-de-pestanas-beauty-creations-2_1200x.jpg?v=1640214303',
            description: 'Efecto pestañas postizas sin grumos'
        },
        {
            id: 5,
            name: 'Iluminador en Crema',
            category: 'maquillaje',
            price: 89,
            image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Brillo natural, perfecto para piel seca'
        },
        {
            id: 6,
            name: 'Delineador de Ojos Líquido',
            category: 'maquillaje',
            price: 99,
            image: 'https://orchidsuplidoradebelleza.com/cdn/shop/products/D_NQ_NP_727832-MLM41227481963_032020-O.jpg?v=1665790628',
            description: 'Punta fina, resistente al agua'
        },
        {
            id: 7,
            name: 'Rubor en Polvo',
            category: 'maquillaje',
            price: 95,
            image: 'https://beautyloversmexico.com/cdn/shop/files/IMG_1653.webp?v=1711234443',
            description: '6 tonos disponibles, acabado natural'
        },
        {
            id: 8,
            name: 'Kit de Brochas Profesional',
            category: 'maquillaje',
            price: 180,
            image: 'https://productoslz.com/cdn/shop/products/IMG_1934.jpg?v=1734162616&width=1946',
            description: '12 brochas de pelo sintético premium'
        },
        {
            id: 9,
            name: 'Corrector de Alta Cobertura',
            category: 'maquillaje',
            price: 110,
            image: 'https://freetherabbit.com/cdn/shop/products/7502292320567_1_7137ed8f-f8a3-4db9-be04-22e1701d194e.jpg?v=1618853506',
            description: 'Camufla ojeras y imperfecciones'
        },
        {
            id: 10,
            name: 'Fijador de Maquillaje',
            category: 'maquillaje',
            price: 150,
            image: 'https://http2.mlstatic.com/D_NQ_NP_681316-MLA83087901205_032025-O.webp',
            description: 'Duración hasta 16 horas, acabado mate'
        },
        
        // Perfumes (10 productos)
        {
            id: 11,
            name: 'Perfume Flor de Cerezo',
            category: 'perfumes',
            price: 800,
            image: 'https://www.dior.com/on/demandware.static/-/Sites-master_dior/default/dw9b0f719f/Y0749427/Y0749427_C099600128_E01_GHC.jpg',
            description: 'Fragancia floral suave para mujeres'
        },
        {
            id: 12,
            name: 'Perfume Wood Noir',
            category: 'perfumes',
            price: 900,
            image: 'https://cdn.shopify.com/s/files/1/0676/5078/1449/files/wf-oud-wonder-perfumed-water-unisex-80ml_500x500.webp?v=1738581749',
            description: 'Fragancia amaderada para hombres'
        },
        {
            id: 13,
            name: 'Eau de Toilette Fresh',
            category: 'perfumes',
            price: 750,
            image: 'https://i.etsystatic.com/33577667/r/il/619cce/3696956165/il_fullxfull.3696956165_o65a.jpg',
            description: 'Aroma cítrico y fresco, unisex'
        },
        {
            id: 14,
            name: 'Perfume Vanilla Dream',
            category: 'perfumes',
            price: 840,
            image: 'https://cdn.shopify.com/s/files/1/1981/3329/files/058357382505-86-0_400x400.jpg?v=1732902133',
            description: 'Notas de vainilla y almizcle'
        },
        {
            id: 15,
            name: 'Perfume Ocean Breeze',
            category: 'perfumes',
            price: 790,
            image: 'https://perfumeclub.com/cdn/shop/files/Ocean-breeze-3.4-men.jpg?v=1720311494',
            description: 'Fragancia acuática y refrescante'
        },
        {
            id: 16,
            name: 'Perfume Oriental Spice',
            category: 'perfumes',
            price: 920,
            image: 'https://cdn.shopify.com/s/files/1/0584/8471/9782/files/Screenshot_2023-03-31_at_9.45.34_AM_480x480.png?v=1680277608',
            description: 'Notas especiadas y cálidas'
        },
        {
            id: 17,
            name: 'Eau de Parfum Rose',
            category: 'perfumes',
            price: 870,
            image: 'https://www.thebodyshop.se/cdn/shop/files/1034078_FULL_ROSE_EAU_DE_PARFUM_75ML_SILVER_INAEHPS250.webp?v=1749705120',
            description: 'Esencia pura de rosas búlgaras'
        },
        {
            id: 18,
            name: 'Perfume Citrus Splash',
            category: 'perfumes',
            price: 680,
            image: 'https://durance-uk.com/wp-content/uploads/2020/02/EternelsOrangeBlossom-1.jpg',
            description: 'Combinación de cítricos mediterráneos'
        },
        {
            id: 19,
            name: 'Perfume Mystic Oud',
            category: 'perfumes',
            price: 750,
            image: 'https://sensationfragrances.com/cdn/shop/files/MysticOud.png?v=1730754865&width=1080',
            description: 'Oud auténtico con notas orientales'
        },
        {
            id: 20,
            name: 'Perfume Summer Bloom',
            category: 'perfumes',
            price: 780,
            image: 'https://bathbodymx.vteximg.com.br/arquivos/ids/170841-700-764/026779517.jpg?v=638520048060100000https://bathbodymx.vteximg.com.br/arquivos/ids/170841-700-764/026779517.jpg?v=638520048060100000',
            description: 'Flores blancas y notas frutales'
        },
        
        // Higiene personal (10 productos)
        {
            id: 21,
            name: 'Gel de Baño Relax',
            category: 'higiene',
            price: 240,
            image: 'https://vervan.com/cdn/shop/files/pf-398eac37-228b-46a9-9316-d2e0fb84fab6--Gel-de-ducha.jpg?v=1634844926',
            description: 'Aroma a lavanda y almendras'
        },
        {
            id: 22,
            name: 'Kit de Cuidado Facial',
            category: 'higiene',
            price: 590,
            image: 'https://d22fxaf9t8d39k.cloudfront.net/dcf5917cca81b9eed33f30ad70245e11db9b2616faa74027c074071072b01c3993497.jpg',
            description: 'Limpiador, tónico y crema hidratante'
        },
        {
            id: 23,
            name: 'Desodorante Natural',
            category: 'higiene',
            price: 120,
            image: 'https://i5.walmartimages.com/asr/21ff6f07-d799-4d64-9d54-719ae7334276.807a7b96bed8f58b473647a3d9c697d6.jpeg',
            description: 'Sin aluminio, aroma a coco'
        },
        {
            id: 24,
            name: 'Jabón Líquido de Manos',
            category: 'higiene',
            price: 112,
            image: 'https://tohhaa.com/cdn/shop/files/th-liquidorosascacao.png?v=1703096159',
            description: 'Hidratante con vitamina E'
        },
        {
            id: 25,
            name: 'Crema Corporal Hidratante',
            category: 'higiene',
            price: 200,
            image: 'https://xochibotanicals.com/storage/media/xochi/products/id-5/cremacorporal-hidratanterelajante-2-5ed48e87c4538.jpg',
            description: 'Textura ligera, absorción rápida'
        },
        {
            id: 26,
            name: 'Shampoo Reparador',
            category: 'higiene',
            price: 196,
            image: 'https://beyondthebeauty.com.mx/cdn/shop/files/Shampoo_hidratante_de_queratina_con_aceite_de_argan-1.jpg?v=1732577337&width=1445',
            description: 'Con keratina y aceite de argán'
        },
        {
            id: 27,
            name: 'Acondicionador Nutritivo',
            category: 'higiene',
            price: 210,
            image: 'https://milagrosbeauty.com/cdn/shop/files/Acondicionador-ambientacion.webp?v=1749744272',
            description: 'Para cabello dañado y seco'
        },
        {
            id: 28,
            name: 'Exfoliante Facial',
            category: 'higiene',
            price: 99,
            image: 'https://bassa.com.ec/wp-content/uploads/2022/07/exfoliante-facial-bassa.jpg',
            description: 'Partículas de jojoba, uso semanal'
        },
        {
            id: 29,
            name: 'Mascarilla Capilar',
            category: 'higiene',
            price: 99,
            image: 'https://aglaecantu.com/wp-content/uploads/2020/03/cqueen-300x300.jpeg',
            description: 'Tratamiento intensivo 2 en 1'
        },
        {
            id: 30,
            name: 'Espuma de Afeitar',
            category: 'higiene',
            price: 86,
            image: 'https://www.shopflamingo.com/cdn/shop/files/body_hair_removal_cream_carousel_1.jpg?v=1705110557',
            description: 'Para piel sensible, con aloe vera'
        }
    ];

    // Variables del carrito
    let cart = [];
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartCountElement = document.getElementById('cart-count');
    const totalPriceElement = document.getElementById('total-price');
    const cartSection = document.getElementById('carrito');
    const closeCartBtn = document.getElementById('close-cart');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Mostrar productos
    const productsContainer = document.querySelector('.products-container');
    const categoryButtons = document.querySelectorAll('.category-buttons button');
    
    function displayProducts(category = 'all') {
        productsContainer.innerHTML = '';
        
        const filteredProducts = category === 'all' 
            ? products 
            : products.filter(product => product.category === category);
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image" style="background-image: url('${product.image}')"></div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p class="product-price">$${product.price.toLocaleString()}</p>
                    <button class="add-to-cart" data-id="${product.id}">Añadir al carrito</button>
                </div>
            `;
            productsContainer.appendChild(productCard);
        });

        // Event listeners para botones "Añadir al carrito"
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', addToCart);
        });
    }
    
    // Filtrado por categoría
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            displayProducts(this.dataset.category);
        });
    });
    
    // Funciones del carrito
    function addToCart(e) {
        const productId = parseInt(e.target.dataset.id);
        const product = products.find(p => p.id === productId);
        
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        updateCart();
    }
    
    function updateCart() {
        // Actualizar la vista del carrito
        cartItemsContainer.innerHTML = '';
        
        let total = 0;
        
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <p class="cart-item-title">${item.name}</p>
                    <p class="cart-item-price">$${(item.price * item.quantity).toLocaleString()}</p>
                    <div class="cart-item-quantity">
                        <button data-id="${item.id}" class="decrease-quantity">-</button>
                        <span>${item.quantity}</span>
                        <button data-id="${item.id}" class="increase-quantity">+</button>
                    </div>
                </div>
                <i class="fas fa-times cart-item-remove" data-id="${item.id}"></i>
            `;
            cartItemsContainer.appendChild(cartItemElement);
            
            total += item.price * item.quantity;
        });
        
        // Actualizar contador y total
        cartCountElement.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
        totalPriceElement.textContent = `$${total.toLocaleString()}`;
        
        // Event listeners para botones de cantidad y eliminar
        document.querySelectorAll('.decrease-quantity').forEach(button => {
            button.addEventListener('click', decreaseQuantity);
        });
        
        document.querySelectorAll('.increase-quantity').forEach(button => {
            button.addEventListener('click', increaseQuantity);
        });
        
        document.querySelectorAll('.cart-item-remove').forEach(button => {
            button.addEventListener('click', removeItem);
        });
    }
    
    function decreaseQuantity(e) {
        const productId = parseInt(e.target.dataset.id);
        const item = cart.find(item => item.id === productId);
        
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            cart = cart.filter(item => item.id !== productId);
        }
        
        updateCart();
    }
    
    function increaseQuantity(e) {
        const productId = parseInt(e.target.dataset.id);
        const item = cart.find(item => item.id === productId);
        item.quantity += 1;
        updateCart();
    }
    
    function removeItem(e) {
        const productId = parseInt(e.target.dataset.id);
        cart = cart.filter(item => item.id !== productId);
        updateCart();
    }
    
    // Abrir/cerrar carrito
    document.querySelector('a[href="#carrito"]').addEventListener('click', function(e) {
        e.preventDefault();
        cartSection.classList.remove('hidden');
    });
    
    closeCartBtn.addEventListener('click', function() {
        cartSection.classList.add('hidden');
    });
    
    checkoutBtn.addEventListener('click', function() {
        alert('¡Gracias por tu compra! Total: ' + totalPriceElement.textContent);
        cart = [];
        updateCart();
        cartSection.classList.add('hidden');
    });
    
    // Sistema de comentarios
    const commentForm = document.getElementById('comment-form');
    const commentsList = document.querySelector('.comments-list');
    
    // Comentarios de ejemplo
    const exampleComments = [
        {
            name: 'María González',
            text: 'Los perfumes tienen una duración impresionante. ¡Mi favorito es el Wood Noir!',
            date: 'Hace 2 días'
        },
        {
            name: 'Carlos Martínez',
            text: 'El kit de brochas es de excelente calidad. Superó mis expectativas.',
            date: 'Hace 1 semana'
        }
    ];
    
    function displayComments() {
        commentsList.innerHTML = '';
        
        const allComments = [...exampleComments];
        
        // Obtener comentarios del localStorage
        const savedComments = JSON.parse(localStorage.getItem('fulare-comments')) || [];
        allComments.push(...savedComments);
        
        allComments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerHTML = `
                <div class="comment-header">
                    <div class="comment-avatar">${comment.name.charAt(0)}</div>
                    <div>
                        <p class="comment-author">${comment.name}</p>
                        <p class="comment-date">${comment.date}</p>
                    </div>
                </div>
                <p class="comment-text">${comment.text}</p>
            `;
            commentsList.appendChild(commentElement);
        });
    }
    
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('comment-name').value;
        const text = document.getElementById('comment-text').value;
        
        if (name && text) {
            const newComment = {
                name,
                text,
                date: 'Hace unos momentos'
            };
            
            // Guardar en localStorage
            const savedComments = JSON.parse(localStorage.getItem('fulare-comments')) || [];
            savedComments.push(newComment);
            localStorage.setItem('fulare-comments', JSON.stringify(savedComments));
            
            // Mostrar comentarios
            displayComments();
            
            // Resetear formulario
            commentForm.reset();
        }
    });
    
    // Inicializar
    displayProducts();
    displayComments();
});