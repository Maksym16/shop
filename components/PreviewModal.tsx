'use client';

import usePreviewModal from "@/hooks/use-preview-modal";
import Modal from "./ui/Modal";
import Gallery from "./gallery";
import Info from "./info";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler } from "react";

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);
  const cart = useCart();

  if (!product) {
    return null;
  }

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(product);
    previewModal.onClose();
  };

  return (
    <div>
      <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
          <div className="sm:col-span-4 lg:col-span-5">
            <Gallery images={product.images} />
          </div>
          <div className="sm:col-span-8 lg:col-span-7">
            <Info data={product} onClick={onAddToCart}/>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default PreviewModal;