# Grading System Web Application

This project is a web application for managing grades using Oracle Database XE. It provides a user-friendly interface for students and teachers to interact with the grading system.

## Project Structure

```
grading-system-web-app
├── src
│   ├── app.js
│   ├── config
│   │   └── dbConfig.js
│   ├── controllers
│   │   └── gradesController.js
│   ├── models
│   │   └── gradeModel.js
│   ├── routes
│   │   └── gradesRoutes.js
│   └── views
│       ├── index.html
│       └── grades.html
├── scripts
│   └── setup.sql
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd grading-system-web-app
   ```

3. Install the required dependencies:
   ```
   npm install
   ```

4. Set up the Oracle Database XE by running the SQL commands in `scripts/setup.sql`.

## Usage

1. Start the application:
   ```
   node src/app.js
   ```

2. Open your web browser and navigate to `http://localhost:3000` to access the grading system.

## Features

- View all grades
- Add new grades
- Update existing grades
- Delete grades

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.