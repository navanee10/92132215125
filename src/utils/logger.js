// src/utils/logger.js
export const logEvent = async (event, details = {}) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJuYXZhbmVldGhwMjJlY0Bwc25hY2V0LmVkdS5pbiIsImV4cCI6MTc1NDExMzMzMywiaWF0IjoxNzU0MTEyNDMzLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYjljMTk5ZTQtM2YyNC00NWY3LWEyNGMtY2E2MjFiNzQ0NjE3IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibmF2YW5lZXRoIHAiLCJzdWIiOiJiZmU2MGYyZi1jYzI3LTRkMzMtYjRlOS1mOWRiMTQzNzcwZTYifSwiZW1haWwiOiJuYXZhbmVldGhwMjJlY0Bwc25hY2V0LmVkdS5pbiIsIm5hbWUiOiJuYXZhbmVldGggcCIsInJvbGxObyI6IjkyMTMyMjE1MTI1IiwiYWNjZXNzQ29kZSI6InJCUGZTUyIsImNsaWVudElEIjoiYmZlNjBmMmYtY2MyNy00ZDMzLWI0ZTktZjlkYjE0Mzc3MGU2IiwiY2xpZW50U2VjcmV0IjoieUp2bmpzeEFuRVpYakp2UiJ9.EYFuplpoliwdsgup7vZv-ITjtAWA008ZMZRcvphAY_8'; // Use your real token here
  const logData = {
    event,
    details,
    timestamp: new Date().toISOString()
  };

  try {
    await fetch('http://20.244.56.144/evaluation-service/logs', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(logData)
    });
  } catch (err) {
    console.error('Failed to send log:', err);
  }
};
