import { useState } from "react";

export default function DeleteButton({ label, onDelete }) {
    const [showConfirm, setShowConfirm] = useState(false);

    if (showConfirm) {
        return (
            <div className="fixed bg-black/80 inset-0 flex items-center h-full justify-center">
                <div className="bg-white p-4 rounded-lg">
                    <div className="font-semibold mb-4">Are you sure you want to delete?</div>
                    <div className="flex gap-2 mt-1">
                        <button
                            onClick={() => {
                                onDelete();
                                setShowConfirm(false);
                            }}
                            type="button"
                            className="bg-red-500 text-white">
                            Yes,&nbsp;delete!
                        </button>
                        <button type="button" onClick={() => setShowConfirm(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <button type="button" onClick={() => setShowConfirm(true)}>
            {label}
        </button>
    );
}