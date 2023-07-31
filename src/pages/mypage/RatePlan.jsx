import {Link} from 'react-router-dom'

export default function RatePlan() {
  return (
    <>
      <div className="mypage-title-box">
        <h3 className="title2">요금제관리</h3>
      </div>
      <div className="grid-wrap">
        <div className="item">
          <div className="card enterprise"> {/* 엔터프라이즈 일경우 enterprise 추가 */}
            <div className="card-top">
              <div className="title-box">
                <strong className="card-title">엔터프라이즈 플러스 엔터프라이즈 플러스</strong>
                <span className="badge">구독</span>
              </div>
              <div className="card-status-box">
                <button type="button" className="card-status clearly">결제하기</button> {/* 결제하기 일경우 clearly class 추가 */}
              </div>
            </div>
            <div className="card-bottom">
              <div className="date-box">
                <span className="date-text">사용기간</span>
                <span className="date-value">2023. 01. 01 ~ 2023. 12. 31</span>
              </div>
              <div className="date-box">
                <span className="date-text">다음 결제 예정일</span>
                <span className="date-value">2023. 04. 21</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card enterprise"> {/* 엔터프라이즈 일경우 enterprise 추가 */}
            <div className="card-top">
              <div className="title-box">
                <strong className="card-title">엔터프라이즈 플러스 엔터프라이즈 플러스</strong>
                <span className="badge">구독</span>
              </div>
              <div className="card-status-box">
                <button type="button" className="card-status">해지하기</button>
              </div>
            </div>
            <div className="card-bottom">
              <div className="date-box">
                <span className="date-text">사용기간</span>
                <span className="date-value">2023. 01. 01 ~ 2023. 12. 31</span>
              </div>
              <div className="date-box">
                <span className="date-text">다음 결제 예정일</span>
                <span className="date-value">2023. 04. 21</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card enterprise"> {/* 엔터프라이즈 일경우 enterprise 추가 */}
            <div className="card-top">
              <div className="title-box">
                <strong className="card-title">엔터프라이즈 플러스 엔터프라이즈 플러스</strong>
                <span className="badge">구독</span>
              </div>
              <div className="card-status-box">
                <button type="button" className="card-status">해지하기</button> {/* 결제하기 일경우 clearly class 추가 */}
              </div>
            </div>
            <div className="card-bottom">
              <div className="date-box">
                <span className="date-text">사용기간</span>
                <span className="date-value">2023. 01. 01 ~ 2023. 12. 31</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card subscribe"> {/* 구독요금제 일경우 subscribe 추가 */}
            <div className="card-top">
              <div className="title-box">
                <strong className="card-title">프로페셔널 플러스 프로페셔널 플러스</strong>
                <span className="badge">구독</span>
              </div>
              <div className="card-status-box">
                <button type="button" className="card-status">해지하기</button>
              </div>
            </div>
            <div className="card-bottom">
              <div className="date-box">
                <span className="date-text">사용기간</span>
                <span className="date-value">2023. 01. 01 ~ 2023. 12. 31</span>
              </div>
              <div className="date-box">
                <span className="date-text">다음 결제 예정일</span>
                <span className="date-value">2023. 04. 21</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card product"> {/* 상품요금제 일경우 product 추가 */}
            <div className="card-top">
              <div className="title-box">
                <strong className="card-title">베이직</strong>
                <span className="badge">상품</span>
              </div>
              <div className="card-status-box">
                <button type="button" className="card-status">취소하기</button>
              </div>
            </div>
            <div className="card-bottom">
              <div className="date-box">
                <span className="date-text">사용기간</span>
                <span className="date-value">2023. 01. 01 ~ 2023. 12. 31</span>
              </div>
              <div className="date-box">
                <span className="date-text">다음 결제 예정일</span>
                <span className="date-value">2023. 04. 21</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card product"> {/* 상품요금제 일경우 product 추가 */}
            <div className="card-top">
              <div className="title-box">
                <strong className="card-title">베이직</strong>
                <span className="badge">상품</span>
              </div>
            </div>
            <div className="card-bottom">
              <div className="date-box">
                <span className="date-text">사용기간</span>
                <span className="date-value">2023. 01. 01 ~ 2023. 12. 31</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card termination"> {/* 해지완료 및 결제취소 일경우 termination 추가 */}
            <div className="card-top">
              <div className="title-box">
                <strong className="card-title">엔터프라이즈 플러스 엔터프라이즈 플러스</strong>
                <span className="badge">구독</span>
              </div>
              <div className="card-status-box">
                <span className="card-status">해지완료</span> {/* 링크가 없는 경우 추가 */}
              </div>
            </div>
            <div className="card-bottom">
              <div className="date-box">
                <span className="date-text">사용기간</span>
                <span className="date-value">2023. 01. 01 ~ 2023. 12. 31</span>
              </div>
              <div className="date-box">
                <span className="date-text">다음 결제 예정일</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item two-column"> {/* 사용중인 요금제가 1개인 경우 two-column class 추가 */}
          <div className="card banner"> {/* 요금제 더보기 배너일때 banner class 추가 */}
            <div className="banner-wrap">
              <p className="text"><span className="text-block">나에게 알맞는</span> 다양한 요금제를 둘러보세요.</p>
              <div className="btn-wrap">
                <Link to="#" className="button brown">요금제 보러가기</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card product"> {/* 상품요금제 일경우 product 추가 */}
            <div className="card-top">
              <div className="title-box">
                <strong className="card-title">베이직</strong>
                <span className="badge">상품</span>
              </div>
            </div>
            <div className="card-bottom">
              <div className="date-box">
                <span className="date-text">사용기간</span>
                <span className="date-value">2023. 01. 01 ~ 2023. 12. 31</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card termination"> {/* 해지완료 및 결제취소 일경우 termination 추가 */}
            <div className="card-top">
              <div className="title-box">
                <strong className="card-title">엔터프라이즈 플러스 엔터프라이즈 플러스</strong>
                <span className="badge">구독</span>
              </div>
              <div className="card-status-box">
                <span className="card-status">해지완료</span> {/* 링크가 없는 경우 추가 */}
              </div>
            </div>
            <div className="card-bottom">
              <div className="date-box">
                <span className="date-text">사용기간</span>
                <span className="date-value">2023. 01. 01 ~ 2023. 12. 31</span>
              </div>
              <div className="date-box">
                <span className="date-text">다음 결제 예정일</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card banner"> {/* 요금제 더보기 배너일때 banner class 추가 */}
            <div className="banner-wrap">
              <p className="text"><span className="text-block">나에게 알맞는</span> 다양한 요금제를 둘러보세요.</p>
              <div className="btn-wrap">
                <Link to="#" className="button brown">요금제 보러가기</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="item three-column"> {/* 사용중인 요금제가 없을 경우 three-column class 추가 */}
          <div className="card banner full-size"> {/* 요금제 더보기 배너일때 banner class 추가 */}
            <div className="banner-wrap">
              <p className="text"><span className="text-block">나에게 알맞는</span> 다양한 요금제를 둘러보세요.</p>
              <div className="btn-wrap">
                <Link to="#" className="button brown">요금제 보러가기</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rate-plan-info-text">
        <span className="ico-refer hide-text">아이콘</span>
        <p className="text">정기구독 결제수단 추가 및 변경은 <Link to="#" className="text-link">플루닛 통합 브랜드사이트</Link>에서 가능합니다.</p>
      </div>
    </>
  )
}
