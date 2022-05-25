export default function Home() {
  return (
    <>
      <div className="flex justify-center min-h-screen">
        <div className="my-auto w-2/4 rounded-lg shadow-lg h-80 bg-base-100 flex justify-center items-center">
          <div>
            <label htmlFor="my-modal" className="btn modal-button">
              open modal
            </label>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Welcome!</h3>
                <p className="py-4">
                  Aplikasi ini menggunakan <span className="font-bold">DaisyUI + TailwindCSS + NextJS</span>
                </p>
                <div className="modal-action">
                  <label htmlFor="my-modal" className="btn">
                    Yay!
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
