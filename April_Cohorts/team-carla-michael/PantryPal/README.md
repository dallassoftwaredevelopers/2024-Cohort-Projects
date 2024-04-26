# PantryPal

## Overview

This project aims to create a comprehensive tool for managing groceries, integrating recipes, and tracking nutrition. It analyzes current inventory, helps with grocery list creation for meal prep, and provides nutritional information, including macronutrient counts. The tool also suggests recipes based on what ingredients users have on hand.

## Features

- **User Account Creation and Login**: Secure user authentication to access and manage personal data.
- **Grocery Inventory Management**: Functionality to add/remove items, and track quantity and expiration dates.
- **Recipe Suggestion**: Recipe recommendations based on the user's current inventory.
- **Nutritional Information Display**: Macronutrient and calorie counts for each recipe.
- **Grocery List Generation**: Automated generation of shopping lists based on recipe selection or inventory needs.

## Documentation
https://tylerdelrosario.github.io/PantryPal/

## Getting Started
A `.env` file must be created before starting up the server. The following parameters must be added:
`DB_URL`
`GOOGLE_SECRET`
`GOOGLE_ID`
`GOOGLE_SCOPE`
`GOOGLE_REDIRECT`

The values for these variables are on discord. Message @TylerDelRosario if you need help setting this up.

### Prerequisites

- Node.js
- npm (or yarn)

### Installing

First, clone the repository to your local machine:

`git clone https://github.com/your-username/your-project-name.git`

Navigate to the project directory:

`cd your-project-name`

Install the required dependencies:

`npm install`

### Running the application

To run the application, execute:

`npm start`

This will start the server. By default, the server usually runs on port 3000, unless otherwise specified. In your web browser, go to: `http://localhost:3000`

## Roadmap

- Week 1-2: Project setup and MVP definition.
- Week 3-4: Core feature development.
- Week 5: Macro breakdown implementation and feature enhancements.
- Week 6: Testing, bug fixes, and deployment.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [Figma Design Files]()
- [Azure Cosmos Tutorials]()
- [Tools for REST API Testing]()

---

## Development Notes

For internal use:

- Focus on implementing feature X by next Saturday.
- Prioritize tasks aligned with user stories for inventory management, recipe suggestions, and meal planning.
- Discuss Azure Cosmos integration and environmental variables setup.

### Milestones

- [ ] Environment setup and initial project structure.
- [ ] Inventory management backend connection.
- [ ] Initial API endpoints for recipes and meal plans.

### Testing

- We are using [Postman/Insomnia] for testing REST APIs.
>>>>>>> dsd-03-2024/main
