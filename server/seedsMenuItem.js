const db= require("./models/index");
const menuitems = [
    {
        id: 1,
        name: 'sandwish escalope',
        imageUrl: 'https://ouvadelivery.com/wp-content/uploads/2022/05/sandwich-escalope.jpg',
        availble: true,
        likes: 5,
        price: 7.000,
        users_id: 11,
        category_id: 8
    },
    {
        id: 2,
        name: 'sandwish chawarma',
        imageUrl: 'https://img.over-blog-kiwi.com/0/79/60/41/20140111/ob_a1af1d_dsc-0149.jpg',
        availble: true,
        likes: 5,
        price: 7.500,
        users_id: 11,
        category_id: 8
    },
    {
        id: 3,
        name: 'sandwish kebda',
        imageUrl: 'https://www.visa-algerie.com/wp-content/uploads/2023/10/AdobeStock_495664482.jpeg',
        availble: true,
        likes: 3,
        price: 7.500,
        users_id: 11,
        category_id: 8
    },
    {
        id: 4,
        name: 'sandwish kabeb',
        imageUrl: 'https://ilovearabicfood.com/wp-content/uploads/2020/11/12-Meat-Kebab-Sandwich.jpg',
        availble: true,
        likes: 2,
        price: 8.000,
        users_id: 11,
        category_id: 8
    },
    {
        id: 5,
        name: 'sandwish merguez',
        imageUrl: 'https://www.1001recettes.net/wp-content/uploads/2024/05/1716335265_recette-facile-sandwich-aux-merguez-croustillant-et-savoureux-1024x701.jpg',
        availble: true,
        likes: 4,
        price: 9.000,
        users_id: 11,
        category_id: 8
    },
    {
        id: 6,
        name: 'sandwish thon',
        imageUrl: 'https://www.club-sandwich.net/images/photorecettes/ojardin-123rf.jpg',
        availble: true,
        likes: 3,
        price: 9.500,
        users_id: 11,
        category_id: 8
    },
    {
        id: 7,
        name: 'sandwish escalope',
        imageUrl: 'https://trustedveal.com/wp-content/uploads/2019/07/cov-recipes-cutlet-sandwich.jpg',
        availble: true,
        likes: 2,
        price: 8.000,
        users_id: 12,
        category_id: 8
    },
    {
        id: 8,
        name: 'sandwish escalope',
        imageUrl: 'https://img.hellofresh.com/f_auto,fl_lossy,h_640,q_auto,w_1200/hellofresh_s3/image/sandwich-descalope-de-porc-croustillante-a-la-japonaise-0e8247d9-9e7ef4e6.jpg',
        availble: true,
        likes: 5,
        price: 7.500,
        users_id: 13,
        category_id: 8
    },
    {
        id: 9,
        name: 'sandwish escalope',
        imageUrl: 'https://www.club-sandwich.net/images/photorecettes/ojardin-123rf.jpg',
        availble: true,
        likes: 6,
        price: 7.000,
        users_id: 15,
        category_id: 8
    },
    {
        id: 10,
        name: 'sandwish escalope',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9mYtoPjsVeZxtxvTTV4qflxJkfkNm3uEWCw&s',
        availble: true,
        likes: 9,
        price: 8.500,
        users_id: 17,
        category_id: 8
    },
    {
        id: 11,
        name: 'sandwish escalope',
        imageUrl: 'https://www.rozana.fr/medias/images/combien-de-calories-dans-un-shawarma-702x336.jpg',
        availble: true,
        likes: 5,
        price: 9.000,
        users_id: 18,
        category_id: 8
    },
    {
        id: 12,
        name: 'sandwish escalope',
        imageUrl: 'https://dj4f9j4jaohr.cloudfront.net/filters:format(webp)/fit-in/600x600/HiMenus/Uploads/MenuImages/e04f4376-2af1-4919-9522-fb1ed82059d7-133165048348258469.jpeg',
        availble: true,
        likes: 9,
        price: 7.500,
        users_id: 20,
        category_id: 8
    },
    {
        id: 13,
        name: 'sandwish escalope',
        imageUrl: 'https://recipeimages.migros.ch/crop/v-w-1200-h-630-a-center_center/a8bc3146e4721657c7b5495409892386d186d49c/sandwich-a-lescalope-et-au-fromage-0-16-9.jpg',
        availble: true,
        likes: 5,
        price: 8.000,
        users_id: 21,
        category_id: 8
    },
    {
        id: 14,
        name: 'sandwish escalope',
        imageUrl: 'https://owedo.be/wp-content/uploads/2024/07/1680360783-1146182155.jpg',
        availble: true,
        likes: 2,
        price: 7.500,
        users_id: 23,
        category_id: 8
    },
    {
        id: 15,
        name: 'sandwish escalope',
        imageUrl: 'https://www.soy.fr/wp-content/uploads/2024/07/soy-rainbow-focus.webp',
        availble: true,
        likes: 1,
        price: 8.500,
        users_id: 24,
        category_id: 8
    },
    {
        id: 16,
        name: 'sandwish escalope',
        imageUrl: 'https://i.ytimg.com/vi/Luf66IFE9PI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAZM3t1r4mt25KyJTxM9_jr7a11Lw',
        availble: true,
        likes: 4,
        price: 7.500,
        users_id: 26,
        category_id: 8
    },
    {
        id: 17,
        name: 'sandwish escalope',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxcgb_aATxK18RCV7FmBAEyGQWGOpfmykPxHfxkwZZXy2_K1uCtfAuquJSObPOF-tO6gw&usqp=CAU',
        availble: true,
        likes: 7,
        price: 7.000,
        users_id: 29,
        category_id: 8
    },
    {
        id: 18,
        name: 'sandwish chawarma',
        imageUrl: 'https://api.allonaya.ma/assets/files/Media/EyyWuJesKipnqMnys/large/shawarma-lebanon.jpg',
        availble: true,
        likes: 2,
        price: 8.500,
        users_id: 13,
        category_id: 8
    },
    {
        id: 19,
        name: 'sandwish chawarma',
        imageUrl: 'https://i0.wp.com/mamy-delices.com/wp-content/uploads/2023/08/IMG_3430.jpeg?fit=800%2C507&ssl=1',
        availble: true,
        likes: 5,
        price: 8.000,
        users_id: 14,
        category_id: 8
    },
    {
        id: 20,
        name: 'sandwish chawarma',
        imageUrl: 'https://www.linfodrome.com/media/article/images/src/80006-chawarma-fait-maison.webp',
        availble: true,
        likes: 6,
        price: 8.000,
        users_id: 16,
        category_id: 8
    },
    {
        id: 21,
        name: 'sandwish chawarma',
        imageUrl: 'https://img.freepik.com/photos-premium/sandwich-shawarma-au-boeuf-oignons-fond-noir_147933-1776.jpg',
        availble: true,
        likes: 4,
        price: 8.000,
        users_id: 18,
        category_id: 8
    },
    {
        id: 22,
        name: 'sandwish chawarma',
        imageUrl: 'https://img.freepik.com/photos-premium/fond-noir-shawarma-salade-poulet-legumes-copie-espace-vue-dessus_872147-15032.jpg',
        availble: true,
        likes: 7,
        price: 8.000,
        users_id: 19,
        category_id: 8
    },
    {
        id: 23,
        name: 'sandwish chawarma',
        imageUrl: 'https://img.freepik.com/photos-premium/shawarma-traditionnel-viande-legumes-dans-du-pain-plat-feu-fond-noir_124507-64464.jpg',
        availble: true,
        likes: 8,
        price: 8.000,
        users_id: 20,
        category_id: 8
    },
    {
        id: 24,
        name: 'sandwish chawarma',
        imageUrl: 'https://img.freepik.com/photos-premium/shawarma-viande-poulet-roulee-ingredients-morceaux-nourriture-flottant-dans-air-fond-sombre_516484-1119.jpg',
        availble: true,
        likes: 9,
        price: 8.000,
        users_id: 21,
        category_id: 8
    },
    {
        id: 25,
        name: 'sandwish chawarma',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKNB-a0Ayf7EZQRsoq5sjxqP0eBff4LyjfA&s',
        availble: true,
        likes: 6,
        price: 8.000,
        users_id: 23,
        category_id: 8
    },
    {
        id: 26,
        name: 'sandwish chawarma',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ5YmaRkOIRMtfEcRLlvWcxmZPhzOw9svnkw&s',
        availble: true,
        likes: 5,
        price: 8.000,
        users_id: 24,
        category_id: 8
    },
    {
        id: 27,
        name: 'sandwish chawarma',
        imageUrl: 'https://as2.ftcdn.net/v2/jpg/01/89/74/09/1000_F_189740996_enUJqOcSd3c5KwI9AZPReok5YrydtboN.jpg',
        availble: true,
        likes: 2,
        price: 8.000,
        users_id: 27,
        category_id: 8
    },
    {
        id: 28,
        name: 'sandwish chawarma',
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/1d/15/0f/best-seller-sandwich.jpg',
        availble: true,
        likes: 5,
        price: 8.000,
        users_id: 30,
        category_id: 8
    },
    {
        id: 29,
        name: 'sandwish thon',
        imageUrl: 'https://img.cuisineaz.com/660x660/2020/03/05/i152273-sandwich-thon-oeuf.jpeg',
        availble: true,
        likes: 4,
        price: 6.000,
        users_id: 12,
        category_id: 8
    },
    {
        id: 30,
        name: 'sandwish thon',
        imageUrl: 'https://www.club-sandwich.net/images/photorecettes/ojardin-123rf.jpg',
        availble: true,
        likes: 5,
        price: 6.500,
        users_id: 14,
        category_id: 8
    },
    {
        id: 31,
        name: 'sandwish thon',
        imageUrl: 'https://cdn.pratico-pratiques.com/app/uploads/sites/2/2018/08/27234541/sandwich-au-thon-boulangerie-ace.jpeg',
        availble: true,
        likes: 6,
        price: 6.000,
        users_id: 16,
        category_id: 8
    },
    {
        id: 32,
        name: 'sandwish thon',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvfw6xIUeY2QAus1xQ6sS7LDiYXIURpGXUug&s',
        availble: true,
        likes: 8,
        price: 7.000,
        users_id: 18,
        category_id: 8
    },
    {
        id: 33,
        name: 'sandwish thon',
        imageUrl: 'https://resize.elle.fr/original/var/plain_site/storage/images/elle-a-table/import/recettes-ddf/sandwich-au-thon-2047896/21635412-1-fre-FR/Sandwich-au-thon.jpg',
        availble: true,
        likes: 4,
        price: 6.500,
        users_id: 19,
        category_id: 8
    },
    {
        id: 34,
        name: 'sandwish thon',
        imageUrl: 'https://media.houra.fr/images/widget/recette/gd_SandwichesThonMayo_avril_2021.jpg',
        availble: true,
        likes: 5,
        price: 6.000,
        users_id: 21,
        category_id: 8
    },
    {
        id: 35,
        name: 'sandwish thon',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQneQWfj7pCPf4Mmm3OQ0mrWzoAEz4OqbCZ2w&s',
        availble: true,
        likes: 9,
        price: 7.000,
        users_id: 22,
        category_id: 8
    },
    {
        id: 36,
        name: 'sandwish thon',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL3WwWaXJ95vMwb9xvkkUyiIojcwb7pOFkaw&s',
        availble: true,
        likes: 88,
        price: 5.500,
        users_id: 24,
        category_id: 8
    },
    {
        id: 37,
        name: 'sandwish thon',
        imageUrl: 'https://www.club-sandwich.net/images/photorecettes/avocaton.jpg',
        availble: true,
        likes: 9,
        price: 6.000,
        users_id: 27,
        category_id: 8
    },
    {
        id: 38,
        name: 'sandwish thon',
        imageUrl: 'https://recipeimages.migros.ch/crop/v-w-330-h-330-a-center_center/c68a0f28bae1a62f9b0774530cdbe9c4119b4617/sandwich-au-thon-et-au-fromage-frais-0-1-1.jpg',
        availble: true,
        likes: 5,
        price: 7.000,
        users_id: 28,
        category_id: 8
    },
    {
        id: 39,
        name: 'sandwish merguez',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmaB4rWwYE0v7i5EIj794y7ntA7guAdiBg-Q&s',
        availble: true,
        likes: 2,
        price: 8.000,
        users_id: 16,
        category_id: 8
    },
    {
        id: 40,
        name: 'sandwish merguez',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAduOuGeCAivCHxpF42JQa1pScC5xqP7sZWQ&s',
        availble: true,
        likes: 5,
        price: 8.500,
        users_id: 21,
        category_id: 8
    },
    {
        id: 41,
        name: 'sandwish merguez',
        imageUrl: 'https://lh4.googleusercontent.com/proxy/6pwITdoHljLoGs-RGI8BvSgt0inDs5yd-pVzw9yY9vgVgveq9yQt4jcdx5ZeHXwC74EHUHHqDW5QuGIFzBvWudeVaUTBrmGWSEs_uCsmZcLmN00WCfgjvA',
        availble: true,
        likes: 8,
        price: 9.000,
        users_id: 25,
        category_id: 8
    },
    {
        id: 42,
        name: 'sandwish merguez',
        imageUrl: 'https://images.ricardocuisine.com/services/recipes/350x473_7974.jpg',
        availble: true,
        likes: 9,
        price: 7.500,
        users_id: 28,
        category_id: 8
    },
    {
        id: 43,
        name: 'sandwish merguez',
        imageUrl: 'https://mlrr6wdx5xdm.i.optimole.com/w:auto/h:auto/q:mauto/f:best/ig:avif/https://dza-lafamilia.com/migecad/2019/03/Sausage-Sandwich-Merguez-Sausage-French-Fries-White-Cream.jpg',
        availble: true,
        likes: 5,
        price: 8.000,
        users_id: 30,
        category_id: 8
    },
    {
        id: 44,
        name: 'sandwish kebda',
        imageUrl: 'https://image.over-blog.com/iTfjgZk3jjG76SgY2nUc_rxU01s=/filters:no_upscale()/image%2F0897323%2F20230521%2Fob_35da2d_img-6524.jpeg',
        availble: true,
        likes: 2,
        price: 8.000,
        users_id: 19,
        category_id: 8
    },
    {
        id: 45,
        name: 'sandwish kebda',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCvEdDBL2fSDN9bmK3Pun-VK56BUbemkgI7A&s',
        availble: true,
        likes: 5,
        price: 9.000,
        users_id: 22,
        category_id: 8
    },
    {
        id: 46,
        name: 'sandwish kebda',
        imageUrl: 'https://sidimansour.mamy.me/uploads/restorants/4e9e36cd-d968-4194-9198-6fc4318d1cdb_large.jpg',
        availble: true,
        likes: 9,
        price: 8.500,
        users_id: 27,
        category_id: 8
    },
    {
        id: 47,
        name: 'sandwish kebda',
        imageUrl: 'https://sceneeats.com/Content/Admin/Uploads/Articles/ArticlesMainPhoto/4725/aee72cfb-64c8-464a-9223-a4af35708ad4.jpeg',
        availble: true,
        likes: 8,
        price: 9.500,
        users_id: 29,
        category_id: 8
    },
    {
        id: 48,
        name: 'sandwish kebda',
        imageUrl: 'https://cairoscene.com/Content/Admin/Uploads/Articles/ArticlesMainPhoto/1161676/3e71fab5-379a-4507-837f-59b139dc667c.jpg',
        availble: true,
        likes: 1,
        price: 7.500,
        users_id: 30,
        category_id: 8
    },
    {
        id: 49,
        name: 'sandwish kabeb',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDiaCJF_n_k1Gf0NHtQtMEvsZYwLdHV9pLQ&s',
        availble: true,
        likes: 5,
        price: 8.500,
        users_id: 12,
        category_id: 8
    },
    {
        id: 50,
        name: 'sandwish kabeb',
        imageUrl: 'https://www.recettesmania.com/images/recipe/la-cuisine-du-p-tit-chef/2021/08/la-cuisine-du-p-tit-chef-sandwiches-kebab-maison-homemade-francekebab-snacking-l-full.jpg',
        availble: true,
        likes: 6,
        price: 8.500,
        users_id: 17,
        category_id: 8
    },
    {
        id: 51,
        name: 'sandwish kabeb',
        imageUrl: 'https://i.pinimg.com/736x/3b/82/16/3b82168cf3495e0d514b8b11f6e94861.jpg',
        availble: true,
        likes: 2,
        price: 8.000,
        users_id: 19,
        category_id: 8
    },
    {
        id: 52,
        name: 'sandwish kabeb',
        imageUrl: 'https://static.wikia.nocookie.net/wikebab/images/b/bd/T%C3%A9l%C3%A9chargement_%281%29.jpg/revision/latest?cb=20160116190900&path-prefix=fr',
        availble: true,
        likes: 4,
        price: 9.000,
        users_id: 20,
        category_id: 8
    },
    {
        id: 53,
        name: 'sandwish kabeb',
        imageUrl: 'https://pizzadinapoli77.com/wp-content/uploads/2023/01/grec.jpg',
        availble: true,
        likes: 5,
        price: 5.500,
        users_id: 23,
        category_id: 8
    },
    {
        id: 54,
        name: 'sandwish kabeb',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZcbeF3q_QaHjGosPWE0sh2LkktVkHUH5l0w&s',
        availble: true,
        likes: 6,
        price: 6.500,
        users_id: 27,
        category_id: 8
    },
    {
        id: 55,
        name: 'sandwish kabeb',
        imageUrl: 'https://elavegan.com/wp-content/uploads/2020/11/vegan-kebab-sandwiches-with-jackfruit-and-veggies.jpg',
        availble: true,
        likes: 4,
        price: 7.500,
        users_id: 28,
        category_id: 8
    },
    {
        id: 56,
        name: 'sandwish kabeb',
        imageUrl: 'https://st3.depositphotos.com/1020618/13308/i/450/depositphotos_133082310-stock-photo-close-up-of-kebab-sandwich.jpg',
        availble: true,
        likes: 5,
        price: 8.000,
        users_id: 29,
        category_id: 8
    },
    {
        id: 57,
        name: 'chiken frit',
        imageUrl: 'https://www.shutterstock.com/image-photo/fried-breaded-chicken-tender-strips-600nw-2202131731.jpg',
        availble: true,
        likes: 5,
        price: 18.000,
        users_id: 11,
        category_id: 7
    },
    {
        id: 58,
        name: 'chiken frit',
        imageUrl: 'https://media.istockphoto.com/id/180738111/photo/chicken-stips.jpg?s=612x612&w=0&k=20&c=Odl2dO2JQugyT4kXXB42AdV6qnUgTDZIuq2Xc_796xg=',
        availble: true,
        likes: 6,
        price: 15.000,
        users_id: 13,
        category_id: 7
    },
    {
        id: 59,
        name: 'chiken frit',
        imageUrl: 'https://lapetitebette.com/wp-content/uploads/2016/05/le-meilleur-fried-chicken-miniature-blog.png',
        availble: true,
        likes: 8,
        price: 14.500,
        users_id: 18,
        category_id: 7
    },
    {
        id: 60,
        name: 'chiken frit',
        imageUrl: 'https://lapetitebette.com/wp-content/uploads/2016/05/Untitled-design-22.jpg',
        availble: true,
        likes: 9,
        price: 18.500,
        users_id: 24,
        category_id: 7
    },
    {
        id: 61,
        name: 'chiken frit',
        imageUrl: 'https://img.freepik.com/photos-premium/poulet-frit-frites-pepites_1339-78221.jpg',
        availble: true,
        likes: 7,
        price: 19.000,
        users_id: 30,
        category_id: 7
    },
    {
        id: 62,
        name: 'makrouna thon',
        imageUrl: 'https://assets.afcdn.com/recipe/20130627/43127_w1024h768c1cx1250cy1875.webp',
        availble: true,
        likes: 2,
        price: 10.000,
        users_id: 12,
        category_id: 6
    },
    {
        id: 63,
        name: 'makrouna thon',
        imageUrl: 'https://www.macuisinesante.com/wp-content/uploads/2017/02/penne_tomate_thon.jpg',
        availble: true,
        likes: 5,
        price: 11.000,
        users_id: 14,
        category_id: 6
    },
    {
        id: 64,
        name: 'makrouna thon',
        imageUrl: 'https://assets.afcdn.com/recipe/20130823/21373_w1024h576c1cx1632cy2344.jpg',
        availble: true,
        likes: 8,
        price: 10.500,
        users_id: 17,
        category_id: 6
    },
    {
        id: 65,
        name: 'makrouna thon',
        imageUrl: 'https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fcontent.2Fuploads.2F2015.2F10.2Frigattoni-sauce-epicee.2Ejpg/1200x1200/quality/80/crop-from/center/rigatoni-sauce-epicee-au-thon.jpeg',
        availble: true,
        likes: 9,
        price: 9.500,
        users_id: 20,
        category_id: 6
    },
    {
        id: 66,
        name: 'makrouna thon',
        imageUrl: 'https://mariefoodtips.com/wp-content/uploads/2023/04/pates-au-thon.jpg',
        availble: true,
        likes: 7,
        price: 10.000,
        users_id: 21,
        category_id: 6
    },
    {
        id: 67,
        name: 'makrouna thon',
        imageUrl: 'https://www.marciatack.fr/wp-content/uploads/2020/04/Pates-thon-tomates.jpg',
        availble: true,
        likes: 4,
        price: 12.000,
        users_id: 29,
        category_id: 6
    },
    {
        id: 68,
        name: 'makrouna escalope',
        imageUrl: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/3696a42b051731ab0df19b08004c7ded/Derivates/69aa0dcd0a2ef98c02fb6eb8dcaa3246c2a6745d.jpg',
        availble: true,
        likes: 6,
        price: 15.000,
        users_id: 13,
        category_id: 6
    },
    {
        id: 69,
        name: 'makrouna escalope',
        imageUrl: 'https://img.mesrecettesfaciles.fr/wp-content/uploads/2015/07/shutterstock_86016838-1000x500.jpg',
        availble: true,
        likes: 15,
        price: 12.000,
        users_id: 17,
        category_id: 6
    },
    {
        id: 70,
        name: 'makrouna escalope',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV9dzIkJta0X4v9mtzPm0_41RL3wcvLdrR_g&s',
        availble: true,
        likes: 15,
        price: 11.000,
        users_id: 25,
        category_id: 6
    },
    {
        id: 71,
        name: 'makrouna escalope',
        imageUrl: 'https://cdn.pratico-pratiques.com/app/uploads/sites/2/2018/08/29092706/escalopes-de-poulet-aux-oignons-caramelisee-sur-pates.jpeg',
        availble: true,
        likes: 12,
        price: 13.000,
        users_id: 27,
        category_id: 6
    },
    {
        id: 72,
        name: 'makrouna escalope',
        imageUrl: 'https://www.amourdecuisine.fr/wp-content/uploads/2018/02/pates-au-poulet-et-champignons-C3A0-la-sauce-crC3A9meuse-2-500x487.jpg',
        availble: true,
        likes: 13,
        price: 12.000,
        users_id: 29,
        category_id: 6
    },
    {
        id: 73,
        name: 'makrouna bolognaise',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ94vbOXh9ug4aHNx3viMNmbQSPyhvaGID23g&s',
        availble: true,
        likes: 12,
        price: 13.000,
        users_id: 12,
        category_id: 6
    },
    {
        id: 74,
        name: 'makrouna bolognaise',
        imageUrl: 'https://img.cuisineaz.com/660x660/2013/12/20/i71303-recette-pate-spaghettis-bolognaise-maison.jpg',
        availble: true,
        likes: 3,
        price: 13.500,
        users_id: 13,
        category_id: 6
    },
    {
        id: 75,
        name: 'makrouna bolognaise',
        imageUrl: 'https://cdn.pratico-pratiques.com/app/uploads/sites/4/2018/08/30171718/spaghettis-alla-bolognese.jpeg',
        availble: true,
        likes: 5,
        price: 12.500,
        users_id: 14,
        category_id: 6
    },
    {
        id: 76,
        name: 'makrouna bolognaise',
        imageUrl: 'https://img-3.journaldesfemmes.fr/tqDpiUOJiJ4HYV3uW59L08Pfr1w=/750x500/1050970060b14c729e8d37a31bb820e6/ccmcms-jdf/39953498.jpg',
        availble: true,
        likes: 4,
        price: 13.000,
        users_id: 19,
        category_id: 6
    },
    {
        id: 77,
        name: 'makrouna bolognaise',
        imageUrl: 'https://img.cuisineaz.com/1280x720/2013/12/20/i18920-pates-bolo.jpeg',
        availble: true,
        likes: 18,
        price: 14.000,
        users_id: 27,
        category_id: 6
    },
    {
        id: 78,
        name: 'makrouna bolognaise',
        imageUrl: 'https://www.ensauce.com/wp-content/uploads/2015/10/spaghetti-bolognaise.jpg',
        availble: true,
        likes: 2,
        price: 15.000,
        users_id: 30,
        category_id: 6
    },
    {
        id: 79,
        name: 'tiramisu',
        imageUrl: 'https://img.cuisineaz.com/660x660/2023/11/20/i196570-tiramisu-simple.jpg',
        availble: true,
        likes: 5,
        price: 10.000,
        users_id: 11,
        category_id: 5
    },
    {
        id: 80,
        name: 'tiramisu',
        imageUrl: 'https://www.galbani.pl/wp-content/uploads/2017/07/le_veritable_tiramisu_par_il_gusto_italiano_0.png',
        availble: true,
        likes: 32,
        price: 11.000,
        users_id: 13,
        category_id: 5
    },
    {
        id: 81,
        name: 'tiramisu',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4R9IehC8f6gx_jt38HOa-DQP4YWzuO36lqw&s',
        availble: true,
        likes: 6,
        price: 9.000,
        users_id: 14,
        category_id: 5
    },
    {
        id: 82,
        name: 'tiramisu',
        imageUrl: 'https://www.framboiseetvanille.fr/wp-content/uploads/2023/03/8D66F763-0FCD-4527-8915-C20CFFD2A955.jpeg',
        availble: true,
        likes: 8,
        price: 10.000,
        users_id: 16,
        category_id: 5
    },
    {
        id: 83,
        name: 'tiramisu',
        imageUrl: 'https://www.guydemarle.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOTNLQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--96535ad7a5c27062439e6ac6e843992d54bbdfcd/blob',
        availble: true,
        likes: 9,
        price: 8.000,
        users_id: 19,
        category_id: 5
    },
    {
        id: 84,
        name: 'tiramisu',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvu1ix5zyHttbJq_iOcYhL1QkxMfATuGOow&s',
        availble: true,
        likes: 8,
        price: 5.500,
        users_id: 20,
        category_id: 5
    },
    {
        id: 85,
        name: 'tiramisu',
        imageUrl: 'https://odelices.ouest-france.fr/images/recettes/2015/tiramisu.jpg',
        availble: true,
        likes: 15,
        price: 9.500,
        users_id: 26,
        category_id: 5
    },
    {
        id: 86,
        name: 'tiramisu',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZKAXcRVh82EQ1dxPzFBJ08U5Rg_aKF76Ew&s',
        availble: true,
        likes: 2,
        price: 8.000,
        users_id: 27,
        category_id: 5
    },
    {
        id: 87,
        name: 'tiramisu',
        imageUrl: 'https://fr.giallozafferano.com/images/9-996/Tiramisu_1200x800.jpg',
        availble: true,
        likes: 3,
        price: 7.500,
        users_id: 28,
        category_id: 5
    },
    {
        id: 88,
        name: 'tiramisu',
        imageUrl: 'https://natashaskitchen.com/wp-content/uploads/2024/04/Tiramisu-Cake-13.jpg',
        availble: true,
        likes: 5,
        price: 10.000,
        users_id: 29,
        category_id: 5
    },
    {
        id: 89,
        name: 'tiramisu',
        imageUrl: 'https://www.galbani.fr/wp-content/uploads/2017/07/tiramisu-nutella-800x600.jpeg',
        availble: true,
        likes: 6,
        price: 12.000,
        users_id: 30,
        category_id: 5
    },
    {
        id: 90,
        name: 'salade cesar',
        imageUrl: 'https://images.ricardocuisine.com/services/recipes/8440.jpg',
        availble: true,
        likes: 5,
        price: 12.000,
        users_id: 15,
        category_id: 4
    },
    {
        id: 91,
        name: 'salade cesar',
        imageUrl: 'https://img.cuisineaz.com/660x660/2022/07/18/i184733-shutterstock-95710738.jpeg',
        availble: true,
        likes: 8,
        price: 11.000,
        users_id: 16,
        category_id: 4
    },
    {
        id: 92,
        name: 'salade cesar',
        imageUrl: 'https://www.adeline-cuisine.fr/wp-content/uploads/2016/07/salade-cesar-recette-sauce-caesar-salad.jpg',
        availble: true,
        likes: 9,
        price: 12.500,
        users_id: 17,
        category_id: 4
    },
    {
        id: 93,
        name: 'salade cesar',
        imageUrl: 'https://resize.elle.fr/original/var/plain_site/storage/images/imports/repack/elle-a-table/salade-cesar-4122645/98755651-2-fre-FR/Salade-Cesar.jpg',
        availble: true,
        likes: 5,
        price: 14.000,
        users_id: 19,
        category_id: 4
    },
    {
        id: 94,
        name: 'salade cesar',
        imageUrl: 'https://www.galbani.fr/wp-content/uploads/2020/04/AdobeStock_157570276-2-800x600.jpeg',
        availble: true,
        likes: 6,
        price: 12.000,
        users_id: 21,
        category_id: 4
    },
    {
        id: 95,
        name: 'salade cesar',
        imageUrl: 'https://images.radio-canada.ca/v1/alimentation/ingredient/16x9/salade-cesar-generique.jpg',
        availble: true,
        likes: 4,
        price: 13.500,
        users_id: 23,
        category_id: 4
    },
    {
        id: 96,
        name: 'salade imperial',
        imageUrl: 'https://www.krill.fr/media/recipe/resized/700x700/recipe/872122-R-SALADE-CAESAR-MEUNIER-V_1.jpg',
        availble: true,
        likes: 14,
        price: 12.000,
        users_id: 22,
        category_id: 4
    },
    {
        id: 97,
        name: 'imperial',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvjJ_ikXdzxYyq8RmPZyZYrvrrUKwD2Men0c5kH6ox-ZJpbiFxjNtwldFyLoX4Fg-uYk&usqp=CAU',
        availble: true,
        likes: 20,
        price: 12.000,
        users_id: 14,
        category_id: 4
    },
    {
        id: 98,
        name: 'imperial',
        imageUrl: 'https://recette.supertoinette.com/151436/mp/salade-cesar.webp',
        availble: true,
        likes: 16,
        price: 12.500,
        users_id: 16,
        category_id: 4
    },
    {
        id: 99,
        name: 'imperial',
        imageUrl: 'https://cdn.chefclub.tools/uploads/recipes/cover-thumbnail/9b9a76e5-2f1c-4e40-b1e5-92b963db8c47_fJSSWdA.jpg',
        availble: true,
        likes: 8,
        price: 13.000,
        users_id: 18,
        category_id: 4
    },
    {
        id: 100,
        name: 'imperial',
        imageUrl: 'https://img.cuisineaz.com/660x660/2022/07/18/i184733-shutterstock-95710738.jpeg',
        availble: true,
        likes: 9,
        price: 15.000,
        users_id: 19,
        category_id: 4
    },
    {
        id: 101,
        name: 'imperial',
        imageUrl: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/35EAB309-8258-49A0-AA40-09913A7ED2F7/Derivates/fddc7a16-7799-46b6-baa9-b27812e2f5e7.jpg',
        availble: true,
        likes: 10,
        price: 14.000,
        users_id: 27,
        category_id: 4
    },
    {
        id: 102,
        name: 'ojja merguez',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6KlfL7IM0fBkv_eqYgjPvx_QF5_xMaErGIA&s',
        availble: true,
        likes: 12,
        price: 10.000,
        users_id: 12,
        category_id: 3
    },
    {
        id: 103,
        name: 'ojja merguez',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5uScG8ynUtrcc91xFhFFfWsBya07ZP3DVQ&s',
        availble: true,
        likes: 13,
        price: 9.000,
        users_id: 13,
        category_id: 3
    },
    {
        id: 104,
        name: 'ojja merguez',
        imageUrl: 'https://voyage-tunisie.info/wp-content/uploads/2017/12/Ojja-merguez-au-poele.jpg',
        availble: true,
        likes: 15,
        price: 8.500,
        users_id: 14,
        category_id: 3
    },
    {
        id: 105,
        name: 'ojja merguez',
        imageUrl: 'https://www.cuisinetunisienne.tn/wp-content/uploads/2019/07/Recette-Ojja-merguez-1080x1350.jpg',
        availble: true,
        likes: 14,
        price: 11.000,
        users_id: 15,
        category_id: 3
    },
    {
        id: 106,
        name: 'ojja merguez',
        imageUrl: 'https://www.amourdecuisine.fr/wp-content/uploads/2019/06/Ojja-tunisienne-aux-merguez.jpg',
        availble: true,
        likes: 45,
        price: 10.500,
        users_id: 16,
        category_id: 3
    },
    {
        id: 107,
        name: 'ojja merguez',
        imageUrl: 'https://recettes.de/images/blogs/la-tendresse-en-cuisine/ojja-merguez-oeufs-aux-merguez-tunisie.640x480.jpg',
        availble: true,
        likes: 15,
        price: 9.500,
        users_id: 17,
        category_id: 3
    },
    {
        id: 108,
        name: 'ojja merguez',
        imageUrl: 'https://img-global.cpcdn.com/recipes/e19e2a564cc9b87f/400x400cq70/photo.jpg',
        availble: true,
        likes: 1,
        price: 9.000,
        users_id: 18,
        category_id: 3
    },
    {
        id: 109,
        name: 'ojja merguez',
        imageUrl: 'https://recettes.de/images/blogs/gourmandise-sans-frontieres/ojja-merguez-ragout-de-tunisie-a-la-sauce-tomates-1171.640x480.jpg',
        availble: true,
        likes: 23,
        price: 8.000,
        users_id: 19,
        category_id: 3
    },
    {
        id: 110,
        name: 'ojja merguez',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDkmOfCmWVATcUMamW1LEDJZDU4Es2KCXWfw&s',
        availble: true,
        likes: 5,
        price: 9.500,
        users_id: 20,
        category_id: 3
    },
    {
        id: 111,
        name: 'ojja merguez',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf32Hi5cPSiTZCz2H7AqYrdWkZZvlGtxpVdsufAl4HfLwAJ5t2j1VYAshwVkNyTpK0LDE&usqp=CAU',
        availble: true,
        likes: 6,
        price: 8.000,
        users_id: 21,
        category_id: 3
    },
    {
        id: 112,
        name: 'ojja escalope',
        imageUrl: 'https://www.tunisienumerique.com/wp-content/uploads/2021/10/ojja-1200x898.jpg',
        availble: true,
        likes: 5,
        price: 8.000,
        users_id: 12,
        category_id: 3
    },
    {
        id: 113,
        name: 'escalope',
        imageUrl: 'https://ouvadelivery.com/wp-content/uploads/2022/05/ojja-escalope.jpg',
        availble: true,
        likes: 6,
        price: 8.500,
        users_id: 13,
        category_id: 3
    },
    {
        id: 114,
        name: 'escalope',
        imageUrl: 'https://images.deliveryhero.io/image/menus-glovo/products/8ea5dd69136d189feb77729f10d0a631abb135c470894df4c3dcff6934fac5f6?t=W3siYXV0byI6eyJxIjoibG93In19XQ==',
        availble: true,
        likes: 9,
        price: 9.000,
        users_id: 14,
        category_id: 3
    },
    {
        id: 115,
        name: 'escalope',
        imageUrl: 'https://i.ytimg.com/vi/jlcK2JR9B0Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBRQ3DAcI09DccIP7ZJNpgdRHaLBg',
        availble: true,
        likes: 1,
        price: 9.500,
        users_id: 15,
        category_id: 3
    },
    {
        id: 116,
        name: 'escalope',
        imageUrl: 'https://boutique.grilletsaveurs.fr/images/produits/1953/1718700101-imageboutique11.webp',
        availble: true,
        likes: 158,
        price: 10.000,
        users_id: 16,
        category_id: 3
    },
    {
        id: 117,
        name: 'escalope',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLljBO7Q3T3IQtO7fGbgSR7siT2IIeIeG6OQ&s',
        availble: true,
        likes: 1,
        price: 10.500,
        users_id: 17,
        category_id: 3
    },
    {
        id: 118,
        name: 'escalope',
        imageUrl: 'https://1033609670.rsc.cdn77.org/meals/small/w530/h370/10801.jpg',
        availble: true,
        likes: 56,
        price: 11.000,
        users_id: 18,
        category_id: 3
    },
    {
        id: 119,
        name: 'escalope',
        imageUrl: 'https://i.ytimg.com/vi/0cmKUocE8G4/sddefault.jpg',
        availble: true,
        likes: 1,
        price: 9.500,
        users_id: 19,
        category_id: 3
    },
    {
        id: 120,
        name: 'escalope',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Q6i7xszAVVsTGC7n9jEDVuOhSqPlN5ahjg&s',
        availble: true,
        likes: 8,
        price: 8.500,
        users_id: 20,
        category_id: 3
    },
    {
        id: 121,
        name: 'escalope',
        imageUrl: 'https://lepetitjournal.com/_next/image?url=https%3A%2F%2Fbackoffice.lepetitjournal.com%2Fsites%2Fdefault%2Ffiles%2F2023-04%2Fojja%2520merguez.jpg&w=1200&q=75',
        availble: true,
        likes: 9,
        price: 10.000,
        users_id: 21,
        category_id: 3
    },
    {
        id: 122,
        name: 'beef burger',
        imageUrl: 'https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg',
        availble: true,
        likes: 5,
        price: 15.000,
        users_id: 11,
        category_id: 2
    },
    {
        id: 123,
        name: 'beef burger',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ0Cam2kTSWso8fabItGBf_7zXuQqT1mvXBw&s',
        availble: true,
        likes: 12,
        price: 14.000,
        users_id: 16,
        category_id: 2
    },
    {
        id: 124,
        name: 'beef burger',
        imageUrl: 'https://www.gardengourmet.be/sites/default/files/recipes/aeead5804e79ff6fb98b2039619c5230_200828_MEDIAMONKS_GG_Spicytarian.jpg',
        availble: true,
        likes: 16,
        price: 14.500,
        users_id: 18,
        category_id: 2
    },
    {
        id: 125,
        name: 'beef burger',
        imageUrl: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg',
        availble: true,
        likes: 1,
        price: 14.500,
        users_id: 20,
        category_id: 2
    },
    {
        id: 126,
        name: 'beef burger',
        imageUrl: 'https://www.southernliving.com/thmb/H04pCVJ5bLAnwPs2hFCmpNs5Uec=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ultimate-southern-burger_batch64_beauty01-86-b9c26e256dd34e39b6c0cfb0c02a9fef.jpg',
        availble: true,
        likes: 81,
        price: 16.000,
        users_id: 21,
        category_id: 2
    },
    {
        id: 127,
        name: 'beef burger',
        imageUrl: 'https://fatsecretfrance.fr/wp-content/uploads/2020/11/Burger-ve%CC%81ge%CC%81tarien-maison.png',
        availble: true,
        likes: 6,
        price: 15.000,
        users_id: 23,
        category_id: 2
    },
    {
        id: 128,
        name: 'beef burger',
        imageUrl: 'https://www.allrecipes.com/thmb/RTo6ddljby-5lAszPdMRwQ-aVh0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/19863best-burger-everFranceC4x3-c9c7d5cae40b4a58a110a33e04b531d1.jpg',
        availble: true,
        likes: 1,
        price: 14.000,
        users_id: 26,
        category_id: 2
    },
    {
        id: 129,
        name: 'beef burger',
        imageUrl: 'https://www.eatingwell.com/thmb/aKA6WL4j01orJ6F7v9bF4PH6B7Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/air-fryer-cheeseburgers-9e0cf0071bcb4b8d9bc806cabfb61347.jpg',
        availble: true,
        likes: 8,
        price: 13.000,
        users_id: 27,
        category_id: 2
    },
    {
        id: 130,
        name: 'beef burger',
        imageUrl: 'https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg',
        availble: true,
        likes: 1,
        price: 12.000,
        users_id: 29,
        category_id: 2
    },
    {
        id: 131,
        name: 'beef burger',
        imageUrl: 'https://thumbs.dreamstime.com/b/hamburger-46507020.jpg',
        availble: true,
        likes: 9,
        price: 16.000,
        users_id: 30,
        category_id: 2
    },
    {
        id: 132,
        name: 'pizza neptune',
        imageUrl: 'https://img.cuisineaz.com/660x660/2021/07/28/i179970-pizza-neptune.jpeg',
        availble: true,
        likes: 5,
        price: 10.000,
        users_id: 20,
        category_id: 1
    },
    {
        id: 133,
        name: 'pizza neptune',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQel26xiS9AlukeCqWV0rn1qDP6DKecW3YrA&s',
        availble: true,
        likes: 2,
        price: 9.000,
        users_id: 21,
        category_id: 1
    },
    {
        id: 134,
        name: 'pizza neptune',
        imageUrl: 'https://zwitafoods.com/cdn/shop/articles/Pizza_Neptune_HQ_1200x.jpg?v=1695165908',
        availble: true,
        likes: 6,
        price: 11.000,
        users_id: 22,
        category_id: 1
    },
    {
        id: 135,
        name: 'pizza neptune',
        imageUrl: 'https://ouvadelivery.com/wp-content/uploads/2022/05/thon-olive-berlin.jpg',
        availble: true,
        likes: 8,
        price: 12.000,
        users_id: 23,
        category_id: 1
    },
    {
        id: 136,
        name: 'pizza neptune',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQoqcnY-YhmhhXjlJ_TMNnblAIAeCtkmXRyg&s',
        availble: true,
        likes: 9,
        price: 13.000,
        users_id: 24,
        category_id: 1
    },
    {
        id: 137,
        name: 'pizza neptune',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPxlv2Sr-GkPuNFJMr7Lnv3lSKJ_QsFWqsrQ&s',
        availble: true,
        likes: 45,
        price: 11.000,
        users_id: 25,
        category_id: 1
    },
    {
        id: 138,
        name: 'pizza neptune',
        imageUrl: 'https://www.firstdeal.tn/deal/album/9sblbxq9.jpg',
        availble: true,
        likes: 8,
        price: 9.000,
        users_id: 26,
        category_id: 1
    },
    {
        id: 139,
        name: 'pizza neptune',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTurKG2NDsObqZl485lmfSBLL0xVm1Mf4L5fq2Z3kI2VLZRhiWfLaYaVZNvEWqiAnpWK2A&usqp=CAU',
        availble: true,
        likes: 9,
        price: 8.500,
        users_id: 27,
        category_id: 1
    },
    {
        id: 140,
        name: 'pizza neptune',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtDkTStgjCTYSOtofVAYN4VvJbwboOuNS9NuK4A4vGjtswHO0nFZrXOgOollnJxmWkuHE&usqp=CAU',
        availble: true,
        likes: 5,
        price: 9.500,
        users_id: 28,
        category_id: 1
    },
    {
        id: 141,
        name: 'pizza neptune',
        imageUrl: 'https://www.buitoni.ch/sites/default/files/styles/_480_480/public/srh_recipes/fa84af3f88597979ae8f085a805255e5.jpg?h=b80a9625&itok=Jz1GjT9X',
        availble: true,
        likes: 2,
        price: 10.000,
        users_id: 29,
        category_id: 1
    },
    {
        id: 142,
        name: 'pizza margherita',
        imageUrl: 'https://img.cuisineaz.com/660x660/2013/12/20/i18445-margherite.jpeg',
        availble: true,
        likes: 2,
        price: 10.000,
        users_id: 20,
        category_id: 1
    },
    {
        id: 143,
        name: 'margherita',
        imageUrl: 'https://fr.ooni.com/cdn/shop/articles/Margherita-9920.jpg?crop=center&height=800&v=1644590066&width=800',
        availble: true,
        likes: 5,
        price: 11.000,
        users_id: 21,
        category_id: 1
    },
    {
        id: 144,
        name: 'margherita',
        imageUrl: 'https://www.galbani.fr/wp-content/uploads/2017/10/margherita-800x600.jpg',
        availble: true,
        likes: 6,
        price: 12.000,
        users_id: 22,
        category_id: 1
    },
    {
        id: 145,
        name: 'margherita',
        imageUrl: 'https://media.ouest-france.fr/v1/pictures/bf8eb1f7ab19a5e8b9d13cc1f0408439-10688421.jpg?width=1260&client_id=eds&sign=03c5940993b1261549f0c99e7566bc9e0476720c3c1593b5a4b67ad4b3363bd4',
        availble: true,
        likes: 4,
        price: 9.500,
        users_id: 23,
        category_id: 1
    },
    {
        id: 146,
        name: 'margherita',
        imageUrl: 'https://media.istockphoto.com/id/1168754685/fr/photo/margarita-de-pizza-avec-la-vue-sup%C3%A9rieure-de-fromage-disolement-sur-le-fond-blanc.jpg?s=612x612&w=0&k=20&c=9RHfY1eek9drWa4dxJJEYdIiQ9fS2chxNdPQ9AUxJJg=',
        availble: true,
        likes: 8,
        price: 8.500,
        users_id: 24,
        category_id: 1
    },
    {
        id: 147,
        name: 'margherita',
        imageUrl: 'https://www.flameoven.com/cdn/shop/articles/flameoven-recette-pizza-margherita-au-four-a-pizza.jpg?v=1710845631',
        availble: true,
        likes: 6,
        price: 9.000,
        users_id: 25,
        category_id: 1
    },
    {
        id: 148,
        name: 'margherita',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1j96PcBeCX3HZlF9BMRBFrhE5994SRqYqmQ&s',
        availble: true,
        likes: 2,
        price: 8.500,
        users_id: 26,
        category_id: 1
    },
    {
        id: 149,
        name: 'margherita',
        imageUrl: 'https://lelocalapizzas.fr/wp-content/uploads/2022/02/recette-pizza-margherita.jpghttps://www.foodandwine.com/thmb/7BpSJWDh1s-2M2ooRPHoy07apq4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mozzarella-pizza-margherita-FT-RECIPE0621-11fa41ceb1a5465d9036a23da87dd3d4.jpg',
        availble: true,
        likes: 5,
        price: 10.000,
        users_id: 27,
        category_id: 1
    },
    {
        id: 150,
        name: 'margherita',
        imageUrl: 'https://www.laurenceel.com/wp-content/uploads/2023/05/Pizza-Margherita.jpg',
        availble: true,
        likes: 4,
        price: 11.000,
        users_id: 28,
        category_id: 1
    },
    {
        id: 151,
        name: 'margherita',
        imageUrl: 'https://static.750g.com/images/640-440/c1b1d4590bcd946cb8ffab3db4c7d543/snap-2016-06-08-at-16.34.39.jpg',
        availble: true,
        likes: 6,
        price: 12.000,
        users_id: 29,
        category_id: 1
    },
    {
        id: 152,
        name: 'pizza jambon ',
        imageUrl: 'https://img.cuisineaz.com/660x660/2017/10/17/i133175-pizza-au-jambon-et-mozzarella-de-ma-grand-mere.jpeg',
        availble: true,
        likes: 5,
        price: 10.000,
        users_id: 20,
        category_id: 1
    },
    {
        id: 153,
        name: 'pizza jambon',
        imageUrl: 'https://odelices.ouest-france.fr/images/recettes/pizza-jambon.jpg',
        availble: true,
        likes: 4,
        price: 12.000,
        users_id: 21,
        category_id: 1
    },
    {
        id: 154,
        name: 'pizza jambon',
        imageUrl: 'https://img.cuisineaz.com/660x660/2016/06/20/i83891-pizza-jambon-gruyere-et-olives.jpg',
        availble: true,
        likes: 8,
        price: 11.500,
        users_id: 22,
        category_id: 1
    },
    {
        id: 155,
        name: 'pizza jambon',
        imageUrl: 'https://assets.afcdn.com/recipe/20170105/24149_w1024h768c1cx2592cy1728.webp',
        availble: true,
        likes: 25,
        price: 9.000,
        users_id: 23,
        category_id: 1
    },
    {
        id: 156,
        name: 'pizza jambon',
        imageUrl: 'https://fr.frije.com/content/recipes/45392/400-1.jpg',
        availble: true,
        likes: 12,
        price: 10.000,
        users_id: 24,
        category_id: 1
    },
    {
        id: 157,
        name: 'pizza jambon',
        imageUrl: 'https://fac.img.pmdstatic.net/fit/~1~fac~2018~12~19~6eb063f5-3cc7-4f9e-bf58-9dfd5042d5b7.jpeg/750x562/quality/80/crop-from/center/cr/wqkgRFIgLyBGZW1tZSBBY3R1ZWxsZQ%3D%3D/pizza-au-jambon-mozzarella-tomates-cerise-olives-et-basilic.jpeghttps://www.kilometre-0.fr/wp-content/uploads/2019/01/images20160925Cuisine_mart206.jpg',
        availble: true,
        likes: 14,
        price: 9.500,
        users_id: 25,
        category_id: 1
    },
    {
        id: 158,
        name: 'pizza jambon',
        imageUrl: 'https://cdn.pratico-pratiques.com/app/uploads/sites/2/2018/08/29093317/pizza-jambon-et-champignon-sauvages-grilles.jpeg',
        availble: true,
        likes: 56,
        price: 8.500,
        users_id: 26,
        category_id: 1
    },
    {
        id: 159,
        name: 'pizza jambon',
        imageUrl: 'https://www.chezpatchouka.com/wp-content/uploads/2020/08/Pizza-Jambon-Cru-et-Roquette.jpg',
        availble: true,
        likes: 5,
        price: 10.000,
        users_id: 27,
        category_id: 1
    },
    {
        id: 160,
        name: 'pizza jambon',
        imageUrl: 'https://www.laurenceel.com/wp-content/uploads/2021/09/pizza-jambon-fromage.jpg',
        availble: true,
        likes: 2,
        price: 11.000,
        users_id: 28,
        category_id: 1
    },
    {
        id: 161,
        name: 'pizza jambon',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSnou72hGC3X-fWrD0U_faJLERRW45P9B0yw&s',
        availble: true,
        likes: 6,
        price: 12.000,
        users_id: 29,
        category_id: 1
    }
];

db.MenuItem.bulkCreate(menuitems)
    .then(() => {
        console.log('Menu items seeded successfully');
    })
    .catch((error) => {
        console.error('Error seeding menu items:', error);
    });