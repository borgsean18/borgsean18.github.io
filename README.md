# Sean Borg Portfolio Website

Personal portfolio website for Sean Borg, a freelance web developer in Scotland.

## Project Structure

```
├── public/               # Public assets (production-ready files)
│   ├── css/              # Compiled CSS files
│   ├── js/               # Transpiled JavaScript files
│   ├── images/           # Optimized images
│   └── fonts/            # Font files
│
├── src/                  # Source files
│   ├── js/               # JavaScript source files
│   └── scss/             # SCSS source files
│       ├── base/         # Base styles, resets, typography
│       ├── components/   # Reusable components
│       ├── layout/       # Layout components
│       ├── pages/        # Page-specific styles
│       ├── utils/        # Variables, mixins, functions
│       └── vendors/      # Third-party styles
│
├── index.html            # Main HTML file
├── package.json          # Project dependencies and scripts
├── webpack.config.js     # Webpack configuration
├── .babelrc              # Babel configuration
└── README.md             # Project documentation
```

## Development

```bash
# Install dependencies
yarn install

# Build CSS, JS and copy fonts
yarn build

# Development mode with watch
yarn dev

# Start development server
yarn serve
``` 