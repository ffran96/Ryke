import DesktopVideoGallery from "../Components/DesktopVideoGallery";

export default function Layout({ children }) {
  return (
    <div className="watch-page min-h-screen bg-[#0f0f0f] text-[#ffffff]">
      <div className="w-full px-6 pt-24 sm:px-10 lg:px-16 2xl:px-20">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_470px]">
          <main className="min-w-0">{children}</main>
          <aside className="min-w-0">
            <DesktopVideoGallery />
          </aside>
        </div>
      </div>
    </div>
  );
}
