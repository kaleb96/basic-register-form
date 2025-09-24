import { useState } from "react";
import Icon from "@mdi/react";
import {
  mdiAccountOutline,
  mdiLock,
  mdiEmailOutline,
  mdiCalendarAccountOutline,
  mdiCellphone,
  mdiCheckCircleOutline,
  mdiChevronUp,
  mdiChevronDown,
  mdiCheckBold,
} from "@mdi/js";
import "./App.css";
import type { commonType, termType } from "./assets/types/common";

function Header() {
  return <div className="naverTitle">NAVER</div>;
}

function InputIcon(props: commonType) {
  return (
    <div
      className="inputCommon"
      style={{
        padding: "10px",
        borderTopRightRadius: props.direction === "top" ? "5px" : "0px",
        borderTopLeftRadius: props.direction === "top" ? "5px" : "0px",
        borderBottomLeftRadius: props.direction === "down" ? "5px" : "0px",
        borderBottomRightRadius: props.direction === "down" ? "5px" : "0px",
      }}
    >
      <Icon path={props.path} size={1} />
      <input
        placeholder={props.placeHolder}
        style={{ width: "100%", marginLeft: "5px" }}
      />
    </div>
  );
}

function CommonInfo() {
  return (
    <>
      <div
        className="inputCommon"
        style={{
          padding: "10px",
          borderTopRightRadius: "5px",
          borderTopLeftRadius: "5px",
        }}
      >
        <Icon path={mdiAccountOutline} size={1} />
        <input
          placeholder="아이디"
          style={{ width: "314px", marginLeft: "4px" }}
        />
        <span style={{ fontSize: "14px", marginLeft: "5px" }}>@naver.com</span>
      </div>
      <InputIcon path={mdiLock} placeHolder="비밀번호" />
      <InputIcon
        path={mdiEmailOutline}
        placeHolder="[선택] 이메일주소"
        direction="down"
      />
    </>
  );
}

function PersonalInfo() {
  const [isMan, setIsMan] = useState(true);
  const [isKorean, setIsKorean] = useState(true);
  return (
    <>
      <InputIcon path={mdiAccountOutline} placeHolder="이름" direction="top" />
      <InputIcon
        path={mdiCalendarAccountOutline}
        placeHolder="생년월일 8자리"
      />
      <div
        className="inputCommon"
        style={{
          padding: "5px 10px",
          borderBottomRightRadius: "5px",
          borderBottomLeftRadius: "5px",
        }}
      >
        <div
          className="buttonContainer"
          style={{
            marginRight: "20px",
          }}
        >
          <div
            className="selectBox"
            style={{ borderColor: isMan ? "#03c75a" : "#6e6b6e" }}
            onClick={() => setIsMan(true)}
          >
            남자
          </div>
          <div
            className="selectBox"
            style={{ borderColor: !isMan ? "#03c75a" : "#6e6b6e" }}
            onClick={() => setIsMan(false)}
          >
            여자
          </div>
        </div>
        <div className="buttonContainer">
          <div
            className="selectBox"
            style={{ borderColor: isKorean ? "#03c75a" : "#6e6b6e" }}
            onClick={() => setIsKorean(true)}
          >
            내국인
          </div>
          <div
            className="selectBox"
            style={{ borderColor: !isKorean ? "#03c75a" : "#6e6b6e" }}
            onClick={() => setIsKorean(false)}
          >
            외국인
          </div>
        </div>
      </div>
    </>
  );
}

function PhoneNumber() {
  return (
    <>
      <div
        className="inputCommon"
        style={{
          padding: "5px 10px",
          margin: "10px",
        }}
      >
        <Icon path={mdiCellphone} size={1}></Icon>
        <input
          placeholder="휴대전화번호"
          style={{ marginLeft: "10px", width: "100%" }}
        />
      </div>
    </>
  );
}

function Term(prop: termType) {
  const [clickTerm, setClilckTerm] = useState(false);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Icon
        path={mdiCheckBold}
        size={0.5}
        style={{
          cursor: "pointer",
          color: clickTerm ? "#03c75a" : "#6e6b6e",
        }}
        onClick={() => setClilckTerm((prev) => !prev)}
      />
      <div style={{ marginLeft: "10px" }}>{prop.text}</div>
    </div>
  );
}

function TermsAll() {
  const [arrowDown, setArrowDown] = useState(true);
  const [clickAll, setClickAll] = useState(false);

  return (
    <>
      <div
        className="inputCommon"
        style={{
          alignItems: "center",
          justifyContent: "space-between", // 양 끝 정렬
          padding: "5px 10px",
        }}
      >
        {/* 왼쪽 그룹 */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Icon
            path={mdiCheckCircleOutline}
            size={1}
            style={{
              cursor: "pointer",
              color: clickAll ? "#03c75a" : "#6e6b6e",
            }}
            onClick={() => setClickAll((prev) => !prev)}
          />
          <div>
            <span style={{ color: "#03c75a" }}>[필수]</span> 인증 약관 전체 동의
          </div>
        </div>

        {/* 오른쪽 아이콘 */}
        <Icon
          path={arrowDown ? mdiChevronDown : mdiChevronUp}
          size={1}
          style={{ cursor: "pointer" }}
          onClick={() => setArrowDown((prev) => !prev)}
        />
      </div>
      {!arrowDown && (
        <div
          style={{
            width: "460px",
            padding: "10px",
            display: "grid",
            gridTemplateColumns: "repeat(2, 230px)", // 한 줄에 2개
            gap: "10px",
            border: "1px solid #6e6b6e",
          }}
        >
          <Term text={"개인정보 이용"} clickAll={clickAll} />
          <Term text={"고유식별정보 처리"} clickAll={clickAll} />
          <Term text={"통신사 이용약관"} clickAll={clickAll} />
          <Term text={"인증사 이용약관"} clickAll={clickAll} />
          <Term text={"네이버 개인정보수집"} clickAll={clickAll} />
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Header />
      <CommonInfo />
      <div className="errorText">
        <div className="dotStyle">• 아이디: 필수 정보입니다.</div>
        <div className="dotStyle">• 비밀번호: 필수 정보입니다.</div>
      </div>
      <PersonalInfo />
      <PhoneNumber />
      <div className="errorText">
        <div className="dotStyle">• 휴대전화번호: 필수 정보입니다.</div>
      </div>
      <TermsAll />
    </div>
  );
}

export default App;
