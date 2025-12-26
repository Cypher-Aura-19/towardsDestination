export default function ImportantInstructionsSection() {
  return (
    <div className="bg-gray-100/50 rounded-lg p-4 border border-gray-200 mt-8 opacity-70">
      <h3 className="text-sm font-semibold text-gray-500 mb-2">
        Important Instructions
      </h3>
      
      <div className="space-y-1.5">
        <p className="text-xs text-gray-500 leading-relaxed pl-3">
          • If fuel prices increase, the rates will be updated, and you will be sent an invoice with the updated rate.
        </p>

        <p className="text-xs text-gray-500 leading-relaxed pl-3">
          • Company may substitute or postpone trips due to landslides, roadblocks, or other problems, offering customers options for alternate tours; refunds are not offered in these circumstances.
        </p>
      </div>
    </div>
  );
}

