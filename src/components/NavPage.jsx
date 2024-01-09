import Logo from "../assets/logo.png"; 
import { BiPlusMedical } from "react-icons/bi";

export default function NavPage() {
  return (
    <div className="w-full h-[60px] bg-[#032541] flex justify-center">
        {/* 중앙정렬된 네비게이션 컨테이너 */}
        <div className="max-w-[1300px] w-full h-full flex justify-between">
            {/* 1.왼쪽: 로고+메뉴 */}
            <div className="h-full flex space-x-8">
                {/* 로고 */}
                <div className="h-full w-[200px] flex items-center">
                    <img src={Logo} alt="main logo" />
                </div>
                {/* 메뉴영역 */}
                <div className="h-full flex items-center text-white font-bold space-x-6">
                    <p>Movies</p>
                    <p>TV Shows</p>
                    <p>People</p>
                    <p>more</p>
                </div>
            </div>
            {/* 2.오른쪽: 아이콘 영역 */}
            <div className="flex h-full items-center space-x-6">
                {/* 플러스버튼 */}
                <div className="text-white">
                    <BiPlusMedical />
                </div>
                {/* 랭귀지 선택 */}
                <div className="border border-white text-white p-1 text-xs hover:bg-white hover:text-[#032541]">
                    EN
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}