import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import pic from "@/assests/Asham_photo.png";

const InteractiveImage = ({ className }: { className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse movement → rotation
  const rawRotateX = useTransform(y, [-150, 150], [12, -12]);
  const rawRotateY = useTransform(x, [-150, 150], [-12, 12]);
  const rotateX = useSpring(rawRotateX, {
    stiffness: 100,
    damping: 20,
  });

  const rotateY = useSpring(rawRotateY, {
    stiffness: 100,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Distance from center
    const moveX = e.clientX - centerX;
    const moveY = e.clientY - centerY;

    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-1000">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.1 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        transition={{
          scale: {
            duration: 0.4,
            ease: "easeOut",
          },
          default: {
            type: "spring",
            stiffness: 150,
            damping: 12,
          },
        }}
        className="cursor-pointer"
      >
        <Image src={pic} alt="Profile" className={`rounded-xl ${className}`} />
      </motion.div>
    </div>
  );
};

export default InteractiveImage;
