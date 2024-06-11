import React, { useState } from 'react';
import { IMAGES_URL } from '../../../config';
import styles from './ProductGallery.module.scss';
import { Modal, Carousel } from 'react-bootstrap';

const ProductGallery = ({ product }) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);

    const handleCloseModal = () => setShowModal(false);

    return (
        <div>
            <img 
                src={IMAGES_URL + product.mainImage} 
                alt={product.name} 
                className={styles.mainImage} 
                onClick={handleOpenModal}
            />
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

            <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title className={styles.modalTitle}>{product.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel>
                        {product.gallery.map((image, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className={styles.modalImage}
                                    src={IMAGES_URL + image.url}
                                    alt={`Gallery ${index + 1}`}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ProductGallery;