const fs = require('fs');
const path = require('path');

const SUBMISSIONS_FILE = path.join(__dirname, '..', 'data', 'submissions.jsonl');

// In production this emails the submission to support@calicomedia.co via the
// mail relay. Locally we write it to data/submissions.jsonl instead so you can
// see exactly what support would have received.
function sendToSupport(submission) {
  const entry = { ...submission, receivedAt: new Date().toISOString() };

  fs.mkdirSync(path.dirname(SUBMISSIONS_FILE), { recursive: true });
  fs.appendFileSync(SUBMISSIONS_FILE, JSON.stringify(entry) + '\n');

  console.log(`[support] New message from ${entry.name} <${entry.email}>`);
}

module.exports = { sendToSupport };
