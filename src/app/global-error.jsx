// src/app/global-error.jsx
'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Something went wrong globally!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
