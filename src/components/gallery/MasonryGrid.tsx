"use client";

import { Media } from "@once-ui-system/core";
import styles from "./Gallery.module.scss";
import { gallery } from "@/resources";

export default function MasonryGrid() {
  return (
    <div className={styles.cssGrid}>
      {gallery.images.map((image, index) => (
        <div 
          key={index} 
          className={styles.gridItem}
          data-orientation={image.orientation}
        >
          <Media
            priority={index < 10}
            sizes="(max-width: 560px) 100vw, 50vw"
            radius="m"
            aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
            src={image.src}
            alt={image.alt}
          />
        </div>
      ))}
    </div>
  );
}
