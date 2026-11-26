# huang.yuyun-portfolio
Works for postgraduate applications

## Preview

Run `python3 -m http.server 3000` from this directory and open `http://localhost:3000/` in a browser on the same computer. You can also open `index.html` directly. The site uses HTML, CSS, and JavaScript and has no build step.

## Replace the placeholders

Add your artwork to `assets/`. In `index.html`, replace the `.image-placeholder` element inside the relevant card with an image, for example:

```html
<img src="assets/my-artwork.webp" alt="Describe the artwork" width="1200" height="900" loading="lazy">
```

Set `width` and `height` to the image's actual dimensions. The grid uses a 4:3 thumbnail crop, and the detail view shows the full image. Edit the work title and description in the same card. To add more work, copy a card and use the appropriate `data-category` value (`illustration`, `design`, or `twine`).
