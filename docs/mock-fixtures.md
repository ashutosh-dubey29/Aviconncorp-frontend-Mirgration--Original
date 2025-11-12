# Mock fixtures and offline development

This short guide explains how to add JSON fixtures and enable the mock API interceptor for local development.

Where fixtures live
- Fixtures are JSON files placed under `src/assets/mocks/`.
- File names should match the endpoint key used by `MockApiInterceptor`. Example:
  - `tokens.json` for `.../tokens/`
  - `getCustomerSites.json` for `.../getCustomerSites/`

How the interceptor chooses data
- When mock mode is enabled, the interceptor will try to load `/assets/mocks/<name>.json` first.
- If the fixture exists and is valid JSON, it will be returned as the API response.
- If no fixture is present the interceptor falls back to a canned inline response so the UI still works.

Enabling mock mode
- Two ways to enable mock mode in your browser during development:
  1. Add `?useMock=1` to the app URL (e.g. `http://localhost:4200/?useMock=1`).
  2. In the browser console run `localStorage.setItem('USE_MOCK_API', 'true'); location.reload();`.

Tips for creating fixtures
- Use realistic shapes: arrays for lists, objects for details, match keys used by components (e.g. `categories` / `series` for charts).
- Keep fixture files small and focused so tests and UI states are reproducible.

Adding a new fixture
1. Create `src/assets/mocks/<name>.json` containing valid JSON.
2. If you need a blob response (Excel/download), the interceptor will attempt to convert the JSON to a blob; otherwise it falls back to the canned blob.

Extending the interceptor
- If you'd like a fixture to be used for another endpoint, open `src/app/interceptors/mock-api.interceptor.ts` and match the `relative.startsWith('<endpoint>')` branch to call `loadJsonFixture('<name>', fallback)`.

Support
- If a fixture fails to load, the interceptor will use the fallback canned response. Open developer tools to inspect network requests and returned mock data.

Enjoy fast offline UI iterations!
