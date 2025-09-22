// src/utils/product.js
import { toSlug } from "@/data/mockProducts";

// Tek format
export const normalizeProduct = (p = {}) => ({
  id: p.id ?? null,
  slug: toSlug(p.slug || p.title || ""),
  title: p.title ?? "",
  brand: p.brand ?? "",
  images: Array.isArray(p.images) ? p.images : [],
  image: Array.isArray(p.images) && p.images[0] ? p.images[0] : null,
  price: Number(p.price || 0),
  oldPrice: p.oldPrice != null ? Number(p.oldPrice) : null,
  sku: p.sku ?? null,
  ean: p.ean ?? null,
  categories: Array.isArray(p.categories) ? p.categories : [],
  fitment: Array.isArray(p.fitment) ? p.fitment : [],
  description: p.description ?? "",
  rating: p.rating ?? null,
  reviewCount: p.reviewCount ?? null,
});

export const buildProductHref = (p) => `/parca/${toSlug(p.slug || p.title || "")}`;

export const formatPrice = (n, locale = "tr-TR") =>
  Number(n || 0).toLocaleString(locale);

export const hasDiscount = (p) =>
  p.oldPrice != null && Number(p.oldPrice) > Number(p.price);
