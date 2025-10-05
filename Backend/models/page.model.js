
import mongoose from 'mongoose';

const pageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  }, // e.g. "products", "services"

  slug: {
    type: String,
    required: true
  }, // e.g. "laptop", "cloud-hosting"

  hero: {
    image: String,
    heading: String,
    description: String
  },

});

// Ensure combination of category + slug is unique
pageSchema.index({ category: 1, slug: 1 }, { unique: true });

export const Page = mongoose.model("Page", pageSchema);
