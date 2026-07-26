import { readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const res = await $fetch('https://gf-api.mfry.io/api/v1/auth/refresh', {
    method: 'POST',
    body,
    headers: { 'Content-Type': 'application/json' }
  })
  return res
})
