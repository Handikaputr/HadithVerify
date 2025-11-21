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
    
    // Build hadithapi.com URL
    let targetUrl = 'https://hadithapi.com/api/hadiths/?apiKey=$2y$10$JmiFVjtUXIVjqDtcJ6nOKZ4Dt4ZS9HIQn2B3chvmpjnacAw6yu'
    
    // Append all query params
    for (const [key, value] of searchParams.entries()) {
      targetUrl += `&${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    }

    console.log('Proxying request to:', targetUrl)

    // Fetch from hadithapi.com
    const response = await fetch(targetUrl)
    const data = await response.json()

    // Return with CORS headers
    return new Response(JSON.stringify(data), {
      status: 200,
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
