import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

// Supabase credentials
const SUPABASE_URL = 'https://reaatvwxlhyqouikesnq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlYWF0dnd4bGh5cW91aWtlc25xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5MjI2MzcsImV4cCI6MjA1MjQ5ODYzN30.4oVAveW7rguV1B_pbVGeQsKFH3kPfx_2YMUfdtL0YUk';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Add click event listener
document.getElementById('fetchBtn').addEventListener('click', async () => {
  try {
    // Fetch data from the "test_table"
    const { data, error } = await supabase.from('test_table').select('*');
    if (error) throw error;

    // Display data
    document.getElementById("results").innerHTML = `<ul>
      ${data.map(item => `<li>${item.name}: ${item.description}</li>`).join("")}
    </ul>`;
  } catch (err) {
    console.error(err.message);
    document.getElementById('results').textContent = `Error: ${err.message}`;
  }
});
