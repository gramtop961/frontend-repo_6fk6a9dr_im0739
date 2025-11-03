export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-slate-800">NobleVerse</p>
            <p className="mt-1 text-sm text-slate-500">
              © {new Date().getFullYear()} NobleVerse. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Security</a>
            <a href="#" className="hover:text-slate-900">Status</a>
            <a href="#" className="hover:text-slate-900">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
