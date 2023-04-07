# Node.js Boilerplate

This is a boilerplate project for Node.js web applications. It includes the following features:

- Express.js web framework
- Handlebars.js template engine
- Bootstrap CSS framework
- Passport.js authentication
- MongoDB database integration
- Mongoose ORM
- JWT-based authentication

## Installation

To use this boilerplate, you need to have Node.js and MongoDB installed on your system. You can install them using the following commands:
`sudo apt-get install nodejs
sudo apt-get install mongodb`


Once you have installed Node.js and MongoDB, you can clone the repository and install the dependencies using the following commands:

`git clone https://github.com/anush97/node-boilerplate.git
cd node-boilerplate
npm install`

## Usage

To start the server, run the following command:

`npm start`

This will start the server on port 3000 by default. You can access the application by opening your web browser and navigating to http://localhost:3000.

## Configuration

The configuration files for the application are located in the `config` directory. You can modify the configuration settings by editing the files in this directory.

## Authentication

This boilerplate includes JWT-based authentication using Passport.js. To use this feature, you need to configure the authentication strategy and secret key in the `config/auth.js` file.

## Database

This boilerplate includes MongoDB database integration using Mongoose ORM. The database connection settings are located in the `config/database.js` file.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
