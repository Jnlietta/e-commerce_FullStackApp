import { IMAGES_URL } from '../../../config';
import styles from './ProductGallery.module.scss';

const ProductGallery = ({ product }) => {
    return (
        <div>
            <img src={IMAGES_URL + product.mainImage} alt={product.name} className={styles.mainImage} />
            <div className={styles.galleryImages}>
                {product.gallery.map((image, index) => (
                <img
                    src={IMAGES_URL + image.url}
                    alt={`Gallery ${index + 1}`}
                    key={index}
                    className={styles.galleryImage}
                />
                ))}
            </div>
        </div>
    );
}

export default ProductGallery;