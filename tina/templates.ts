import type { TinaField } from "tinacms";
export function aboutFields() {
  return [
    {
      type: "image",
      name: "hero_image",
      label: "Hero image",
    },
    {
      type: "string",
      name: "big_title",
      label: "Big title",
      required: true,
    },
    {
      type: "string",
      name: "title_before_proccess",
      label: "Title before proccess",
    },
    {
      type: "object",
      name: "proccess",
      label: "Proccess",
      list: true,
      fields: [
        {
          type: "image",
          name: "image",
          label: "image",
        },
        {
          type: "string",
          name: "name",
          label: "name",
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "first_section",
      label: "First section",
      fields: [
        {
          type: "image",
          name: "icon",
          label: "icon",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "content",
          label: "Content",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
      ],
    },
    {
      type: "object",
      name: "right_section",
      label: "Right section",
      fields: [
        {
          type: "image",
          name: "left_image",
          label: "Left image",
        },
        {
          type: "image",
          name: "first_icon",
          label: "First icon",
        },
        {
          type: "string",
          name: "first_title",
          label: "First title",
        },
        {
          type: "string",
          name: "first_content",
          label: "First content",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "first_image",
          label: "First image",
        },
        {
          type: "image",
          name: "second_icon",
          label: "Second icon",
        },
        {
          type: "string",
          name: "second_title",
          label: "Second title",
        },
        {
          type: "string",
          name: "second_content",
          label: "Second content",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "string",
      name: "bud_u_toho_button",
      label: "Bud u toho button",
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
  ] as TinaField[];
}
export function contactFields() {
  return [
    {
      type: "image",
      name: "hero_image",
      label: "Hero image",
    },
    {
      type: "string",
      name: "big_title",
      label: "Big title",
      required: true,
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "object",
      name: "contact_information",
      label: "Contact Information",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title} `}
        },
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
        },
        {
          type: "string",
          name: "content",
          label: "Content",
          ui: {
            component: "textarea",
          },
          required: true,
        },
      ],
    },
    {
      type: "string",
      name: "delivery_text",
      label: "Delivery text",
    },
    {
      type: "string",
      name: "delivery_button",
      label: "Delivery button",
    },
    {
      type: "string",
      name: "instagram_title",
      label: "Instagram_title",
    },
    {
      type: "string",
      name: "delivery_time",
      label: "Delivery time",
    },
  ] as TinaField[];
}
export function defaultFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "datetime",
      name: "publish_date",
      label: "Publish Date",
      required: true,
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
  ] as TinaField[];
}
export function deliveryFields() {
  return [
    {
      type: "image",
      name: "hero_image",
      label: "Hero image",
    },
    {
      type: "string",
      name: "big_title",
      label: "Big title",
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
      required: true,
    },
    {
      type: "object",
      name: "locations",
      label: "Locations",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.location_title} `}
        },
      },
      fields: [
        {
          type: "image",
          name: "location_image",
          label: "Location image",
        },
        {
          type: "string",
          name: "location_title",
          label: "Location title",
          required: true,
        },
        {
          type: "boolean",
          name: "wolt",
          label: "Wolt",
        },
        {
          type: "string",
          name: "wolt_url",
          label: "Wolt Url",
        },
        {
          type: "boolean",
          name: "boltfood",
          label: "BoltFood",
        },
        {
          type: "string",
          name: "boltfood_url",
          label: "BoltFood Url",
        },
        {
          type: "boolean",
          name: "damejidlo",
          label: "Dáme jídlo",
        },
        {
          type: "string",
          name: "jidlo_url",
          label: "DameJidlo Url",
        },
      ],
    },
    {
      type: "string",
      name: "delivery_title",
      label: "Delivery title",
      required: true,
    },
    {
      type: "string",
      name: "delivery_description",
      label: "Delivery description",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "image",
      name: "delivery_image",
      label: "Delivery image",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "dame_jildo_button",
      label: "Dame Jildo button",
    },
  ] as TinaField[];
}
export function franchisingFields() {
  return [
    {
      type: "image",
      name: "hero_image",
      label: "Hero image",
    },
    {
      type: "string",
      name: "big_title",
      label: "Big title",
      required: true,
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
    },
    {
      type: "object",
      name: "concept",
      label: "Concept",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title} `}
        },
      },
      fields: [
        {
          type: "image",
          name: "icon",
          label: "Icon",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: {
            component: "textarea",
          },
          required: true,
        },
      ],
    },
    {
      type: "string",
      name: "second_subtitle",
      label: "Second subtitle",
    },
    {
      type: "string",
      name: "third_subtitle",
      label: "Third subtitle",
    },
    {
      type: "object",
      name: "stores",
      label: "Stores",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title} `}
        },
      },
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: {
            component: "textarea",
          },
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "accordions",
      label: "Accordions",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title} `}
        },
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "string",
      name: "faq_title",
      label: "FAQ title",
      required: true,
    },
    {
      type: "object",
      name: "faq",
      label: "FAQ",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.question} `}
        },
      },
      fields: [
        {
          type: "string",
          name: "question",
          label: "Question",
          required: true,
        },
        {
          type: "string",
          name: "answer",
          label: "Answer",
          ui: {
            component: "textarea",
          },
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "after_faq",
      label: "After FAQ",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title} `}
        },
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "content",
          label: "Content",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "string",
      name: "mam_zajem_title",
      label: "Mam Zajem Title",
    },
    {
      type: "string",
      name: "mam_zajem",
      label: "Mam Zajem URL",
    },
    {
      type: "string",
      name: "mam_zajem_button",
      label: "Mam zajem button",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
  ] as TinaField[];
}
export function homepageFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "Layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "image",
      name: "hero_images",
      label: "Hero images",
      list: true,
    },
    {
      type: "string",
      name: "big_title",
      label: "Big Title",
      required: true,
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
      required: true,
    },
    {
      type: "image",
      name: "showcase_images",
      label: "Showcase images",
      list: true,
    },
    {
      type: "string",
      name: "breakfast",
      label: "Breakfast",
      required: true,
    },
    {
      type: "image",
      name: "breakfast_image",
      label: "Breakfast Image",
    },
    {
      type: "string",
      name: "delivery_text",
      label: "Delivery text",
    },
    {
      type: "string",
      name: "delivery_button",
      label: "Delivery Button",
    },
    {
      type: "string",
      name: "instagram_title",
      label: "Instagram title",
    },
    {
      type: "string",
      name: "delivery_time",
      label: "Delivery time",
    },
  ] as TinaField[];
}
export function homepage2Fields() {
  return [] as TinaField[];
}
export function jobsFields() {
  return [
    {
      type: "image",
      name: "hero_image",
      label: "Hero image",
    },
    {
      type: "string",
      name: "big_title",
      label: "Big title",
      required: true,
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
      required: true,
    },
    {
      type: "string",
      name: "positions_title",
      label: "Positions title",
      required: true,
    },
    {
      type: "object",
      name: "jobs",
      label: "jobs",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.job_title} `}
        },
      },
      fields: [
        {
          type: "string",
          name: "job_title",
          label: "Job title",
          required: true,
        },
        {
          type: "string",
          name: "job_location",
          label: "Job location",
          required: true,
        },
        {
          type: "string",
          name: "job_description",
          label: "Job description",
          ui: {
            component: "textarea",
          },
          required: true,
        },
      ],
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
  ] as TinaField[];
}
export function locationsFields() {
  return [
    {
      type: "string",
      name: "locations_title",
      label: "Locations title",
      required: true,
    },
    {
      type: "image",
      name: "hero_image",
      label: "Hero image",
    },
    {
      type: "object",
      name: "locations",
      label: "Locations",
      list: true,
      fields: [
        {
          type: "image",
          name: "local_image",
          label: "Local image",
        },
        {
          type: "image",
          name: "first_left_image",
          label: "First left image",
        },
        {
          type: "string",
          name: "location_name",
          label: "Location name",
          required: true,
        },
        {
          type: "string",
          name: "location_address",
          label: "Location address",
        },
        {
          type: "string",
          name: "location_contact",
          label: "Location contact",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "location_gmaps_url",
          label: "Location gmaps url",
        },
        {
          type: "string",
          name: "location_description",
          label: "Location description",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "contact_number",
          label: "Contact number",
        },
        {
          type: "string",
          name: "first_column_above_image",
          label: "First column above image",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "second_column_above_image",
          label: "Second column above image",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "image_left",
          label: "Image left",
        },
        {
          type: "string",
          name: "third_column_under_image",
          label: "Third column under image",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "image_right_portrait",
          label: "Image right portrait",
        },
        {
          type: "image",
          name: "footer_image",
          label: "Footer image",
        },
        {
          type: "string",
          name: "footer_description",
          label: "Footer description",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "boolean",
          name: "wolt",
          label: "Wolt",
        },
        {
          type: "string",
          name: "wolt_url",
          label: "Wolt Url",
        },
        {
          type: "boolean",
          name: "boltfood",
          label: "Boltfood",
        },
        {
          type: "string",
          name: "boltfood_url",
          label: "Boltfood url",
        },
        {
          type: "boolean",
          name: "damejidlo",
          label: "Damejidlo",
        },
        {
          type: "string",
          name: "damejidlo_url",
          label: "Damejidlo_url",
        },
      ],
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "contact_us_button",
      label: "Contact us button",
    },
    {
      type: "string",
      name: "delivery_button",
      label: "Delivery button",
    },
  ] as TinaField[];
}
export function menuFields() {
  return [
    {
      type: "string",
      name: "big_title",
      label: "Big Title",
      required: true,
    },
    {
      type: "object",
      name: "categories",
      label: "Categories",
      ui: {
        itemProps: (item) => {
          return { label: `${item?.category_title} `}
        },
      },
      list: true,
      fields: [
        {
          type: "string",
          name: "category_title",
          label: "Category Title",
          required: true,
        },
        {
          type: "object",
          name: "products",
          label: "Products",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: `${item?.product_title} `}
            },
          },
          fields: [
            {
              type: "string",
              name: "product_title",
              label: "Product title",
            },
            {
              type: "image",
              name: "product_image",
              label: "Product image",
            },
            {
              type: "string",
              name: "product_description",
              label: "Product description",
              ui: {
                component: "textarea",
              },
            },
            {
              type: "number",
              name: "product_price",
              label: "Product price",
            },
          ],
        },
      ],
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
  ] as TinaField[];
}
export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "string",
      name: "button_text",
      label: "Button text",
    },
    // {
    //   type: "string",
    //   name: "post_url",
    //   label: "Post URL",
    // },
    {
      type: "image",
      name: "post_image",
      label: "Post Image",
    },
    {
      type: "image",
      name: "feature_image",
      label: "Feature image",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    // {
    //   type: "datetime",
    //   name: "published_at",
    //   label: "published_at",
    //   required: true,
    // },
  ] as TinaField[];
}
