import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function PastEntries() {
    const [entries, setEntries] = useState([]);
    const [selectedEntry, setSelectedEntry] = useState(null);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("moodlogEntries")) || [];
        setEntries(stored);
    }, []);

    const handleDelete = (id) => {
        const updated = entries.filter((entry) => entry.id !== id);
        setEntries(updated);
        localStorage.setItem("moodlogEntries", JSON.stringify(updated));
        toast.success("Entry deleted");
    };

    return (
        <div className="min-h-screen p-6 bg-indigo-50">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-6 text-center">Your Journal Entries</h2>
            <p className="text-center text-gray-500 italic mb-8">
                “Every emotion you wrote was a step forward in understanding yourself.” — MoodLog Insight
            </p>
            {entries.length === 0 ? (
                <p className="text-center text-gray-600">No entries yet. Go write one!</p>
            ) : (
                <div className="grid gap-4 max-w-2xl mx-auto">
                    {entries.map((entry) => (
                        <div
                            key={entry.id}
                            className="bg-white shadow-md rounded-xl p-4 flex justify-between items-start hover:-translate-y-0.5 transition-transform duration-150"
                        >
                            <div>
                                <p className="text-sm text-gray-400">{entry.date}</p>
                                <p className="text-2xl">{entry.mood.emoji}</p>
                                <p className="text-gray-800 mt-2">{entry.text.slice(0, 60)}...</p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <button
                                    onClick={() => setSelectedEntry(entry)}
                                    className="text-indigo-600 hover:underline text-sm"
                                >
                                    View
                                </button>
                                <button
                                    onClick={() => handleDelete(entry.id)}
                                    className="text-red-500 hover:underline text-sm"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal */}
            {selectedEntry && (
                <div className="fixed inset-0 bg-black/50 bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-6 w-full max-w-md">
                        <h3 className="text-xl font-semibold mb-2">{selectedEntry.date}</h3>
                        <p className="text-3xl mb-4">{selectedEntry.mood.emoji}</p>
                        <p className="text-gray-800 whitespace-pre-line">{selectedEntry.text}</p>
                        <button
                            onClick={() => setSelectedEntry(null)}
                            className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-xl hover:-translate-y-0.5 transition-transform duration-200"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
