import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',        // Listen on all network interfaces (required for ngrok)
    port: 5173,
    allowedHosts: 'all'     // Allow all incoming hosts (including ngrok)
  }
  
});
