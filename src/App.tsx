import { useState } from "react";
import Icon from "@mdi/react";
import {
  mdiAccountOutline,
  mdiLock,
  mdiEmailOutline,
  mdiCalendarAccountOutline,
} from "@mdi/js";
import "./App.css";
import type { commonType } from "./assets/types/common";

function InputIcon(props: commonType) {
  return (
    <div
      style={{
        display: "flex",
        padding: "10px 10px",
        border: "1px solid #6b6b6e",
        width: "460px",
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
      <InputIcon path={mdiAccountOutline} placeHolder="아이디" />
      <InputIcon path={mdiLock} placeHolder="비밀번호" />
      <InputIcon path={mdiEmailOutline} placeHolder="[선택] 이메일주소" />
    </>
  );
}

function PersonalInfo() {
  return (
    <>
      <InputIcon path={mdiAccountOutline} placeHolder="이름" />
      <InputIcon
        path={mdiCalendarAccountOutline}
        placeHolder="생년월일 8자리"
      />
      <div style={{ display: "flex", border: "1px solid #6b6b6e" }}>
        <button>남자</button>
        <button>여자</button>
        <button>선택안함</button>
      </div>
    </>
  );
}

function PhoneNumber() {
  const [country, setCountry] = useState("대한민국 +82");
  return (
    <>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="미국/캐나다 +1">미국/캐나다 +1</option>
        <option value="영국 +44">영국 +44</option>
        <option value="일본 +81">일본 +81</option>
        <option value="대한민국 +82">대한민국 +82</option>
      </select>
      <input placeholder="휴대전화번호" />
    </>
  );
}

function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <CommonInfo />
      <ul>
        <li
          style={{
            width: "460px",
            color: "red",
            fontSize: "14px",
            fontWeight: "lighter",
          }}
        >
          아이디: 필수정보입니다.
        </li>
      </ul>
      <PersonalInfo />
      <PhoneNumber />
    </div>
  );
}

export default App;
