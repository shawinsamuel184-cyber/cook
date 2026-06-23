import { luxeImageUrl } from "@/utils/media";

export const brand = {
  name: "BALLENA",
  tagline: "Coastal cuisine shaped by sea and grounded in land.",
};

export const hero = {
  headline: ["SHAPED BY SEA,", "GROUNDED IN LAND"],
  subheading:
    "An unforgettable culinary experience where nature, architecture and gastronomy become one.",
  videoSrc: "",
  posterImage: luxeImageUrl(
    "cinematic coastal luxury restaurant at dusk, ocean waves, modern warm stone architecture, editorial hospitality campaign, dramatic lighting, soft vignette, ultra realistic, 35mm film still, high contrast, warm ivory and charcoal palette",
    "landscape_16_9",
  ),
};

export const featuredFood = {
  heading: "FLAVORS THAT HOLD THE MOMENT",
  body:
    "Our kitchen is built around restraint and resonance: flame, salt, citrus, and time. Each plate carries the coastline in its aroma—bright, mineral, and deliberate—served with the quiet confidence of craft perfected.",
  image: luxeImageUrl(
    "close-up fine dining seafood plated on warm stoneware, coastal ingredients, subtle steam, editorial food photography, cinematic shadows, ultra realistic, shallow depth of field, premium luxury restaurant campaign",
    "portrait_16_9",
  ),
};

export const story = {
  heading: "WHERE THE KITCHEN MOVES WITH THE LANDSCAPE",
  body:
    "Here, architecture and gastronomy share a single rhythm. Light is treated as an ingredient. The menu follows the tide—local harvests, ocean-forward technique, and a reverence for simplicity that makes every detail feel inevitable.",
};

export const chef = {
  heading: "CHEF",
  name: "Chef Mateo Rivera",
  title: "EXECUTIVE CHEF",
  quote: "The tide teaches restraint; the fire adds courage.",
  image: "/chef.jpg",
};

export const parallaxShowcase = {
  image: luxeImageUrl(
    "luxury coastal restaurant exterior overlooking the ocean, warm stone and glass architecture, sage greenery, cinematic sky, editorial hospitality photography, ultra realistic, subtle grain",
    "landscape_16_9",
  ),
  cards: [
    {
      title: "Signature Dishes",
      body: "Coastal fire, citrus lift, and precise restraint—plates designed to linger.",
    },
    {
      title: "Wine Program",
      body: "Mineral whites, sun-warmed reds, and a cellar curated for sea air.",
    },
    {
      title: "Local Ingredients",
      body: "Harvested nearby, treated gently, and served at peak expression.",
    },
  ],
};

export const gallery = {
  items: [
    luxeImageUrl(
      "luxury restaurant interior warm ivory walls, charcoal accents, editorial lighting, minimalist premium hospitality design, ultra realistic photo, subtle grain",
      "portrait_4_3",
    ),
    luxeImageUrl(
      "ocean waves close-up at golden hour, cinematic, ultra realistic, 35mm film look, soft vignette",
      "portrait_4_3",
    ),
    luxeImageUrl(
      "fine dining cocktail on a stone bar with terracotta accent, luxury hospitality, editorial photography, ultra realistic, shallow depth of field",
      "portrait_4_3",
    ),
    luxeImageUrl(
      "chef hands plating a seafood dish, steam, dramatic shadows, luxury editorial campaign, ultra realistic",
      "portrait_4_3",
    ),
    luxeImageUrl(
      "coastal architectural detail, warm stone texture, sage greenery, luxury hotel aesthetic, editorial photo, ultra realistic",
      "portrait_4_3",
    ),
    luxeImageUrl(
      "guests dining outdoors at sunset overlooking the ocean, elegant minimal styling, premium hospitality, ultra realistic, cinematic",
      "portrait_4_3",
    ),
    luxeImageUrl(
      "signature dessert on ceramic plate, warm lighting, editorial food photography, ultra realistic, refined minimal composition",
      "portrait_4_3",
    ),
    luxeImageUrl(
      "wine pour close-up, candlelight, charcoal background, luxury restaurant, editorial campaign, ultra realistic",
      "portrait_4_3",
    ),
  ],
};

