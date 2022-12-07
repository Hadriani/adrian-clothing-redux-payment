
import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

const categories = [
    {
        id: 1,
        title: "Hats",
        imageUrl: "https://cdn.shopify.com/s/files/1/1616/9825/files/IMG_5313_870x.jpg?v=1668011530",
        route: 'shop/hats'
    },
    {
        id: 2,
        title: "Jackets",
        imageUrl: "https://thumbs.dreamstime.com/b/male-black-crown-clothes-hanger-store-new-collection-different-color-spring-leather-jackets-men-close-up-197115953.jpg",
        route: 'shop/jackets'
    },
    {
        id: 3,
        title: "Sneakers",
        imageUrl: "https://i.pinimg.com/originals/2c/87/2a/2c872a3ac73237614fa7d3f46ee15990.jpg",
        route: 'shop/sneakers'
    },
    {
        id: 4,
        title: "Womens",
        imageUrl: "https://thegenuineleather.com/wp-content/uploads/2022/11/Marla-Moore-Cupids-Christmas-Shearling-Jacket-1.webp",
        route: 'shop/womens'
    },
    {
        id: 5,
        title: "Holiday Special",
        imageUrl: "https://cdn.shopify.com/s/files/1/1616/9825/files/IMG_5215_870x.jpg?v=1667243078",
        route: 'shop/mens'
    },
];

const Directory = () => {

    return (
        <div className="directory-container">
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </div>
    )

}

export default Directory;