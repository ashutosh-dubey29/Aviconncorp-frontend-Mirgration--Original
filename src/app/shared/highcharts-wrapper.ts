import HighchartsOrig from 'highcharts/es-modules/masters/highcharts.src.js';

const unwrap = (m: any) => (m && (m.default || m)) || null;

export const Highcharts = HighchartsOrig;

/**
 * Dynamically import a set of Highcharts ESM module paths and return the
 * unwrapped module initializers (functions) suitable for calling with the
 * Highcharts namespace. Any import failure returns null for that module.
 */
export async function loadModules(paths: string[]): Promise<Array<((hc: typeof Highcharts) => void) | null>> {
  const imports = await Promise.all(paths.map(p => import(/* webpackIgnore: true */ p).catch(() => null)));
  return imports.map(unwrap).filter(Boolean) as Array<((hc: typeof Highcharts) => void)>;
}

/**
 * Load a common set of Highcharts modules used across the app. Returns an
 * array of module initializer functions (or empty array on failure).
 */
export async function loadCommonModules(): Promise<Array<((hc: typeof Highcharts) => void)>> {
  const paths = [
    'highcharts/es-modules/masters/modules/boost.src.js',
    'highcharts/es-modules/masters/modules/no-data-to-display.src.js',
    'highcharts/es-modules/masters/highcharts-more.src.js',
    'highcharts/es-modules/masters/modules/solid-gauge.src.js'
  ];
  try {
    return await loadModules(paths);
  } catch {
    return [];
  }
}

/**
 * Initialize module initializers on a Highcharts instance. Safe to call in
 * tests — if `window.__karma__` exists the function will skip initialization
 * to avoid noisy test-time internal patching.
 */
export function initModules(hc: typeof Highcharts = Highcharts, modules?: Array<((hc: typeof Highcharts) => void) | null>): void {
  if (!modules || modules.length === 0) return;
  try {
    if (typeof window !== 'undefined' && (window as any).__karma__) return;
    modules.forEach(m => { if (typeof m === 'function') { try { m(hc); } catch {} } });
  } catch {
    // ignore
  }
}

export default { Highcharts, loadModules, loadCommonModules, initModules };
