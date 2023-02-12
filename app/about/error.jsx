'use client';

export default function Error({error, reset}) {
  return (
    <div>
      This is not loading, error: {error.message}
      <button onClick={() => reset()}>Reload this</button>
    </div>
  )
}
