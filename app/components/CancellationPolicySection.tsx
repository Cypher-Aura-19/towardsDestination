export default function CancellationPolicySection() {
  return (
    <div className="bg-gray-100/50 rounded-lg p-4 border border-gray-200 mt-8 opacity-70">
      <h3 className="text-sm font-semibold text-gray-500 mb-2">
        Cancellation Policy
      </h3>
      
      <div className="space-y-1.5">
        <p className="text-xs text-gray-500 leading-relaxed pl-3">
          • The advance payment can&apos;t be refunded but can be used for future trips within a year, (only if pre-informed before commencement dates).
        </p>

        <p className="text-xs text-gray-500 leading-relaxed pl-3">
          • 100% amount adjusted if informed before 10 days or more earlier
        </p>

        <p className="text-xs text-gray-500 leading-relaxed pl-3">
          • 75% amount adjusted if informed before 3-10 days earlier
        </p>

        <p className="text-xs text-gray-500 leading-relaxed pl-3">
          • 60% amount adjusted if informed before less than 3 days
        </p>

        <p className="text-xs text-gray-500 leading-relaxed pl-3">
          • In case of Cancellation, The company will issue a voucher for the canceled amount, valid for one year.
        </p>

        <p className="text-xs text-gray-500 leading-relaxed pl-3">
          • No Amount will be refunded if any Person leaves the Trip after departure at any stage due to any Issue.
        </p>
      </div>
    </div>
  );
}
