export default function MilestoneProgress({ currentKM }) {
  const progress = (currentKM / 500) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-white text-center text-xl font-semibold mb-4">
        CỘT MỐC CỦA BẠN
      </h2>
      <div className="bg-gray-300 rounded-full h-6 overflow-hidden">
        <div
          className="bg-[#8DA650] h-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-white text-sm mt-2">
        <span>50 KM</span>
        <span>200 KM</span>
        <span>350 KM</span>
        <span>500 KM</span>
      </div>
    </div>
  );
}