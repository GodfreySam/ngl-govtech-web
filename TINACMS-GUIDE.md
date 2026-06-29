# TinaCMS Content Management Guide
### NASENI Golborn Limited Website

This guide explains how to use TinaCMS to update the NGL website — no code knowledge required.

---

## Table of Contents

1. [Starting the CMS](#1-starting-the-cms)
2. [Accessing the Editor](#2-accessing-the-editor)
3. [What You Can Edit](#3-what-you-can-edit)
4. [Managing Insights (Articles)](#4-managing-insights-articles)
5. [Managing Team Members](#5-managing-team-members)
6. [Site Configuration](#6-site-configuration)
7. [Uploading Images](#7-uploading-images)
8. [Saving and Publishing](#8-saving-and-publishing)
9. [Building for Production](#9-building-for-production)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. Starting the CMS

Open your terminal, navigate to the project folder, and run:

```bash
cd ~/Desktop/ngl-website
yarn dev
```

Wait until you see output like:

```
✓ TinaCMS server ready
✓ Next.js ready on http://localhost:3000
```

Both services must be running at the same time. Do **not** close the terminal while editing.

> **Port conflict?** If you see "port 9000 is busy", run:
> ```bash
> lsof -ti:9000,3000 | xargs kill -9
> ```
> Then run `yarn dev` again.

---

## 2. Accessing the Editor

With the dev server running, open your browser and go to:

```
http://localhost:3000/admin
```

You will see the TinaCMS dashboard — a panel listing all content collections. No login is required in local development mode.

> In production (after deployment), the `/admin` route is protected and requires a TinaCloud account.

---

## 3. What You Can Edit

TinaCMS manages four content areas:

| Collection | What it controls | File location |
|---|---|---|
| **Pages** | Static page content (home, about, etc.) | `content/pages/` |
| **Insights** | Articles and thought leadership posts | `content/insights/` |
| **Team Members** | Board member profiles | `content/team/` |
| **Site Configuration** | Global contact details, social links, tagline | `content/config/site.json` |

---

## 4. Managing Insights (Articles)

### Creating a new article

1. Go to `/admin` → click **Insights** in the left sidebar
2. Click **Create New**
3. Fill in the fields:
   - **Title** — the article headline (also used as the page `<title>`)
   - **Description** — one or two sentences shown in the article card on the Insights listing page
   - **Category** — e.g. `GovTech`, `Digital Identity`, `PPP`
   - **Date** — publication date (used for display and sorting)
   - **Author** — author's full name
   - **Thumbnail** — featured image (see [Uploading Images](#7-uploading-images))
   - **Body** — the full article content, written in the rich-text editor
4. Click **Save**

### Editing an existing article

1. Go to `/admin` → **Insights**
2. Click the article you want to edit
3. Make your changes in the right-hand panel
4. Click **Save**

### Rich-text editor tips

- Use the toolbar to add headings, bold, italic, lists, and links
- Paste text directly — formatting is preserved
- To add a block quote, use the `"` toolbar button
- Images can be inserted inline using the image button in the toolbar

---

## 5. Managing Team Members

### Adding a new board member

1. Go to `/admin` → **Team Members**
2. Click **Create New**
3. Fill in:
   - **Full Name** — displayed as the card heading
   - **Job Title** — e.g. `Managing Director / CEO`
   - **Biography** — a paragraph about the person's background
   - **Photo** — upload a headshot (see [Uploading Images](#7-uploading-images))
   - **LinkedIn URL** — full URL, e.g. `https://linkedin.com/in/username`
   - **Display Order** — a number controlling the order in the carousel (1 = first, 2 = second, etc.)
4. Click **Save**

### Editing an existing member

1. Go to `/admin` → **Team Members**
2. Click the person's name
3. Update any fields and click **Save**

> **Note:** After saving, the development server hot-reloads automatically. Refresh the `/leadership` page to see your changes.

---

## 6. Site Configuration

Site Configuration controls the global details that appear across the whole site — contact information, social media links, and the tagline.

1. Go to `/admin` → **Site Configuration**
2. You will see a single entry (it cannot be created or deleted, only edited)
3. Update any of these fields:

| Field | Example |
|---|---|
| Site Name | `NASENI Golborn Limited` |
| Tagline | `Building Digital Public Infrastructure...` |
| Contact Email | `info@nasenigolborn.com` |
| Phone Number | `+234 800 000 0000` |
| Office Address | `Plot 1, National Science & Engineering...` |
| LinkedIn URL | `https://linkedin.com/company/naseni-golborn` |
| Twitter/X URL | `https://x.com/nasenigolborn` |

4. Click **Save**

---

## 7. Uploading Images

TinaCMS has a built-in media manager for all image fields (thumbnails, team photos, etc.).

1. Click any image field — a **Choose** button will appear
2. Click **Choose** to open the media browser
3. To upload a new image, click **Upload** and select the file from your computer
4. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`
5. Once uploaded, click the image to select it
6. The image is stored in `public/images/` and served from `/images/filename`

### Recommended sizes

| Use | Recommended size |
|---|---|
| Insight thumbnail | 1200 × 630 px |
| Team member photo | 600 × 600 px (square) |
| General page images | Max 1920 px wide |

---

## 8. Saving and Publishing

### Local development

Every time you click **Save** in the TinaCMS editor, the content file on disk is updated immediately (inside `content/`). The Next.js dev server detects the change and hot-reloads the page automatically.

### Git-backed content

All content is stored as files (`.mdx` for articles/team, `.json` for config) in the `content/` folder. This means:

- Content changes are version-controlled alongside the code
- You can review, revert, or audit any change through `git log`
- To publish changes to the live site, commit and push:

```bash
git add content/
git commit -m "Update: [describe what you changed]"
git push
```

If the site is deployed on Vercel, a push to `main` will automatically trigger a new build and deploy.

---

## 9. Building for Production

To generate a production build locally (for testing before deploying):

```bash
yarn build
```

This runs two steps in sequence:
1. `tinacms build` — compiles the CMS admin panel into `public/admin/`
2. `next build` — builds the Next.js site with full SSG/SSR

To preview the production build locally:

```bash
yarn start
```

Then visit `http://localhost:3000`.

---

## 10. Troubleshooting

### The admin panel shows a blank screen

- Make sure `yarn dev` is running (both TinaCMS on port 9000 and Next.js on port 3000)
- Try a hard refresh: `Cmd + Shift + R`

### Port 9000 or 3000 is already in use

```bash
lsof -ti:9000,3000 | xargs kill -9
yarn dev
```

### My content changes aren't showing on the page

1. Check that you clicked **Save** in the CMS editor
2. Hard-refresh the page (`Cmd + Shift + R`)
3. If still not showing, stop and restart `yarn dev`

### The CMS editor says "Cannot connect to local content"

The TinaCMS data layer on port 9000 is not running. Stop everything and run `yarn dev` again.

### Images aren't loading after upload

- Make sure the file was uploaded to `public/images/`
- Image paths should start with `/images/` — check the field value in the editor

---

## Quick Reference

```
Start dev server:     yarn dev
Open CMS editor:      http://localhost:3000/admin
View live site:       http://localhost:3000
Build for prod:       yarn build
Preview prod build:   yarn start
Kill stuck ports:     lsof -ti:9000,3000 | xargs kill -9
```

---

*This guide covers local content editing. For TinaCloud setup (enabling the `/admin` route on the live deployed site), refer to the [TinaCloud documentation](https://tina.io/docs/tina-cloud/).*
