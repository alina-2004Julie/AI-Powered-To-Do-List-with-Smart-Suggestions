// src/components/Settings.js
import React, { useState } from 'react';

function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [aiSuggestionsEnabled, setAiSuggestionsEnabled] = useState(true);

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <label>
          Enable Notifications:
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={(e) => setNotificationsEnabled(e.target.checked)}
          />
        </label>
      </div>
      <div>
        <label>
          Enable AI Suggestions:
          <input
            type="checkbox"
            checked={aiSuggestionsEnabled}
            onChange={(e) => setAiSuggestionsEnabled(e.target.checked)}
          />
        </label>
      </div>
      {/* Add other settings like Google Calendar sync */}
    </div>
  );
}

export default Settings;