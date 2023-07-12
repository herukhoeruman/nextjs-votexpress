import React from "react";
import Countdown, { CountdownRendererFn } from "react-countdown";
import CountDownRenderer from "./count-down-renderer";

interface Props {
  className?: string;
}

export default function CountDown(props: Props) {
  const countDown: CountdownRendererFn = ({
    days,
    hours,
    minutes,
    seconds,
  }) => {
    return (
      <CountDownRenderer
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  };
  return (
    <div className={`text-center ${props.className}`}>
      <p>Voting akan dimulai dalam :</p>
      <Countdown date={Date.now() + 100000000} renderer={countDown} />
    </div>
  );
}
