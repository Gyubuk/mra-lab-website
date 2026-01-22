export function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-2">
            Management Risk Analysis Lab
          </h3>
          <p className="text-sm mb-4">
            산업·정보시스템공학과 | 숭실대학교
          </p>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Management Risk Analysis Lab @ SSU. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
