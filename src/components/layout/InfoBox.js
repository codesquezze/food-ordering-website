export default function InfoBox({children}) {
    return (
      <div className="text-center text-md font-semibold bg-blue-200 p-3 rounded-xl border-1 border-green-600">
        {children}
      </div>
    );
  }