export const events = {
  heading: "EVENTS",
  cards: [
    {
      title: "Private Dining",
      body: "A secluded table, sculpted light, and a menu designed around your pace.",
      image: luxeImageUrl(
        "private dining room luxury restaurant, warm ivory palette, dramatic chandelier lighting, editorial hospitality photography, ultra realistic",
        "landscape_16_9",
      ),
    },
    {
      title: "Weddings",
      body: "Ocean air, stone, linen, and a celebration orchestrated with quiet precision.",
      image: luxeImageUrl(
        "luxury coastal wedding dinner setup at sunset, minimalist tablescape, warm stone architecture, editorial photography, ultra realistic",
        "landscape_16_9",
      ),
    },
    {
      title: "Celebrations",
      body: "For milestones that deserve atmosphere, not spectacle—elegance without excess.",
      image: luxeImageUrl(
        "luxury celebration dinner, candlelight, minimal floral, charcoal and ivory palette, editorial hospitality campaign, ultra realistic",
        "landscape_16_9",
      ),
    },
    {
      title: "Corporate Events",
      body: "A destination setting for clear thinking, refined hosting, and lasting impressions.",
      image: luxeImageUrl(
        "executive dinner event luxury restaurant terrace overlooking ocean, minimalist design, editorial photo, ultra realistic",
        "landscape_16_9",
      ),
    },
  ],
};

export const experience = {
  heading: "EXPERIENCE",
  blocks: [
    {
      title: "Fine Dining Ritual",
      body: "A paced sequence of flavors with calm, attentive service and sculptural plating.",
      image: luxeImageUrl(
        "luxury fine dining table setting, linen, stoneware, minimal cutlery, warm ivory tones, editorial photography, ultra realistic",
        "landscape_16_9",
      ),
    },
    {
      title: "Sunset Experiences",
      body: "Golden light, ocean wind, and a menu that moves from bright to profound.",
      image: luxeImageUrl(
        "oceanfront restaurant terrace at sunset, warm stone architecture, guests silhouettes, cinematic editorial photo, ultra realistic",
        "landscape_16_9",
      ),
    },
    {
      title: "Chef’s Tasting",
      body: "A curated narrative of the coast—seasonal, precise, and quietly bold.",
      image: luxeImageUrl(
        "chef presenting tasting menu course, dramatic lighting, luxury hospitality editorial campaign, ultra realistic",
        "landscape_16_9",
      ),
    },
    {
      title: "Oceanfront Seating",
      body: "A front-row view of the tide with a menu designed for the horizon.",
      image: luxeImageUrl(
        "oceanfront seating luxury restaurant, minimalist chairs, warm ivory and sage palette, editorial photo, ultra realistic",
        "landscape_16_9",
      ),
    },
  ],
};

export const menu = {
  heading: "MENU",
  categories: [
    {
      key: "starters",
      label: "Starters",
      items: [
        { name: "Citrus-Marinated Crudo", detail: "sea salt, green olive, coastal herbs" },
        { name: "Charred Market Vegetables", detail: "smoke, sesame, warm vinaigrette" },
        { name: "Stone-Oven Flatbread", detail: "cultured butter, seaweed dust" },
      ],
    },
    {
      key: "seafood",
      label: "Seafood",
      items: [
        { name: "Fire-Roasted Prawn", detail: "citrus glaze, sage oil" },
        { name: "Seared Line-Caught Fish", detail: "broth, fennel, mineral finish" },
        { name: "Shellfish Risotto", detail: "charcoal lemon, coastal aromatics" },
      ],
    },
    {
      key: "mains",
      label: "Main Courses",
      items: [
        { name: "Slow-Roasted Lamb", detail: "terracotta spice, smoked jus" },
        { name: "Wood-Fired Chicken", detail: "sage, citrus, warm grains" },
        { name: "Seasonal Harvest Bowl", detail: "garden vegetables, olive, herbs" },
      ],
    },
    {
      key: "desserts",
      label: "Desserts",
      items: [
        { name: "Salted Caramel Flan", detail: "vanilla, warm cream" },
        { name: "Citrus Tart", detail: "almond, sea salt" },
        { name: "Dark Chocolate Mousse", detail: "olive oil, flake salt" },
      ],
    },
    {
      key: "cocktails",
      label: "Cocktails",
      items: [
        { name: "Terracotta Spritz", detail: "citrus, aperitif, coastal botanicals" },
        { name: "Sage Martini", detail: "dry, aromatic, mineral" },
        { name: "Charcoal Old Fashioned", detail: "smoke, orange, bitters" },
      ],
    },
  ],
};

export const brandStatement = {
  word: "BALLENA",
  image: luxeImageUrl(
    "luxury coastal architectural corridor with warm stone, ocean horizon visible, editorial campaign photography, ultra realistic, subtle grain, warm ivory palette",
    "landscape_16_9",
  ),
};

export const contact = {
  address: "Oceanfront Drive, Cabo Coast",
  phone: "+1 (555) 012-8899",
  email: "reservations@ballena.example",
  hours: [
    { label: "Mon–Thu", value: "5:00 PM – 10:30 PM" },
    { label: "Fri–Sun", value: "4:30 PM – 11:30 PM" },
  ],
};
