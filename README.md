# Pulau Perhentian Travel Guide

A static travel and tourism website for Pulau Perhentian, designed as a student project for CSC584 — Web Programming.

This project showcases the island’s attractions, activities, accommodations, and visitor information in a polished, responsive website built with HTML, CSS, and JavaScript.

## Overview

Pulau Perhentian is a popular island destination in Malaysia known for its crystal-clear waters, marine life, and beach resorts. This project presents a lightweight travel guide experience, focusing on educational web development rather than commercial tourism use.

> Note: This website is not a real commercial tourism site and all content is used strictly for academic and demonstration purposes.

## Problem statement

Prospective visitors to Pulau Perhentian need an accessible overview of the islands, available activities, and accommodation options before planning a trip. When these details are spread across separate sources, visitors may spend extra time finding and comparing relevant information. This can make it harder for first-time visitors to decide what to do and where to stay. VisitPerhentian addresses this planning problem by bringing introductory destination information, activity descriptions, accommodation summaries, and a photo gallery together in one website. The project is an educational static prototype that also demonstrates an enquiry form, without providing live bookings or sending messages to a server.

## Documents

- [Problem statement](docs/problem-statement.md)
- [Requirements](docs/requirements.md)
- [User stories](docs/user-stories.md)

## Status

Existing CSC584 coursework prototype, reused for CSC649 Week 2 GitHub documentation practice. The enquiry form performs browser-side validation and displays a simulated confirmation; it does not send enquiries, process bookings, or take payments. Measurable non-functional requirements are targets awaiting verification.

## Author

Abdul Qaiyum ([qai94](https://github.com/qai94)), Universiti Teknologi MARA (UiTM).

## Features

- Homepage with a video hero section and call-to-action buttons
- Gallery page featuring curated island imagery and captions
- Activities page highlighting popular experiences such as snorkeling, kayaking, jungle trekking, and scuba diving
- Accommodation page presenting island resort options on Perhentian Besar and Perhentian Kecil
- Demonstration contact form with browser-side validation, a privacy notice, and simulated confirmation
- Developer profile page
- Privacy policy page
- Responsive design for desktop and mobile browsing

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Static assets and images

## Project Structure

```text
.
├── README.md
├── docs/
│   ├── problem-statement.md
│   ├── requirements.md
│   └── user-stories.md
├── index.html
├── activities.html
├── accommodation.html
├── contact.html
├── developer.html
├── gallery.html
├── privacy.html
├── style.css
├── script.js
└── Images/
```

## Running the Project Locally

Because this is a static website, there is no installation or build step required.

### Option 1: Open in a browser

1. Clone the repository.
2. Open `index.html` directly in your browser.

### Option 2: Serve locally

Run a local static server from the project root:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Pages Included

- `index.html` — landing page with island overview and hero section
- `gallery.html` — island attractions gallery
- `activities.html` — attraction and activity information
- `accommodation.html` — lodging options and resort details
- `contact.html` — contact form and visitor inquiry page
- `developer.html` — project developer profile
- `privacy.html` — privacy and data handling information

## Educational Purpose

This repository was created for learning and coursework use. It demonstrates:

- semantic HTML structure
- responsive layout design
- CSS styling and component layout
- front-end interactivity using JavaScript
- form implementation and accessibility considerations

## Credits

This project is a student web development assignment and is intended for academic learning purposes only.

