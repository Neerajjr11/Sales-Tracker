import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getMyOrders,
  getOrders,
  updateOrderToDelievered,
} from "../controllers/orderController.js";
import { adminMiddleware, protect } from "../middleware/authMiddleware.js";

router
  .route("/")
  .post(protect, addOrderItems)
  .get(protect, adminMiddleware, getOrders);
router.route("/myorders").get(protect, getMyOrders);
router
  .route("/:id/deliever")
  .put(protect, adminMiddleware, updateOrderToDelievered);

export default router;
