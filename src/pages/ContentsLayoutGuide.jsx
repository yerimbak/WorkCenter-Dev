export function ContentsLayoutGuide() {
  return (
    <section className="contents">
      <div className="contents-wrap">
        {/* 컨텐츠 사이즈 small, medium, lage, x-lage */}
        <div className="contents-section small">
          <div className="title-text-box">
            <h2 className="title1">타이틀</h2>
            <p className="description-text">설명문구</p>
          </div>
          <div className="box-wrap">
            <div className="box-layer">
              <div className="box-top border-bottom">
                <h3 className="title1">타이틀</h3>
                <p className="box-info-txt">문구</p>
                <p className="box-info-txt">문구</p>
              </div>
              <div className="box-cont">컨텐츠</div>
            </div>
            <div className="btn-wrap">
              <button type="button" className="btn">버튼</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
