import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Logitech G502 X Plus Wireless Gaming Mouse Black",
    price: "1800",
    image: "https://picsum.photos/200/300?random=12",
  },
  {
    id: 2,
    name: "Ugreen เมาส์ไร้สาย 4000DPI แมวติง",
    price: "1800",
    image: "https://picsum.photos/200/300?random=12",
  },
  {
    id: 3,
    name: "Razer แผ่นรองเมาส์ Wireless Gaming Mouse Black",
    price: "1800",
    image: "https://picsum.photos/200/300?random=12",
  },
  {
    id: 4,
    name: "เมาส์ HyperX Pulsefirewwa FPS Pro",
    price: "1800",
    image: "https://picsum.photos/200/300?random=12",
  },
  {
    id: 5,
    name: "เมาส์ Mx Ergo ใช้น้อยมากครับ เป็นเมาส์แบบ Trackball",
    price: "1800",
    image: "https://picsum.photos/200/300?random=12",
  },
];

const ProductSection = () => {
  return (
    <div className="section-container px-6 py-12">
      {/* หัวข้อ */}
      <h2 className="text-2xl font-bold mb-6">สินค้าที่แนะนำ</h2>

      {/* Grid สินค้า */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
