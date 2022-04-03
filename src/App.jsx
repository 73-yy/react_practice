// jsxはReactのコンポーネントファイルであることを明示するために利用する。
// ファイル名はパスカルケースで命名する。
import React, { useEffect, useState } from "react";
// import ColorfulMessage from "./components/ColorfulMessage";
import { ColorfulMessage } from "./components/ColorfulMessage";

// stateが変更されたり、propsが連携されると、下記のスクリプトを上から再度流される。
const App = () => {
  console.log("start");
  const [num, setNum] = useState(0);
  const [flag, setFlag] = useState(true);
  // const onClickButton = () => alert();
  // const contentStyle = {
  //   color: "blue",
  //   fontSize: "18px"
  // };
  // const contentLadyStyle = {
  //   color: "pink",
  //   fontSize: "18px"
  // };
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchFlag = () => {
    setFlag(!flag);
  };

  // 関心の分離を実施する。（カウントアップボタンとon/offボタンの切り分け）
  // 表示の度に実施する処理はuseEffectを利用して制御する。
  useEffect(() => {
    // console.log("use");
    if (num % 3 === 0) {
      flag || setFlag(true);
    } else {
      flag && setFlag(false);
    }
  }, [num]);
  // if (num % 3 === 0) {
  //   flag || setFlag(true);
  // } else {
  //   flag && setFlag(false);
  // }
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！！</h1>
      {/* <p style={contentStyle}>お元気ですか？</p> */}
      {/* <ColorfulMessage color="blue" message="お元気ですか?" /> */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      {/* <p style={contentLadyStyle}>元気です。</p> */}
      {/* <ColorfulMessage color="pink" message="元気です。" /> */}
      <ColorfulMessage color="pink">元気です。</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchFlag}>on/off</button>
      <p>{num}</p>
      {flag && <p>(笑)</p>}
    </>
  );
};

// 他のファイルでもAppという関数を利用できるようにする。（＝コンポーネント化）
export default App;
