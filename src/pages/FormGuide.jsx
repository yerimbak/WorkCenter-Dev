// import {Outlet} from 'react-router-dom'
import {useState, useEffect} from 'react'
// import Accordion from '../components/modal/Accordion'

export function FormGuide() {
  const [currentTab, setCurrentTab] = useState(0)

  const menuArr = [
    {
      name: '개인회원',
      content:
        '이미 로그인 되어 있음ㅇㄴㅁㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹloremdsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
    },
    {name: '기업회원', content: '기업'}
  ]

  const selectMenuHandler = (index) => {
    setCurrentTab(index)
  }

  // const [form, setText] = useState('')

  // const onChange = (e) => {
  //   setText(e.target.value)
  // }

  // const onReset = () => {
  //   setForm('')
  // }
  // const [form, setForm] = useState({
  //   email: '',
  //   password: '',
  //   name: '',
  //   gender: '',
  //   phoneNumber: ''
  // })
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(form)
  // }
  // const handleChange = (e) => {
  //   const {name, value} = e.target
  //   setForm({...form, [name]: value})
  // }

  // 검색창
  const [text, setText] = useState('')

  // 약관동의
  const [allCheck, setAllCheck] = useState(false)
  const [ageCheck, setAgeCheck] = useState(false)
  const [useCheck, setUseCheck] = useState(false)
  const [marketingCheck, setMarketingCheck] = useState(false)
  const [snsCheck, setSnsCheck] = useState(false)
  const [emailCheck, setEmailCheck] = useState(false)

  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true)
      setAgeCheck(true)
      setUseCheck(true)
      setMarketingCheck(true)
      setSnsCheck(true)
      setEmailCheck(true)
    } else {
      setAllCheck(false)
      setAgeCheck(false)
      setUseCheck(false)
      setMarketingCheck(false)
      setSnsCheck(false)
      setEmailCheck(false)
    }
  }

  const ageBtnEvent = () => {
    if (ageCheck === false) {
      setAgeCheck(true)
    } else {
      setAgeCheck(false)
    }
  }

  const useBtnEvent = () => {
    if (useCheck === false) {
      setUseCheck(true)
    } else {
      setUseCheck(false)
    }
  }

  const marketingBtnEvent = () => {
    if (marketingCheck === false) {
      setMarketingCheck(true)
      setSnsCheck(true)
      setEmailCheck(true)
    } else {
      setMarketingCheck(false)
      setSnsCheck(false)
      setEmailCheck(false)
    }
  }

  const snsCheckBtnEvent = () => {
    if (snsCheck === false) {
      setSnsCheck(true)
    } else {
      setSnsCheck(false)
    }
  }

  const emailCheckBtnEvent = () => {
    if (emailCheck === false) {
      setEmailCheck(true)
    } else {
      setEmailCheck(false)
    }
  }

  useEffect(() => {
    if (ageCheck === true && useCheck === true && marketingCheck === true) {
      setAllCheck(true)
    } else {
      setAllCheck(false)
    }
    if (snsCheck === true && emailCheck === true) {
      setMarketingCheck(true)
    } else {
      setMarketingCheck(false)
    }
  }, [ageCheck, useCheck, marketingCheck, snsCheck, emailCheck])

  // 아코디언
  // const [selected, setSelected] = useState(null)
  return (
    <>
      <div className="wrap">
        <br />
        <br />
        <br />
        <div className="field-form">
          <label className="title">
            아이디
            <sup className="important">
              *<span className="blind">필수항목</span>
            </sup>
          </label>
          <div className="cont-line">
            <div className="field clear">
              <input type="text" placeholder="아이디를 입력해 주세요." />
              <button type="button" className="btn-clear">
                Reset
              </button>
            </div>
          </div>
          <p className="success">사용할 수 있는 아이디 입니다.</p>
          <p className="error">형식이 맞지 않습니다.</p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="field-form">
          <label className="title">
            아이디
            <sup className="important">
              *<span className="blind">필수항목</span>
            </sup>
          </label>
          <div className="cont-line">
            <div className="field clear">
              <input type="text" placeholder="아이디를 입력해 주세요." disabled />
              <button type="button" className="btn-clear">
                Reset
              </button>
            </div>
          </div>
          <p className="success">사용할 수 있는 아이디 입니다.</p>
          <p className="error">형식이 맞지 않습니다.</p>
          <p className="condition">영문,숫자,일부기호( - / _ / . / @ )만 입력 가능</p>
        </div>
        <br />
        <br />
        <div className="field-form">
          <label className="title">
            아이디
            <sup className="important">
              *<span className="blind">필수항목</span>
            </sup>
          </label>
          <div className="cont-line">
            <div className="field clear">
              <input type="text" placeholder="아이디를 입력해 주세요." />
              <button type="button" className="btn-clear">
                Reset
              </button>
            </div>
          </div>
          <p className="success">사용할 수 있는 아이디 입니다.</p>
          <p className="error">형식이 맞지 않습니다.</p>
          <p className="condition">영문,숫자,일부기호( - / _ / . / @ )만 입력 가능</p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="field-form">
          <label className="title">
            비밀번호
            <sup className="important">
              *<span className="blind">필수항목</span>
            </sup>
          </label>
          <div className="cont-line line">
            <div className="field clear">
              <input type="text" placeholder="비밀번호를 입력해 주세요." />
              <button type="button" className="btn-clear">
                Reset
              </button>
            </div>
            <button className="checkbutton bd-brown">중복확인</button>
          </div>
          <p className="success">사용할 수 있는 비밀번호 입니다.</p>
          <p className="error">형식이 맞지 않습니다.</p>
          <p className="condition">영문,숫자,일부기호( - / _ / . / @ )만 입력 가능</p>
        </div>
        <br />
        <br />
        <div className="button-wrap">
          <button className="button bd-brown">취소</button>
          <button className="button brown">확인</button>
        </div>
        <button className="button primary" disabled="disabled">
          확인
        </button>
        <br />
        <br />
        <br />
        <br />
        <button className="button brown">다음</button>
        <button className="button brown" disabled="disabled">
          다음
        </button>
        <button className="button orange">다음</button>
        <button className="button orange" disabled="disabled">
          다음
        </button>
        <br />
        <br />
        <br />
        <br />
        <button className="checkbutton bd-brown">중복확인</button>
        <button className="checkbutton bd-brown" disabled="disabled">
          중복확인
        </button>
        <button className="checkbutton bd-brown">인증번호 재발송</button>
        <button className="checkbutton bd-black">중복확인</button>
        <button className="checkbutton bd-black" disabled="disabled">
          중복확인
        </button>
        <br />
        <br />
        <br />
        <div className="field_form">
          <div className="cont_line">
            <div className="field">
              <textarea className="mCustomScrollbar" placeholder="안녕하세요"></textarea>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="textarea-wrap">
          <h1>문의하기</h1>
          <textarea cols="30" rows="10" placeholder="내용을 입력해주세요." disabled></textarea>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="gender-check">
          <div className="gender-check-wrap">
            <input type="radio" id="1" name="x" />
            <label htmlFor="1">Male</label>
          </div>
          <div className="gender-check-wrap">
            <input type="radio" id="2" name="x" />
            <label htmlFor="2">Female</label>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="tabmenu-wrap">
          <div className="tabmenu">
            {menuArr.map((ele, index) => {
              return (
                <li
                  key={index}
                  className={currentTab === index ? 'submenu focused' : 'submenu'}
                  onClick={() => selectMenuHandler(index)}
                >
                  {ele.name}
                </li>
              )
            })}
            {/* <div className="tab-line"></div> */}
          </div>
          <div className="tab-content">
            <h1>{menuArr[currentTab].content}</h1>
            <p>탭메뉴</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <form className="searchform">
        <input
          type="text"
          placeholder="검색어 입력"
          className="search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="search-btn">
          <i className="search-icon"></i>
        </button>
      </form>

      <br />
      <br />
      <br />
      <br />
      <div className="agreeBox">
        <div className="agreeAllBtn">
          <label className="agreeAll">
            <input className="check" type="checkbox" checked={allCheck} onChange={allBtnEvent} />
            전체 약관에 동의합니다.
          </label>
        </div>
        {/* 개별 체크박스 */}
        <div className="rulebox">
          <label className="ruletext">
            <input className="check" type="checkbox" checked={ageCheck} onChange={ageBtnEvent} />
            <span className="textpoint">필수</span>
            <span className="checkbox-title">만 14세 이상입니다</span>
          </label>
          <i className="arrow right" role="img"></i>
        </div>
        <div className="rulebox">
          <label className="ruletext">
            <input className="check" type="checkbox" checked={useCheck} onChange={useBtnEvent} />
            <span className="textpoint">필수</span>
            <span className="checkbox-title">이용약관</span>
          </label>
          <i className="arrow right" role="img"></i>
        </div>
        <div className="rulebox">
          <label className="ruletext">
            <input className="check" type="checkbox" checked={marketingCheck} onChange={marketingBtnEvent} />
            <span className="textpoint">선택</span>
            <span className="checkbox-title">마케팅 동의</span>
          </label>
          <i className="arrow right" role="img"></i>
          <div className="subcheckbox">
            <label className="subselection">
              <input className="check" type="checkbox" checked={snsCheck} onChange={snsCheckBtnEvent} />
              <span className="checkbox-title">SNS</span>
            </label>
            <label className="subselection">
              <input className="check" type="checkbox" checked={emailCheck} onChange={emailCheckBtnEvent} />
              <span className="checkbox-title">이메일</span>
            </label>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <input className="check" type="checkbox" />
      <br />
      <br />
      <label className="ruletext">
        <input className="check" type="checkbox" />
        <span className="textpoint">필수</span>
        <span className="checkbox-title">이용약관</span>
      </label>
      <br />
      <br />
      <br />
      <br />
      <div className="select-box">
        <button className="label">문의 전체</button>
        <ul className="option">
          <span className="line"></span>
          <li>
            <a href="javascript:;" data-value="Service 전체">
              전체
            </a>
          </li>
          <li>
            <a href="javascript:;" data-value="A Service">
              1
            </a>
          </li>
          <li>
            <a href="javascript:;" data-value="B Service">
              2
            </a>
          </li>
          <li>
            <a href="javascript:;" data-value="C Service">
              3
            </a>
          </li>
          <li>
            <a href="javascript:;" data-value="가 Service">
              4
            </a>
          </li>
          <li>
            <a href="javascript:;" data-value="나 Service">
              5
            </a>
          </li>
          <li>
            <a href="javascript:;" data-value="다 Service">
              6
            </a>
          </li>
          <li>
            <a href="javascript:;" data-value="라 Service">
              7
            </a>
          </li>
        </ul>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="wrapper">
        <div className="accordion">
          some items<span>+</span>
          <div className="item">
            <div className="title">
              <h2>1</h2>
            </div>
            <div className="content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, debitis perspiciatis, est accusamus dolor
              magnam perferendis consectetur veniam vitae mollitia inventore sed, quis eaque. Optio sapiente sit tempore
              quos officiis.
            </div>
          </div>
          <div className="item">
            <div className="title">
              <h2>2</h2>
            </div>
            <div className="content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, debitis perspiciatis, est accusamus dolor
              magnam perferendis consectetur veniam vitae mollitia inventore sed, quis eaque. Optio sapiente sit tempore
              quos officiis.
            </div>
          </div>
          <div className="item">
            <div className="title">
              <h2>3</h2>
            </div>
            <div className="content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, debitis perspiciatis, est accusamus dolor
              magnam perferendis consectetur veniam vitae mollitia inventore sed, quis eaque. Optio sapiente sit tempore
              quos officiis.
            </div>
          </div>
          <div className="item">
            <div className="title">
              <h2>4</h2>
            </div>
            <div className="content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, debitis perspiciatis, est accusamus dolor
              magnam perferendis consectetur veniam vitae mollitia inventore sed, quis eaque. Optio sapiente sit tempore
              quos officiis.
            </div>
          </div>
          {/* <h1 className="accordion-title">추가 정보 입력 (선택)</h1>
        <div className="field-form">
          <h2>회사 정보</h2>
          <label className="title">회사 주소</label>
          <div className="cont-line line">
            <div className="field clear">
              <input type="text" />
            </div>
            <button className="checkbutton bd-brown">주소검색</button>
          </div>
          <div className="cont-line">
            <div className="field clear">
              <input type="text" placeholder="주소를 입력해 주세요." />
              <button type="button" className="btn-clear">
                Reset
              </button>
            </div>
          </div>
        </div> */}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}
