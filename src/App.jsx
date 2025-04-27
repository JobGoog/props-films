import React from 'react';
import Stars from './Stars.tsx';

export default function App() {
  return (
    <>
      <h2>Пример рейтинга</h2>
      <Stars count={3} />

      {/* Дополнительные примеры для теста */}
      <h2 style={{ marginTop: 32 }}>Другие варианты</h2>
      <Stars count={5} />
      <Stars count={1} />
    </>
  );
}
