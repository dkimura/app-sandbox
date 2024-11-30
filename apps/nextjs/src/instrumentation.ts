export const runtime = 'nodejs'

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { initMocks } = await import('./testing/msw')
    await initMocks()
  }
}
