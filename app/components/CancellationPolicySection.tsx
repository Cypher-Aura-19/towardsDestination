import { XCircle } from "lucide-react";

export default function CancellationPolicySection() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-300 shadow-lg mt-8">
      <div className="flex items-center justify-center gap-3 mb-6">
        <XCircle className="w-8 h-8 text-red-600" />
        <h2 className="text-3xl font-bold text-gray-800 text-center" style={{ fontFamily: 'cursive' }}>
          Cancellation Policy
        </h2>
      </div>
      
      <div className="space-y-6">
        {/* Main Policy */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
            <span className="text-white font-bold text-sm">💡</span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The advance payment can&apos;t be refunded but can be used for future trips within a year, (only if pre-informed before commencement dates).
          </p>
        </div>

        {/* Refund Schedule */}
        <div className="bg-white rounded-xl p-6 border border-gray-300 shadow-md">
          <h3 className="text-xl font-bold text-red-600 mb-4 text-center" style={{ fontFamily: 'cursive' }}>
            Refund Schedule
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">100%</span>
              </div>
              <div className="flex-1">
                <p className="text-gray-800 font-semibold mb-1">Full Amount Adjusted</p>
                <p className="text-gray-600 text-sm">If informed before 10 days or more earlier</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 bg-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">75%</span>
              </div>
              <div className="flex-1">
                <p className="text-gray-800 font-semibold mb-1">Amount Adjusted</p>
                <p className="text-gray-600 text-sm">If informed before 3-10 days earlier</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">60%</span>
              </div>
              <div className="flex-1">
                <p className="text-gray-800 font-semibold mb-1">Amount Adjusted</p>
                <p className="text-gray-600 text-sm">If informed before less than 3 days</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Terms */}
        <div className="space-y-3 border-t border-gray-300 pt-6">
          <div className="flex gap-3">
            <span className="text-red-600 font-bold">—</span>
            <p className="text-gray-700 leading-relaxed">
              In case of Cancellation, The company will issue a voucher for the canceled amount, valid for one year.
            </p>
          </div>

          <div className="flex gap-3">
            <span className="text-red-600 font-bold">—</span>
            <p className="text-gray-700 leading-relaxed">
              No Amount will be refunded if any Person leaves the Trip after departure at any stage due to any Issue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
