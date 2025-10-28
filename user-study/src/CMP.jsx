//TODO: add click events for buttons
function CMP() {
  return (
    <div class="bg-white w-1/2 h-1/2 shadow-lg shadow-black">
      <div class="m-14 flex-col ">
        <p class="text-4xl font-bold text-center">Privacy Notice</p>
        <p class="text-base">Our site collects and stores information about you, your preferences and behavior, and your device to analyze website traffic, personalize content and ads, and provide social media features.</p>
        <p class="text-base">Because we care about your privacy, you can decide whether to allow or reject the use of this technology.</p>    
        <div class="flex justify-evenly w-full mt-10">
          <button class="w-40 h-10 bg-blue-500 border-none text-white uppercase cursor-pointer hover:bg-blue-300">
            accept all
          </button>
          <button class="w-40 h-10 bg-blue-500 border-none text-white uppercase cursor-pointer hover:bg-blue-300">
            reject all
          </button>
          <button class="w-40 h-10 bg-blue-500 border-none text-white uppercase cursor-pointer hover:bg-blue-300">
            customise
          </button>
        </div>
      </div>
    </div>
  );
}

export default CMP;