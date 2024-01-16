export default function changeHour(runtime) {
  // 시간은 분을 60으로 나눈 몫
  const hours = Math.floor(runtime / 60);

  // 분은 총 분에서 시간을 곱한 후 나머지
  const minutes = runtime % 60;

  return `${hours}시간 ${minutes}분`;
}
