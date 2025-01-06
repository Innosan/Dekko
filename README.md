# Dekko

Dekko is a modular personal dashboard application that allows users to create customizable hubs with widgets tailored to their needs. Designed to boost productivity, well-being, and personal organization, Dekko is the ultimate tool to centralize your life in one place.

## Features

- **Customizable Hubs**: Create and organize multiple hubs (e.g., Productivity, Well-being, Entertainment) with unique layouts and widgets.
- **Dynamic Widgets**: Choose from a wide variety of widgets like a mood tracker, task manager, weather display, and more.
- **Dekko View**: Quickly glance at selected widget information in a compact form at the top of the app.
- **Plugin System**: Extend the app's functionality by adding custom plugins, with seamless API integration for external services.
- **User-Friendly Interface**: Clean, responsive design tailored for accessibility and modern aesthetics.

## Getting Started

Follow these steps to set up Deccko locally or deploy it to your platform of choice.

### Prerequisites

- Node.js (v16 or higher)
- pnpm or yarn
- A Supabase account (or your preferred backend solution)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dekko.git
   cd deccko
   ```
2. Install dependencies:
   ```bash
   pnpm install
   # or
   yarn install
   # or
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file and add the following:
   ```env
   NUXT_SUPABASE_URL=<your-supabase-url>
   NUXT_SUPABASE_KEY=<your-supabase-key>
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

### Deployment

Dekko can be deployed on platforms like Vercel, Netlify, or any server capable of running a Nuxt app. Refer to the [Nuxt Deployment Guide](https://nuxt.com/docs/get-started/deployment) for more details.

## Folder Structure

```plaintext
├── components          # UI components and widget implementations
├── pages               # Nuxt pages
├── public              # Static assets
├── styles              # Global and modular CSS files
├── utils               # Utility functions and helper modules
├── composables         # Reusable Vue 3 composables
├── plugins             # Core plugin system logic
├── .env.example        # Example environment variables file
├── README.md           # Project documentation
└── package.json        # Project dependencies and scripts
```

## Contribution Guidelines

I'm welcome contributions to make Dekko even better! Here's how you can get involved:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

Please ensure your code follows the project's linting and formatting standards.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Acknowledgments

Special thanks to the open-source community for providing the tools and inspiration that made Dekko possible.

---

## Tags

- `#Nuxt`
- `#Supabase`
- `#Productivity`
- `#Dashboard`
- `#ModularApp`
- `#Widgets`
- `#Wellbeing`
- `#Customizable`
- `#OpenSource`
- `#PersonalDevelopment`
