# Soulution Print OS

Deployable printing-business management app with a built-in Node backend.

## Run locally

1. Install Node.js 18 or newer.
2. Open the project folder.
3. Run:

```bash
npm start
```

4. Open `http://localhost:3000`

## Default login

- Login ID: `Degenix`
- Password: `Admin1234`

## Deployment for GoDaddy

This version is prepared for Node app hosting.

1. Upload the full project folder to your hosting account.
2. Make sure Node.js 18+ is selected in the hosting panel.
3. Set the application startup file to `server.js`.
4. Set the application root to this project folder.
5. Start the app from the hosting panel.

## Data storage

- Business data is stored in `data/state.json`
- The frontend loads from `GET /api/state`
- Every save in the app writes back to `POST /api/state`

## Notes

- This is a simple file-based backend, which is good for small business deployment and demo hosting.
- For higher traffic or stronger security, the next step would be moving to a real database and password hashing.
