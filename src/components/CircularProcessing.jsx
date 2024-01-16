export default function CircularProcessing({ rate }) {
  let color;

  switch (true) {
    case parseInt(rate) >= 75:
      color = "#2da94c";
      break;
    case parseInt(rate) >= 50 && rate < 75:
      color = "#90972C";
      break;
    case parseInt(rate) < 50:
      color = "#974c2c";
      break;
    default:
      break;
  }
  console.log("color", color);
  return (
    <div className="w-[40px] h-[40px] rounded-full relative flex justify-center items-center bg-gray-900">
      <div
        className="w-[36px] h-[36px] rounded-full absolute"
        style={{
          background: `conic-gradient(${color} 0% ${
            360 * rate * 0.01
          }deg, rgba(255, 255, 255, 0.1	) ${360 * rate * 0.01}deg 360deg)`,
        }}
      >
        <div className="w-[32px] h-[32px] bg-gray-900 absolute top-[50%] left-[50%] rounded-full -translate-x-[50%] -translate-y-[50%] flex justify-center items-center text-[12px] font-medium text-white">
          {rate}
        </div>
      </div>
    </div>
  );
}
