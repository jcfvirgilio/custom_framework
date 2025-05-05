export const BaseStyles = `
  .layout {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }
  header, footer {
    padding: 1rem;
    background: var(--header-bg, #f0f0f0);
  }
`;
