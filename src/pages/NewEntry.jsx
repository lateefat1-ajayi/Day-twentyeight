import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const moods = [
  { emoji: "😊", label: "Happy" },
  { emoji: "😐", label: "Neutral" },
  { emoji: "😢", label: "Sad" },
  { emoji: "😠", label: "Angry" },
  { emoji: "😰", label: "Anxious" },
  { emoji: "🤩", label: "Excited" },
];

export default function NewEntry() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    if (!selectedMood || text.trim() === "") {
      toast.error("Please select a mood and write something.");
      return;
    }

    const entry = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      mood: selectedMood,
      text,
    };

    const existing = JSON.parse(localStorage.getItem("moodlogEntries")) || [];
    localStorage.setItem("moodlogEntries", JSON.stringify([entry, ...existing]));

    toast.success("Entry saved!");
    navigate("/entries");
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center justify-start bg-white">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-4">New Journal Entry</h2>
      <p className="text-sm text-gray-500 mb-6">Date: {new Date().toLocaleDateString()}</p>

      <div className="mb-6">
        <p className="mb-2 text-gray-700 font-medium">How are you feeling?</p>
        <div className="flex gap-4 flex-wrap justify-center">
          {moods.map((mood) => (
            <button
              key={mood.label}
              onClick={() => setSelectedMood(mood)}
              className={`text-3xl p-2 rounded-full transition-transform duration-150 ${
                selectedMood?.label === mood.label
                  ? "bg-indigo-200 scale-110"
                  : "hover:-translate-y-0.5"
              }`}
            >
              {mood.emoji}
            </button>
          ))}
        </div>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your thoughts here..."
        className="w-full max-w-xl h-40 border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-indigo-300 mb-6"
      />

      <button
        onClick={handleSave}
        className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:-translate-y-0.5 transition-transform duration-200"
      >
        Save Entry
      </button>
    </div>
  );
}
