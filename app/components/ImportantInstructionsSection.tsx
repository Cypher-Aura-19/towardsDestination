import { AlertCircle } from "lucide-react";

export default function ImportantInstructionsSection() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-300 shadow-lg mt-8">
      <div className="flex items-center justify-center gap-3 mb-6">
        <AlertCircle className="w-8 h-8 text-red-600" />
        <h2 className="text-3xl font-bold text-gray-800 text-center" style={{ fontFamily: 'cursive' }}>
          Important Instructions
        </h2>
      </div>
      
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mt-1">
            <span className="text-white font-bold">!</span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            If fuel prices increase, the rates will be updated, and you will be sent an invoice with the updated rate.
          </p>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mt-1">
            <span className="text-white font-bold">!</span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Company may substitute or postpone trips due to landslides, roadblocks, or other problems, offering customers options for alternate tours; refunds are not offered in these circumstances.
          </p>
        </div>
      </div>
    </div>
  );
}
