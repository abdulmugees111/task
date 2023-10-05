import React, { useState, useEffect } from "react";

const Modal = ({ isOpen }) => {
  console.log(isOpen);
  useEffect(() => {
    console.log("hello");
  }, []);
  return (
    <div>
      <div
        id="popup-modal"
        tabindex="-1"
        className="fixed top-0 left-0 right-0 z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white w-96 p-4 rounded-lg shadow-lg">
              <div className="mb-4">
                <h3 className="text-md font-semibold mb-2">Android</h3>

                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-indigo-600"
                        name="android-option"
                        value="Option 1"
                      />
                      <span className="ml-2">Option 1</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-indigo-600"
                        name="android-option"
                        value="Option 2"
                      />
                      <span className="ml-2">Option 2</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-indigo-600"
                        name="android-option"
                        value="Option 3"
                      />
                      <span className="ml-2">Option 3</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-indigo-600"
                        name="android-option"
                        value="Option 4"
                      />
                      <span className="ml-2">Option 4</span>
                    </label>
                  </div>
                </div>

                <div className="flex items-center mb-2">
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border"
                    placeholder="Input"
                  />
                  <button className="bg-indigo-600 text-white p-2 rounded-md ml-2">
                    Button
                  </button>
                </div>

                <div className="flex items-center mb-2">
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border"
                    placeholder="Input"
                  />
                  <button className="bg-indigo-600 text-white p-2 rounded-md ml-2">
                    Button
                  </button>
                </div>

                <div className="text-center">
                  <button
                    className="bg-indigo-600 text-white p-2 rounded-md"
                    onClick={isOpen}
                  >
                    Submit
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-md font-semibold mb-2">iOS</h3>

                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-indigo-600"
                        name="ios-option"
                        value="Option A"
                      />
                      <span className="ml-2">Option A</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-indigo-600"
                        name="ios-option"
                        value="Option B"
                      />
                      <span className="ml-2">Option B</span>
                    </label>
                  </div>

                  <div>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-indigo-600"
                        name="ios-option"
                        value="Option C"
                      />
                      <span className="ml-2">Option C</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-indigo-600"
                        name="ios-option"
                        value="Option D"
                      />
                      <span className="ml-2">Option D</span>
                    </label>
                  </div>
                </div>

                <div className="flex items-center mb-2">
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border"
                    placeholder="Input"
                  />
                  <button className="bg-indigo-600 text-white p-2 rounded-md ml-2">
                    Button
                  </button>
                </div>

                <div className="flex items-center mb-2">
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border"
                    placeholder="Input"
                  />
                  <button className="bg-indigo-600 text-white p-2 rounded-md ml-2">
                    Button
                  </button>
                </div>

                <div className="text-center">
                  <button
                    className="bg-indigo-600 text-white p-2 rounded-md"
                    onClick={isOpen}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
