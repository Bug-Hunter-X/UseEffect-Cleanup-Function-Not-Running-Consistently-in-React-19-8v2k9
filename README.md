# React 19 useEffect Cleanup Issue

This repository demonstrates a potential issue with the `useEffect` hook's cleanup function in React 19.  The cleanup function doesn't always execute as expected, leading to unexpected behavior.  The example focuses on a simple counter, where the cleanup function should log a message before the next effect runs. In some scenarios, this logging might not happen.

## How to reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console logs – specifically, inconsistencies in the execution of the cleanup function.

## Potential causes and solutions are explored in the `bugSolution.js` file.