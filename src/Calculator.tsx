function App() {
  return (
    <>
      <div class="flex">
        <div class=" bg-white shadow-xl ring-1 ring-gray-900/5 rounded-lg">
          <div class="mx-auto max-w p-3">
            <div class="grid grid-cols-4 gap-2 place-content-between">
              <div
                class=" col-span-4 border h-10 flex justify-end items-center"
                contenteditable={true}
              >
                0
              </div>
              <div class="w-10 h-10 border flex justify-center items-center hover:bg-slate-400 hover:text-white">
                7
              </div>
              <div class="w-10 h-10 border flex justify-center items-center">
                8
              </div>
              <div class="w-10 h-10 border flex justify-center items-center">
                9
              </div>
              <div class="row-span-2 w-10 h-22 border flex justify-center items-center">
                +
              </div>
              <div class="w-10 h-10 border flex justify-center items-center">
                4
              </div>
              <div class="w-10 h-10 border flex justify-center items-center">
                5
              </div>
              <div class="w-10 h-10 border flex justify-center items-center">
                6
              </div>
              <div class="w-10 h-10 border flex justify-center items-center">
                1
              </div>
              <div class="w-10 h-10 border flex justify-center items-center">
                2
              </div>
              <div class="w-10 h-10 border flex justify-center items-center">
                3
              </div>
              <div class="row-span-2 w-10 h-22 border flex justify-center items-center">
                Enter
              </div>
              <div class="col-span-2 w-22 h-10 border flex justify-center items-center">
                0
              </div>
              <div class="w-10 h-10 border flex justify-center items-center">
                Del
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
