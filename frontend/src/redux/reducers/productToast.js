import {
  FAILED_ORDER_ACTION,
  FAILED_PRODUCT,
  ORDER_COMPLETE,
  ORDER_PROCESSED,
  PRODUCT_ADDED,
  PRODUCT_UPDATED,
  RESET_PRODUCT_TOAST,
} from "../constants/productsToast";

export const productToast = (
  state = { product: false, order: false },
  action
) => {
  switch (action.type) {
    case PRODUCT_ADDED:
      return { product: "added", order: false };

    case PRODUCT_UPDATED:
      console.log("yeha ta aaeu ni ki sand don");
      return { product: "updated", order: false };

    case ORDER_PROCESSED:
      return { product: false, order: "processed" };

    case ORDER_COMPLETE:
      return { product: false, order: "complete" };

    case RESET_PRODUCT_TOAST:
      return { product: false, order: false };

    case FAILED_ORDER_ACTION:
      return { product: false, order: "failed" };

    case FAILED_PRODUCT:
      return { product: "failed", order: false };

    default:
      return { product: false, order: false };
  }
};
