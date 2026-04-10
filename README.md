# Quizzical App

An interactive trivia game that tests your knowledge with random questions from the Open Trivia Database.

**Note:** This application is an **MVP (Minimum Viable Product)** built specifically as a practice project to solidify modern React skills, including state management, side effects, and API integration.

## Features

- **Dynamic Data:** Fetches multiple-choice questions from the [Open Trivia API](https://opentdb.com/).
- **Smart Scoring:** Validates user selections against correct answers and calculates the final score.
- **Play Again:** Seamlessly resets the game state and fetches a fresh batch of questions without full page reloads.
- **Responsive UI:** Clean and intuitive interface with dynamic CSS classes for selecting and checking answers.

## Built With

- **React 19** (Functional Components, `useState`, `useEffect`)
- **Vite** (Build tool)
- **CSS3** (Custom styling)
- **Dependencies:**
  - `nanoid` - For generating unique keys and IDs.
  - `he` - For decoding HTML entities received from the API.
  - `clsx` - For dynamically constructing CSS class names.

## Running Locally

To get a local copy up and running, follow these simple steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/romannexus/Quizzical.git](https://github.com/romannexus/Quizzical.git)
   ```
2. **Navigate to the project directory:**
   ```bash
   cd Quizzical
   ```
3. **Install NPM packages:**
   ```bash
   npm install
   ```
4. **Set up Environment Variables:**
   Create a `.env` file in the root of the project and add the API URL:
   ```env
   VITE_API_URL=[https://opentdb.com/api.php?amount=4&type=multiple](https://opentdb.com/api.php?amount=4&type=multiple)
   ```
5. **Start the development server:**
   ```bash
   npm run dev
   ```

## Acknowledgements

This project was built as the final solo project for the fantastic **"Learn React"** course taught by **Bob Ziroll** on [Scrimba](https://scrimba.com/). Huge thanks to Bob and the Scrimba team for the excellent interactive learning experience!
