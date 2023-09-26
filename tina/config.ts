import { defineConfig } from "tinacms";
import { aboutFields } from "./templates";
import { contactFields } from "./templates";
import { defaultFields } from "./templates";
import { deliveryFields } from "./templates";
import { franchisingFields } from "./templates";
import { homepageFields } from "./templates";
import { homepage2Fields } from "./templates";
import { jobsFields } from "./templates";
import { locationsFields } from "./templates";
import { menuFields } from "./templates";
import { postFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || null, // Get this from tina.io
  token: process.env.TINA_PUBLIC_TOKEN || null, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      // Pages CZ
      {
        format: "md",
        label: "Pages - CZ",
        name: "cz_pages",
        path: "_pages/cz",
        match: {
          exclude: "_pages/cz/_posts",
        },
        templates: [
          {
            name: "about",
            label: "about",
            fields: [ ...aboutFields(), ],
          },
          {
            name: "contact",
            label: "contact",
            fields: [ ...contactFields(), ],
          },
          {
            name: "delivery",
            label: "delivery",
            fields: [ ...deliveryFields(), ],
          },
          {
            name: "franchising",
            label: "franchising",
            fields: [ ...franchisingFields(), ],
          },
          {
            name: "homepage",
            label: "homepage",
            fields: [ ...homepageFields(), ],
          },
          {
            name: "jobs",
            label: "jobs",
            fields: [ ...jobsFields(), ],
          },
          {
            name: "locations",
            label: "locations",
            fields: [ ...locationsFields(), ],
          },
          {
            name: "menu",
            label: "menu",
            fields: [ ...menuFields(), ],
          },
          {
            name: "post",
            label: "post",
            fields: [ 
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...postFields(), 
            ],
          },
        ],
      },
      // Posts CZ
      // {
      //   format: "md",
      //   label: "Posts - CZ",
      //   name: "cz_posts",
      //   path: "_pages/cz/_posts",
      //   // match: {
      //   //   include: "**/*",
      //   // },
      //   fields: [
      //     {
      //       type: "rich-text",
      //       name: "body",
      //       label: "Body of Document",
      //       description: "This is the markdown body",
      //       isBody: true,
      //     },
      //     ...postFields(),
      //   ],
      // },
      // Pages EN
      {
        format: "md",
        label: "Pages - EN",
        name: "en_pages",
        path: "_pages/en",
        match: {
          exclude: "_posts",
        },
        templates: [
          {
            name: "about",
            label: "about",
            fields: [ ...aboutFields(), ],
          },
          {
            name: "contact",
            label: "contact",
            fields: [ ...contactFields(), ],
          },
          {
            name: "delivery",
            label: "delivery",
            fields: [ ...deliveryFields(), ],
          },
          {
            name: "franchising",
            label: "franchising",
            fields: [ ...franchisingFields(), ],
          },
          {
            name: "homepage",
            label: "homepage",
            fields: [ ...homepageFields(), ],
          },
          {
            name: "jobs",
            label: "jobs",
            fields: [ ...jobsFields(), ],
          },
          {
            name: "locations",
            label: "locations",
            fields: [ ...locationsFields(), ],
          },
          {
            name: "menu",
            label: "menu",
            fields: [ ...menuFields(), ],
          },
          {
            name: "post",
            label: "post",
            fields: [ 
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...postFields(), 
            ],
          },
        ],
      },
      // Posts EN
      // {
      //   format: "md",
      //   label: "Posts - EN",
      //   name: "en_posts",
      //   path: "_pages/en/_posts",
      //   // match: {
      //   //   include: "**/*",
      //   // },
      //   fields: [
      //     {
      //       type: "rich-text",
      //       name: "body",
      //       label: "Body of Document",
      //       description: "This is the markdown body",
      //       isBody: true,
      //     },
      //     ...postFields(),
      //   ],
      // },
      // Pages HR
      {
        format: "md",
        label: "Pages - HR",
        name: "hr_pages",
        path: "_pages/hr",
        match: {
          exclude: "_posts",
        },
        templates: [
          {
            fields: [
              ...aboutFields(),
            ],
            label: "about",
            name: "about",
          },
          {
            name: "contact",
            label: "contact",
            fields: [ ...contactFields(),],
          },
          {
            name: "delivery",
            label: "delivery",
            fields: [ ...deliveryFields(),],
          },
          {
            name: "franchising",
            label: "franchising",
            fields: [ ...franchisingFields(),],
          },
          {
            name: "homepage",
            label: "homepage",
            fields: [ ...homepageFields(),],
          },
          {
            name: "jobs",
            label: "jobs",
            fields: [ ...jobsFields(), ],
          },
          {
            name: "locations",
            label: "locations",
            fields: [...locationsFields(),],
          },
          {
            name: "menu",
            label: "menu",
            fields: [ ...menuFields(),],
          },
          {
            name: "post",
            label: "post",
            fields: [ 
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...postFields(),
            ],
          },
        ],
      },
      // Posts HR
      // {
      //   format: "md",
      //   label: "Posts - HR",
      //   name: "hr_posts",
      //   path: "_pages/hr/_posts",
      //   // match: {
      //   //   include: "**/*",
      //   // },
      //   fields: [
      //     {
      //       type: "rich-text",
      //       name: "body",
      //       label: "Body of Document",
      //       description: "This is the markdown body",
      //       isBody: true,
      //     },
      //     ...postFields(),
      //   ],
      // },
    ],
  },
});
