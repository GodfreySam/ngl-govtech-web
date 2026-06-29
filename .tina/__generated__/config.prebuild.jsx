// .tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "description", label: "Meta Description" },
          { type: "rich-text", name: "body", label: "Body", isBody: true }
        ]
      },
      {
        name: "insight",
        label: "Insights",
        path: "content/insights",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "description", label: "Description" },
          { type: "string", name: "category", label: "Category" },
          { type: "datetime", name: "date", label: "Date" },
          { type: "image", name: "thumbnail", label: "Thumbnail" },
          { type: "string", name: "author", label: "Author" },
          { type: "rich-text", name: "body", label: "Body", isBody: true }
        ]
      },
      {
        name: "teamMember",
        label: "Team Members",
        path: "content/team",
        format: "mdx",
        fields: [
          { type: "string", name: "name", label: "Full Name", isTitle: true, required: true },
          { type: "string", name: "title", label: "Job Title" },
          { type: "string", name: "bio", label: "Biography", ui: { component: "textarea" } },
          { type: "image", name: "photo", label: "Photo" },
          { type: "string", name: "linkedin", label: "LinkedIn URL" },
          { type: "number", name: "order", label: "Display Order" }
        ]
      },
      {
        name: "siteConfig",
        label: "Site Configuration",
        path: "content/config",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "siteName", label: "Site Name" },
          { type: "string", name: "tagline", label: "Tagline" },
          { type: "string", name: "email", label: "Contact Email" },
          { type: "string", name: "phone", label: "Phone Number" },
          { type: "string", name: "address", label: "Office Address" },
          { type: "string", name: "linkedIn", label: "LinkedIn URL" },
          { type: "string", name: "twitter", label: "Twitter/X URL" }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
