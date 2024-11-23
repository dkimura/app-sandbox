import { isServer } from '@tanstack/react-query'

async function initMocks() {
  if (isServer) {
    const { server } = await import('./server')
    server.listen()
  } else {
    const { worker } = await import('./browser')
    worker.start()
  }
}

export { initMocks }
