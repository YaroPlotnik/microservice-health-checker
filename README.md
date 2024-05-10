# Microservice Health Checker

This is a simple microservice health checker package built in Node.js. It allows you to monitor the health of various microservices by periodically sending HTTP requests to their health endpoints and logging the results.

## Features

- Configurable health check intervals.
- Supports multiple services.
- Simple console log reporting.

## Installation

To install this package, use npm:

```bash
npm install microservice-health-checker
```

## Usage

First, import and initialize the `HealthChecker` with a list of services and the interval between health checks:

```javascript
const HealthChecker = require('microservice-health-checker');

const services = [
{ name: 'User Service', url: 'http://localhost:3000/health' },
{ name: 'Order Service', url: 'http://localhost:3001/health' }
];

const checker = new HealthChecker(services, 10000); // Checks every 10 seconds
checker.start();
```

## Configuration

- `services`: An array of objects, each representing a service with a `name` and a `url` property.
- `interval`: Time in milliseconds between each health check (default is 30000 ms).

## Contributions

Contributions are welcome. Please submit a pull request or open an issue if you have any suggestions or improvements.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
