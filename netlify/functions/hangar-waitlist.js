// Netlify Function: hangar-waitlist
// POSTs form submissions to Notion Hangar Waitlist database
// Notion DB ID: 3367a350-2270-81a6-a9e7-c02a15f89d6b

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const DB_ID = '3367a350-2270-81a6-a9e7-c02a15f89d6b';

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  const { name, email, phone, aircraft, notes } = body;

  if (!name || !email) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Name and email are required.' }) };
  }

  const today = new Date().toISOString().split('T')[0];

  const payload = {
    parent: { database_id: DB_ID },
    properties: {
      Name: { title: [{ text: { content: name } }] },
      Email: { email: email },
      Phone: phone ? { phone_number: phone } : { phone_number: null },
      'Aircraft Type': { rich_text: [{ text: { content: aircraft || '' } }] },
      Notes: { rich_text: [{ text: { content: notes || '' } }] },
      'Date Added': { date: { start: today } },
      Status: { select: { name: 'Waitlist' } }
    }
  };

  try {
    const res = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28'
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Notion error:', err);
      return { statusCode: 500, body: JSON.stringify({ error: 'Failed to save to Notion.' }) };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true })
    };
  } catch (err) {
    console.error('Function error:', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Server error.' }) };
  }
};
