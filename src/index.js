const http = require('http');
const axios = require('axios');

class HealthChecker {
    constructor(services, interval) {
        this.services = services;
        this.interval = interval || 30000; // Default interval 30 seconds
    }

    start() {
        console.log('Starting health checks...');
        this.checkServices();
        setInterval(() => this.checkServices(), this.interval);
    }

    async checkServices() {
        for (const service of this.services) {
            try {
                const response = await axios.get(service.url);
                console.log(`Health check for ${service.name}: Status ${response.status}`);
            } catch (error) {
                console.log(`Health check for ${service.name} failed: ${error.message}`);
            }
        }
    }
}

// Example usage
const services = [
    { name: 'User Service', url: 'http://localhost:3000/health' },
    { name: 'Order Service', url: 'http://localhost:3001/health' }
];

const checker = new HealthChecker(services, 10000); // Check every 10 seconds
checker.start();