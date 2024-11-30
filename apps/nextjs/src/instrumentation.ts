export async function register() {
  console.log('instrumentationruntime', process.env.NEXT_RUNTIME)

  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { initMocks } = await import('./testing/msw')
    await initMocks()
  }
}
