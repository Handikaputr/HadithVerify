export const config = {
  runtime: 'edge',
}

export default async function handler(request) {
  // Allow CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  }

  // Handle OPTIONS request
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers })
  }

  try {
    // Get query params from request URL
    const { searchParams } = new URL(request.url)
    const book = searchParams.get('book')
    const number = searchParams.get('number')

    if (!book || !number) {
      return new Response(JSON.stringify({ error: 'Missing book or number parameter' }), {
        status: 400,
        headers,
      })
    }
    
    // Build hadith-api-wine searchDetail URL
    const targetUrl = `https://hadith-api-wine.vercel.app/api/searchDetail?book=${encodeURIComponent(book)}&number=${encodeURIComponent(number)}`

    console.log('Proxying request to:', targetUrl)

    // Fetch from hadith-api-wine
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    
    const data = await response.json()

    // Return with CORS headers
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers,
    })
  } catch (error) {
    console.error('Error:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers,
    })
  }
}
