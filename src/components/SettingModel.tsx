import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const underline = {
    borderBottom: "5px solid #F88A2B",
  };
  const underlineAnd = {
    borderBottom: "3px solid #F88A2B",
  };
  return (
    <div
      id="popup-modal"
      tabIndex={-1}
      className="fixed top-0 left-0 right-0 z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-[40%] p-4 rounded-lg shadow-lg">
            <div className="mb-4">
              <h2 className="text-md font-semibold mb-2 text-center">
                <u style={underline}>Settings</u>
              </h2>
              <h3 className="text-md font-semibold mb-2 text-center">
                <u style={underlineAnd}>Android</u>
              </h3>
              <div className="flex">
                <div className="w-1/2 p-1 font-bold">Bottone Shop</div>
                <div className="w-1/2 p-1 font-bold">Bottone CheckOut</div>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="flex items-center">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="android-option"
                      value="Option 1"
                    />
                    <span className="ml-2 mr-2">Attivo</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="android-option"
                      value="Option 2"
                    />
                    <span className="ml-2">Disattivo</span>
                  </label>
                </div>
                <div className="flex items-center">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="android-option"
                      value="Option 3"
                    />
                    <span className="ml-2 mr-2">Attivo</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="android-option"
                      value="Option 4"
                    />
                    <span className="ml-2">Disattivo</span>
                  </label>
                </div>
              </div>
              <label className="font-bold pl-3 pr-3">Safondo Bottone</label>
              <div className="flex items-center mb-2 pl-5 pr-5">
                <input
                  type="text"
                  className="w-full p-2 h-10 border-none custom-bg "
                />
                <button className="bg-black h-10 text-white p-2 brow-btn">
                  Browser
                </button>
              </div>
              <label className="font-bold pl-3 pr-3">Testo Bottone</label>
              <div className="flex items-center mb-2 pl-5 pr-5">
                <input
                  type="text"
                  className="w-full p-2 h-10 border-none custom-bg "
                />
                <button className="bg-black h-10 text-white p-2 brow-btn">
                  Browser
                </button>
              </div>

              <div className="text-center">
                <button className="custom-Submit-btn" onClick={onClose}>
                  Submit
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-md font-semibold mb-2 text-center">
                <u style={underlineAnd}>IOS</u>
              </h3>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="flex items-center">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="android-option"
                      value="Option 1"
                    />
                    <span className="ml-2 mr-2">Attivo</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="android-option"
                      value="Option 2"
                    />
                    <span className="ml-2">Disattivo</span>
                  </label>
                </div>
                <div className="flex items-center">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="android-option"
                      value="Option 3"
                    />
                    <span className="ml-2 mr-2">Attivo</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="android-option"
                      value="Option 4"
                    />
                    <span className="ml-2">Disattivo</span>
                  </label>
                </div>
              </div>
              <label className="font-bold pl-3 pr-3">Safondo Bottone</label>

              <div className="flex items-center mb-2 pl-5 pr-5">
                <input
                  type="text"
                  className="w-full p-2 h-10 border-none custom-bg "
                />
                <button className="bg-black h-10 text-white p-2 brow-btn">
                  Browser
                </button>
              </div>
              <label className="font-bold pl-3 pr-3">Testo Bottone</label>

              <div className="flex items-center mb-2 pl-5 pr-5">
                <input
                  type="text"
                  className="w-full p-2 h-10 border-none custom-bg "
                />
                <button className="bg-black h-10 text-white p-2 brow-btn">
                  Browser
                </button>
              </div>

              <div className="text-center">
                <button className="custom-Submit-btn" onClick={onClose}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
