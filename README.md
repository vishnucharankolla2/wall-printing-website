# Wall Printing Services Website

A complete website for a wall printing business, featuring homepage, gallery, services, about, and contact pages.

## Features

- Responsive design with modern CSS Grid and Flexbox
- Interactive gallery with filters and before/after slider
- Contact form with file upload
- Mockup generator for wall previews
- WhatsApp integration
- Mobile-friendly navigation

## Setup

1. Clone or download the files to your local machine.
2. Place image files in the root directory (see Image Requirements below).
3. Open `index.html` in a web browser or run a local server.

## Running Locally

To run the website with a local server:

```bash
cd /path/to/website
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Image Requirements

Replace the following placeholder image files with actual images:

- `wall-printer-video.mp4` - Full-width video of wall printer in action
- `machine-image.jpg` - Image of the wall printing machine
- `home-print.jpg`, `office-print.jpg`, `mural-print.jpg`, `custom-print.jpg` - Gallery images
- `home-print1.jpg`, `home-print2.jpg`, etc. - Additional gallery images
- `before.jpg`, `after.jpg` - Before/after images for slider
- `placeholder-mockup.jpg` - Mockup preview image

## Design Notes

- Colors based on logo: Red (#ff0000), Green (#00ff00), Blue, Yellow, Black outlines
- Fonts: Poppins for headings, Montserrat for body text
- Layout: Clean, modern, with emphasis on visuals

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Responsive)
- Vanilla JavaScript
- Google Fonts

## Customization

- Update contact information in `contact.html`
- Modify colors in `style.css`
- Add more gallery items or services as needed

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile and desktop