import React from 'react'

export default () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    y="0"
    version="1.1"
    viewBox="0 0 774 123"
  >
    <g className="model" transform="translate(-4 17)">
      <text className="small-text" transform="translate(8 77)">
        input
      </text>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M19.333 52h16"
        className="edge"
        data-dest-tf-name="conv2d0"
        data-source-tf-name="input"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M38.667 52h14.666"
        className="edge"
        data-dest-tf-name="maxpool0"
        data-source-tf-name="conv2d0"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M56.667 52h14.666"
        className="edge"
        data-dest-tf-name="conv2d1"
        data-source-tf-name="maxpool0"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M74.667 52h14.666"
        className="edge"
        data-dest-tf-name="conv2d2"
        data-source-tf-name="conv2d1"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M92.667 52h14.666"
        className="edge"
        data-dest-tf-name="maxpool1"
        data-source-tf-name="conv2d2"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M110.667 52c6 0 12-36 20-36h16.666"
        className="edge"
        data-dest-tf-name="mixed3a_1x1"
        data-source-tf-name="maxpool1"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M110.667 52c6 0 12-12 20-12h2.666"
        className="edge"
        data-dest-tf-name="mixed3a_3x3_bottleneck"
        data-source-tf-name="maxpool1"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M136.667 40h10.666"
        className="edge"
        data-dest-tf-name="mixed3a_3x3"
        data-source-tf-name="mixed3a_3x3_bottleneck"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M110.667 52c6 0 12 12 20 12h2.666"
        className="edge"
        data-dest-tf-name="mixed3a_5x5_bottleneck"
        data-source-tf-name="maxpool1"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M136.667 64h10.666"
        className="edge"
        data-dest-tf-name="mixed3a_5x5"
        data-source-tf-name="mixed3a_5x5_bottleneck"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M110.667 52c6 0 12 36 20 36h2.666"
        className="edge"
        data-dest-tf-name="mixed3a_pool"
        data-source-tf-name="maxpool1"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M136.667 88h10.666"
        className="edge"
        data-dest-tf-name="mixed3a_pool_reduce"
        data-source-tf-name="mixed3a_pool"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M150.667 16c6 0 6 36 12 36h0"
        className="edge"
        data-dest-tf-name="mixed3a"
        data-source-tf-name="mixed3a_1x1"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M150.667 40c6 0 6 12 12 12h0"
        className="edge"
        data-dest-tf-name="mixed3a"
        data-source-tf-name="mixed3a_3x3"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M150.667 64c6 0 6-12 12-12h0"
        className="edge"
        data-dest-tf-name="mixed3a"
        data-source-tf-name="mixed3a_5x5"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M150.667 88c6 0 6-36 12-36h0"
        className="edge"
        data-dest-tf-name="mixed3a"
        data-source-tf-name="mixed3a_pool_reduce"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M167.333 52c6 0 12-36 20-36h22"
        className="edge"
        data-dest-tf-name="mixed3b_1x1"
        data-source-tf-name="mixed3a"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M167.333 52c6 0 12-12 20-12h8"
        className="edge"
        data-dest-tf-name="mixed3b_3x3_bottleneck"
        data-source-tf-name="mixed3a"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M198.667 40h10.666"
        className="edge"
        data-dest-tf-name="mixed3b_3x3"
        data-source-tf-name="mixed3b_3x3_bottleneck"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M167.333 52c6 0 12 12 20 12h8"
        className="edge"
        data-dest-tf-name="mixed3b_5x5_bottleneck"
        data-source-tf-name="mixed3a"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M198.667 64h10.666"
        className="edge"
        data-dest-tf-name="mixed3b_5x5"
        data-source-tf-name="mixed3b_5x5_bottleneck"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M167.333 52c6 0 12 36 20 36h8"
        className="edge"
        data-dest-tf-name="mixed3b_pool"
        data-source-tf-name="mixed3a"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M198.667 88h10.666"
        className="edge"
        data-dest-tf-name="mixed3b_pool_reduce"
        data-source-tf-name="mixed3b_pool"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M212.667 16c6 0 6 36 12 36h0"
        className="edge"
        data-dest-tf-name="mixed3b"
        data-source-tf-name="mixed3b_1x1"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M212.667 40c6 0 6 12 12 12h0"
        className="edge"
        data-dest-tf-name="mixed3b"
        data-source-tf-name="mixed3b_3x3"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M212.667 64c6 0 6-12 12-12h0"
        className="edge"
        data-dest-tf-name="mixed3b"
        data-source-tf-name="mixed3b_5x5"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M212.667 88c6 0 6-36 12-36h0"
        className="edge"
        data-dest-tf-name="mixed3b"
        data-source-tf-name="mixed3b_pool_reduce"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M229.333 52h20"
        className="edge"
        data-dest-tf-name="maxpool4"
        data-source-tf-name="mixed3b"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M252.667 52c6 0 12-36 20-36h16.666"
        className="edge"
        data-dest-tf-name="mixed4a_1x1"
        data-source-tf-name="maxpool4"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M252.667 52c6 0 12-12 20-12h2.666"
        className="edge"
        data-dest-tf-name="mixed4a_3x3_bottleneck"
        data-source-tf-name="maxpool4"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M278.667 40h10.666"
        className="edge"
        data-dest-tf-name="mixed4a_3x3"
        data-source-tf-name="mixed4a_3x3_bottleneck"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M252.667 52c6 0 12 12 20 12h2.666"
        className="edge"
        data-dest-tf-name="mixed4a_5x5_bottleneck"
        data-source-tf-name="maxpool4"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M278.667 64h10.666"
        className="edge"
        data-dest-tf-name="mixed4a_5x5"
        data-source-tf-name="mixed4a_5x5_bottleneck"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M252.667 52c6 0 12 36 20 36h2.666"
        className="edge"
        data-dest-tf-name="mixed4a_pool"
        data-source-tf-name="maxpool4"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M278.667 88h10.666"
        className="edge"
        data-dest-tf-name="mixed4a_pool_reduce"
        data-source-tf-name="mixed4a_pool"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M292.667 16c6 0 6 36 12 36h0"
        className="edge"
        data-dest-tf-name="mixed4a"
        data-source-tf-name="mixed4a_1x1"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M292.667 40c6 0 6 12 12 12h0"
        className="edge"
        data-dest-tf-name="mixed4a"
        data-source-tf-name="mixed4a_3x3"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M292.667 64c6 0 6-12 12-12h0"
        className="edge"
        data-dest-tf-name="mixed4a"
        data-source-tf-name="mixed4a_5x5"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M292.667 88c6 0 6-36 12-36h0"
        className="edge"
        data-dest-tf-name="mixed4a"
        data-source-tf-name="mixed4a_pool_reduce"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M309.333 52c6 0 12-36 20-36h22"
        className="edge"
        data-dest-tf-name="mixed4b_1x1"
        data-source-tf-name="mixed4a"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M309.333 52c6 0 12-12 20-12h8"
        className="edge"
        data-dest-tf-name="mixed4b_3x3_bottleneck"
        data-source-tf-name="mixed4a"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M340.667 40h10.666"
        className="edge"
        data-dest-tf-name="mixed4b_3x3"
        data-source-tf-name="mixed4b_3x3_bottleneck"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M309.333 52c6 0 12 12 20 12h8"
        className="edge"
        data-dest-tf-name="mixed4b_5x5_bottleneck"
        data-source-tf-name="mixed4a"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M340.667 64h10.666"
        className="edge"
        data-dest-tf-name="mixed4b_5x5"
        data-source-tf-name="mixed4b_5x5_bottleneck"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M309.333 52c6 0 12 36 20 36h8"
        className="edge"
        data-dest-tf-name="mixed4b_pool"
        data-source-tf-name="mixed4a"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M340.667 88h10.666"
        className="edge"
        data-dest-tf-name="mixed4b_pool_reduce"
        data-source-tf-name="mixed4b_pool"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M354.667 16c6 0 6 36 12 36h0"
        className="edge"
        data-dest-tf-name="mixed4b"
        data-source-tf-name="mixed4b_1x1"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M354.667 40c6 0 6 12 12 12h0"
        className="edge"
        data-dest-tf-name="mixed4b"
        data-source-tf-name="mixed4b_3x3"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M354.667 64c6 0 6-12 12-12h0"
        className="edge"
        data-dest-tf-name="mixed4b"
        data-source-tf-name="mixed4b_5x5"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M354.667 88c6 0 6-36 12-36h0"
        className="edge"
        data-dest-tf-name="mixed4b"
        data-source-tf-name="mixed4b_pool_reduce"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M371.333 52c6 0 12-36 20-36h22"
        className="edge"
        data-dest-tf-name="mixed4c_1x1"
        data-source-tf-name="mixed4b"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M371.333 52c6 0 12-12 20-12h8"
        className="edge"
        data-dest-tf-name="mixed4c_3x3_bottleneck"
        data-source-tf-name="mixed4b"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M402.667 40h10.666"
        className="edge"
        data-dest-tf-name="mixed4c_3x3"
        data-source-tf-name="mixed4c_3x3_bottleneck"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M371.333 52c6 0 12 12 20 12h8"
        className="edge"
        data-dest-tf-name="mixed4c_5x5_bottleneck"
        data-source-tf-name="mixed4b"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M402.667 64h10.666"
        className="edge"
        data-dest-tf-name="mixed4c_5x5"
        data-source-tf-name="mixed4c_5x5_bottleneck"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M371.333 52c6 0 12 36 20 36h8"
        className="edge"
        data-dest-tf-name="mixed4c_pool"
        data-source-tf-name="mixed4b"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M402.667 88h10.666"
        className="edge"
        data-dest-tf-name="mixed4c_pool_reduce"
        data-source-tf-name="mixed4c_pool"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M416.667 16c6 0 6 36 12 36h0"
        className="edge"
        data-dest-tf-name="mixed4c"
        data-source-tf-name="mixed4c_1x1"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M416.667 40c6 0 6 12 12 12h0"
        className="edge"
        data-dest-tf-name="mixed4c"
        data-source-tf-name="mixed4c_3x3"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M416.667 64c6 0 6-12 12-12h0"
        className="edge"
        data-dest-tf-name="mixed4c"
        data-source-tf-name="mixed4c_5x5"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M416.667 88c6 0 6-36 12-36h0"
        className="edge"
        data-dest-tf-name="mixed4c"
        data-source-tf-name="mixed4c_pool_reduce"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M433.333 52c6 0 12-36 20-36h22"
        className="edge"
        data-dest-tf-name="mixed4d_1x1"
        data-source-tf-name="mixed4c"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M433.333 52c6 0 12-12 20-12h8"
        className="edge"
        data-dest-tf-name="mixed4d_3x3_bottleneck"
        data-source-tf-name="mixed4c"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M464.667 40h10.666"
        className="edge"
        data-dest-tf-name="mixed4d_3x3"
        data-source-tf-name="mixed4d_3x3_bottleneck"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M433.333 52c6 0 12 12 20 12h8"
        className="edge"
        data-dest-tf-name="mixed4d_5x5_bottleneck"
        data-source-tf-name="mixed4c"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M464.667 64h10.666"
        className="edge"
        data-dest-tf-name="mixed4d_5x5"
        data-source-tf-name="mixed4d_5x5_bottleneck"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M433.333 52c6 0 12 36 20 36h8"
        className="edge"
        data-dest-tf-name="mixed4d_pool"
        data-source-tf-name="mixed4c"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M464.667 88h10.666"
        className="edge"
        data-dest-tf-name="mixed4d_pool_reduce"
        data-source-tf-name="mixed4d_pool"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M478.667 16c6 0 6 36 12 36h0"
        className="edge"
        data-dest-tf-name="mixed4d"
        data-source-tf-name="mixed4d_1x1"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M478.667 40c6 0 6 12 12 12h0"
        className="edge"
        data-dest-tf-name="mixed4d"
        data-source-tf-name="mixed4d_3x3"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M478.667 64c6 0 6-12 12-12h0"
        className="edge"
        data-dest-tf-name="mixed4d"
        data-source-tf-name="mixed4d_5x5"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M478.667 88c6 0 6-36 12-36h0"
        className="edge"
        data-dest-tf-name="mixed4d"
        data-source-tf-name="mixed4d_pool_reduce"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M495.333 52c6 0 12-36 20-36h22"
        className="edge"
        data-dest-tf-name="mixed4e_1x1"
        data-source-tf-name="mixed4d"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M495.333 52c6 0 12-12 20-12h8"
        className="edge"
        data-dest-tf-name="mixed4e_3x3_bottleneck"
        data-source-tf-name="mixed4d"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M526.667 40h10.666"
        className="edge"
        data-dest-tf-name="mixed4e_3x3"
        data-source-tf-name="mixed4e_3x3_bottleneck"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M495.333 52c6 0 12 12 20 12h8"
        className="edge"
        data-dest-tf-name="mixed4e_5x5_bottleneck"
        data-source-tf-name="mixed4d"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M526.667 64h10.666"
        className="edge"
        data-dest-tf-name="mixed4e_5x5"
        data-source-tf-name="mixed4e_5x5_bottleneck"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M495.333 52c6 0 12 36 20 36h8"
        className="edge"
        data-dest-tf-name="mixed4e_pool"
        data-source-tf-name="mixed4d"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M526.667 88h10.666"
        className="edge"
        data-dest-tf-name="mixed4e_pool_reduce"
        data-source-tf-name="mixed4e_pool"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M540.667 16c6 0 6 36 12 36h0"
        className="edge"
        data-dest-tf-name="mixed4e"
        data-source-tf-name="mixed4e_1x1"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M540.667 40c6 0 6 12 12 12h0"
        className="edge"
        data-dest-tf-name="mixed4e"
        data-source-tf-name="mixed4e_3x3"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M540.667 64c6 0 6-12 12-12h0"
        className="edge"
        data-dest-tf-name="mixed4e"
        data-source-tf-name="mixed4e_5x5"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M540.667 88c6 0 6-36 12-36h0"
        className="edge"
        data-dest-tf-name="mixed4e"
        data-source-tf-name="mixed4e_pool_reduce"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M557.333 52h20"
        className="edge"
        data-dest-tf-name="maxpool10"
        data-source-tf-name="mixed4e"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M580.667 52c6 0 12-36 20-36h16.666"
        className="edge"
        data-dest-tf-name="mixed5a_1x1"
        data-source-tf-name="maxpool10"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M580.667 52c6 0 12-12 20-12h2.666"
        className="edge"
        data-dest-tf-name="mixed5a_3x3_bottleneck"
        data-source-tf-name="maxpool10"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M606.667 40h10.666"
        className="edge"
        data-dest-tf-name="mixed5a_3x3"
        data-source-tf-name="mixed5a_3x3_bottleneck"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M580.667 52c6 0 12 12 20 12h2.666"
        className="edge"
        data-dest-tf-name="mixed5a_5x5_bottleneck"
        data-source-tf-name="maxpool10"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M606.667 64h10.666"
        className="edge"
        data-dest-tf-name="mixed5a_5x5"
        data-source-tf-name="mixed5a_5x5_bottleneck"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M580.667 52c6 0 12 36 20 36h2.666"
        className="edge"
        data-dest-tf-name="mixed5a_pool"
        data-source-tf-name="maxpool10"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M606.667 88h10.666"
        className="edge"
        data-dest-tf-name="mixed5a_pool_reduce"
        data-source-tf-name="mixed5a_pool"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M620.667 16c6 0 6 36 12 36h0"
        className="edge"
        data-dest-tf-name="mixed5a"
        data-source-tf-name="mixed5a_1x1"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M620.667 40c6 0 6 12 12 12h0"
        className="edge"
        data-dest-tf-name="mixed5a"
        data-source-tf-name="mixed5a_3x3"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M620.667 64c6 0 6-12 12-12h0"
        className="edge"
        data-dest-tf-name="mixed5a"
        data-source-tf-name="mixed5a_5x5"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M620.667 88c6 0 6-36 12-36h0"
        className="edge"
        data-dest-tf-name="mixed5a"
        data-source-tf-name="mixed5a_pool_reduce"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M637.333 52c6 0 12-36 20-36h22"
        className="edge"
        data-dest-tf-name="mixed5b_1x1"
        data-source-tf-name="mixed5a"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M637.333 52c6 0 12-12 20-12h8"
        className="edge"
        data-dest-tf-name="mixed5b_3x3_bottleneck"
        data-source-tf-name="mixed5a"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M668.667 40h10.666"
        className="edge"
        data-dest-tf-name="mixed5b_3x3"
        data-source-tf-name="mixed5b_3x3_bottleneck"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M637.333 52c6 0 12 12 20 12h8"
        className="edge"
        data-dest-tf-name="mixed5b_5x5_bottleneck"
        data-source-tf-name="mixed5a"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M668.667 64h10.666"
        className="edge"
        data-dest-tf-name="mixed5b_5x5"
        data-source-tf-name="mixed5b_5x5_bottleneck"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M637.333 52c6 0 12 36 20 36h8"
        className="edge"
        data-dest-tf-name="mixed5b_pool"
        data-source-tf-name="mixed5a"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M668.667 88h10.666"
        className="edge"
        data-dest-tf-name="mixed5b_pool_reduce"
        data-source-tf-name="mixed5b_pool"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M682.667 16c6 0 6 36 12 36h0"
        className="edge"
        data-dest-tf-name="mixed5b"
        data-source-tf-name="mixed5b_1x1"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M682.667 40c6 0 6 12 12 12h0"
        className="edge"
        data-dest-tf-name="mixed5b"
        data-source-tf-name="mixed5b_3x3"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M682.667 64c6 0 6-12 12-12h0"
        className="edge"
        data-dest-tf-name="mixed5b"
        data-source-tf-name="mixed5b_5x5"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M682.667 88c6 0 6-36 12-36h0"
        className="edge"
        data-dest-tf-name="mixed5b"
        data-source-tf-name="mixed5b_pool_reduce"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M699.333 52h20"
        className="edge"
        data-dest-tf-name="avgpool0"
        data-source-tf-name="mixed5b"
      ></path>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M722.667 52h14.666"
        className="edge"
        data-dest-tf-name="softmax2_pre_activation/matmul"
        data-source-tf-name="avgpool0"
      ></path>
      <text className="small-text" transform="translate(740 77)">
        softmax
      </text>
      <path
        fill="none"
        stroke="#DDD"
        strokeWidth="1.5"
        d="M740.667 52h18"
        className="edge"
        data-dest-tf-name="softmax2"
        data-source-tf-name="softmax2_pre_activation/matmul"
      ></path>
      <path
        d="M0 10L5 20 15 20 20 10 15 0 5 0 0 10z"
        className="node"
        data-tf-name="input"
        data-tf-op="Placeholder"
        transform="translate(6 42)"
      ></path>
      <a>
        <text transform="translate(32 42) translate(3 -8)">0</text>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="conv2d0"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(32 42) translate(2)"
        ></rect>
      </a>
      <path
        d="M0 0L0 20 3 20 10 12 10 7 3 0 0 0z"
        className="node"
        data-tf-name="maxpool0"
        data-tf-op="MaxPool"
        transform="translate(50 42) translate(2)"
      ></path>
      <text transform="translate(68 42) translate(1 -8)">1</text>
      <rect
        width="10"
        height="20"
        className="node"
        data-tf-name="conv2d1"
        data-tf-op="Relu"
        rx="2"
        ry="2"
        transform="translate(68 42) translate(2)"
      ></rect>
      <a href="#conv2d2">
        <g className="early">
          <text transform="translate(86 42) translate(3 -8)">2</text>
          <rect
            width="10"
            height="20"
            className="node"
            data-tf-name="conv2d2"
            data-tf-op="Relu"
            rx="2"
            ry="2"
            transform="translate(86 42) translate(2)"
          ></rect>
        </g>
      </a>
      <g>
        <path
          d="M0 0L0 20 3 20 10 12 10 7 3 0 0 0z"
          className="node"
          data-tf-name="maxpool1"
          data-tf-op="MaxPool"
          transform="translate(104 42) translate(2)"
        ></path>
      </g>
      <path
        d="M0 0L0 20 3 20 10 12 10 7 3 0 0 0z"
        className="node"
        data-tf-name="maxpool4"
        data-tf-op="MaxPool"
        transform="translate(246 42) translate(2)"
      ></path>
      <path
        d="M0 0L0 20 3 20 10 12 10 7 3 0 0 0z"
        className="node"
        data-tf-name="maxpool10"
        data-tf-op="MaxPool"
        transform="translate(574 42) translate(2)"
      ></path>
      <path
        d="M0 0L0 20 3 20 10 12 10 7 3 0 0 0z"
        className="node"
        data-tf-name="avgpool0"
        data-tf-op="AvgPool"
        transform="translate(716 42) translate(2)"
      ></path>
      <rect
        width="10"
        height="20"
        className="node"
        data-tf-name="softmax2_pre_activation/matmul"
        data-tf-op="MatMul"
        rx="2"
        ry="2"
        transform="translate(734 42) translate(2)"
      ></rect>
      <path
        d="M0 10L5 20 15 20 20 10 15 0 5 0 0 10z"
        className="node"
        data-tf-name="softmax2"
        data-tf-op="Softmax"
        transform="translate(752 42) translate(2)"
      ></path>
      <rect
        width="10"
        height="20"
        className="node"
        data-tf-name="mixed5a_1x1"
        data-tf-op="Relu"
        rx="2"
        ry="2"
        transform="translate(614 6)"
      ></rect>
      <rect
        width="10"
        height="20"
        className="node"
        data-tf-name="mixed5a_3x3_bottleneck"
        data-tf-op="Relu"
        rx="2"
        ry="2"
        transform="translate(600 30)"
      ></rect>
      <rect
        width="10"
        height="20"
        className="node"
        data-tf-name="mixed5a_3x3"
        data-tf-op="Relu"
        rx="2"
        ry="2"
        transform="translate(614 30)"
      ></rect>
      <rect
        width="10"
        height="20"
        className="node"
        data-tf-name="mixed5a_5x5_bottleneck"
        data-tf-op="Relu"
        rx="2"
        ry="2"
        transform="translate(600 54)"
      ></rect>
      <rect
        width="10"
        height="20"
        className="node"
        data-tf-name="mixed5a_5x5"
        data-tf-op="Relu"
        rx="2"
        ry="2"
        transform="translate(614 54)"
      ></rect>
      <path
        d="M0 0L0 20 3 20 10 12 10 7 3 0 0 0z"
        className="node"
        data-tf-name="mixed5a_pool"
        data-tf-op="MaxPool"
        transform="translate(600 78)"
      ></path>
      <rect
        width="10"
        height="20"
        className="node"
        data-tf-name="mixed5a_pool_reduce"
        data-tf-op="Relu"
        rx="2"
        ry="2"
        transform="translate(614 78)"
      ></rect>
      <rect
        width="10"
        height="20"
        x="4"
        className="node"
        data-tf-name="mixed5a"
        data-tf-op="Concat"
        rx="2"
        ry="2"
        transform="translate(628 42)"
      ></rect>
      <g transform="translate(594)">
        <text transform="translate(17 -6)">5a</text>
        <rect
          width="54"
          height="104"
          className="background"
          data-group-tf-name="mixed5a"
          rx="2"
          ry="2"
        ></rect>
      </g>
      <g>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed4d_1x1"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(472 6)"
        ></rect>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed4d_3x3_bottleneck"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(458 30)"
        ></rect>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed4d_3x3"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(472 30)"
        ></rect>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed4d_5x5_bottleneck"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(458 54)"
        ></rect>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed4d_5x5"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(472 54)"
        ></rect>
        <path
          d="M0 0L0 20 3 20 10 12 10 7 3 0 0 0z"
          className="node"
          data-tf-name="mixed4d_pool"
          data-tf-op="MaxPool"
          transform="translate(458 78)"
        ></path>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed4d_pool_reduce"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(472 78)"
        ></rect>
        <rect
          width="10"
          height="20"
          x="4"
          className="node"
          data-tf-name="mixed4d"
          data-tf-op="Concat"
          rx="2"
          ry="2"
          transform="translate(486 42)"
        ></rect>
        <g transform="translate(452)">
          <text transform="translate(17 -6)">4d</text>
          <rect
            width="54"
            height="104"
            className="background"
            data-group-tf-name="mixed4d"
            rx="2"
            ry="2"
          ></rect>
        </g>
      </g>
      <g>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed5b_1x1"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(676 6)"
        ></rect>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed5b_3x3_bottleneck"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(662 30)"
        ></rect>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed5b_3x3"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(676 30)"
        ></rect>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed5b_5x5_bottleneck"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(662 54)"
        ></rect>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed5b_5x5"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(676 54)"
        ></rect>
        <path
          d="M0 0L0 20 3 20 10 12 10 7 3 0 0 0z"
          className="node"
          data-tf-name="mixed5b_pool"
          data-tf-op="MaxPool"
          transform="translate(662 78)"
        ></path>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed5b_pool_reduce"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(676 78)"
        ></rect>
        <rect
          width="10"
          height="20"
          x="4"
          className="node"
          data-tf-name="mixed5b"
          data-tf-op="Concat"
          rx="2"
          ry="2"
          transform="translate(690 42)"
        ></rect>
        <g transform="translate(656)">
          <text className="emph-text" transform="translate(17 -6)">
            5b
          </text>
          <rect
            width="54"
            height="104"
            className="background emph"
            data-group-tf-name="mixed5b"
            rx="2"
            ry="2"
          ></rect>
        </g>
      </g>
      <a href="#3b">
        <g className="early">
          <rect
            width="10"
            height="20"
            className="node"
            data-tf-name="mixed3b_1x1"
            data-tf-op="Relu"
            rx="2"
            ry="2"
            transform="translate(206 6)"
          ></rect>
          <rect
            width="10"
            height="20"
            className="node"
            data-tf-name="mixed3b_3x3_bottleneck"
            data-tf-op="Relu"
            rx="2"
            ry="2"
            transform="translate(192 30)"
          ></rect>
          <rect
            width="10"
            height="20"
            className="node"
            data-tf-name="mixed3b_3x3"
            data-tf-op="Relu"
            rx="2"
            ry="2"
            transform="translate(206 30)"
          ></rect>
          <rect
            width="10"
            height="20"
            className="node"
            data-tf-name="mixed3b_5x5_bottleneck"
            data-tf-op="Relu"
            rx="2"
            ry="2"
            transform="translate(192 54)"
          ></rect>
          <rect
            width="10"
            height="20"
            className="node"
            data-tf-name="mixed3b_5x5"
            data-tf-op="Relu"
            rx="2"
            ry="2"
            transform="translate(206 54)"
          ></rect>
          <path
            d="M0 0L0 20 3 20 10 12 10 7 3 0 0 0z"
            className="node"
            data-tf-name="mixed3b_pool"
            data-tf-op="MaxPool"
            transform="translate(192 78)"
          ></path>
          <rect
            width="10"
            height="20"
            className="node"
            data-tf-name="mixed3b_pool_reduce"
            data-tf-op="Relu"
            rx="2"
            ry="2"
            transform="translate(206 78)"
          ></rect>
          <rect
            width="10"
            height="20"
            x="4"
            className="node"
            data-tf-name="mixed3b"
            data-tf-op="Concat"
            rx="2"
            ry="2"
            transform="translate(220 42)"
          ></rect>
          <g transform="translate(186)">
            <text className="emph-text" transform="translate(17 -6)">
              3b
            </text>
            <rect
              width="54"
              height="104"
              className="background emph"
              data-group-tf-name="mixed3b"
              rx="2"
              ry="2"
            ></rect>
          </g>
        </g>
      </a>
      <g>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed4e_1x1"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(534 6)"
        ></rect>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed4e_3x3_bottleneck"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(520 30)"
        ></rect>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed4e_3x3"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(534 30)"
        ></rect>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed4e_5x5_bottleneck"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(520 54)"
        ></rect>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed4e_5x5"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(534 54)"
        ></rect>
        <path
          d="M0 0L0 20 3 20 10 12 10 7 3 0 0 0z"
          className="node"
          data-tf-name="mixed4e_pool"
          data-tf-op="MaxPool"
          transform="translate(520 78)"
        ></path>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed4e_pool_reduce"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(534 78)"
        ></rect>
        <rect
          width="10"
          height="20"
          x="4"
          className="node"
          data-tf-name="mixed4e"
          data-tf-op="Concat"
          rx="2"
          ry="2"
          transform="translate(548 42)"
        ></rect>
        <g transform="translate(514)">
          <text transform="translate(17 -6)">4e</text>
          <rect
            width="54"
            height="104"
            className="background"
            data-group-tf-name="mixed4e"
            rx="2"
            ry="2"
          ></rect>
        </g>
      </g>
      <g>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed4c_1x1"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(410 6)"
        ></rect>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed4c_3x3_bottleneck"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(396 30)"
        ></rect>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed4c_3x3"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(410 30)"
        ></rect>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed4c_5x5_bottleneck"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(396 54)"
        ></rect>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed4c_5x5"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(410 54)"
        ></rect>
        <path
          d="M0 0L0 20 3 20 10 12 10 7 3 0 0 0z"
          className="node"
          data-tf-name="mixed4c_pool"
          data-tf-op="MaxPool"
          transform="translate(396 78)"
        ></path>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed4c_pool_reduce"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(410 78)"
        ></rect>
        <rect
          width="10"
          height="20"
          x="4"
          className="node"
          data-tf-name="mixed4c"
          data-tf-op="Concat"
          rx="2"
          ry="2"
          transform="translate(424 42)"
        ></rect>
        <g transform="translate(390)">
          <text className="emph-text" transform="translate(17 -6)">
            4c
          </text>
          <rect
            width="54"
            height="104"
            className="background emph"
            data-group-tf-name="mixed4c"
            rx="2"
            ry="2"
          ></rect>
        </g>
      </g>
      <g>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed4b_1x1"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(348 6)"
        ></rect>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed4b_3x3_bottleneck"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(334 30)"
        ></rect>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed4b_3x3"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(348 30)"
        ></rect>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed4b_5x5_bottleneck"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(334 54)"
        ></rect>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed4b_5x5"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(348 54)"
        ></rect>
        <path
          d="M0 0L0 20 3 20 10 12 10 7 3 0 0 0z"
          className="node"
          data-tf-name="mixed4b_pool"
          data-tf-op="MaxPool"
          transform="translate(334 78)"
        ></path>
        <rect
          width="10"
          height="20"
          className="node"
          data-tf-name="mixed4b_pool_reduce"
          data-tf-op="Relu"
          rx="2"
          ry="2"
          transform="translate(348 78)"
        ></rect>
        <rect
          width="10"
          height="20"
          x="4"
          className="node"
          data-tf-name="mixed4b"
          data-tf-op="Concat"
          rx="2"
          ry="2"
          transform="translate(362 42)"
        ></rect>
        <g transform="translate(328)">
          <text transform="translate(17 -6)">4b</text>
          <rect
            width="54"
            height="104"
            className="background"
            data-group-tf-name="mixed4b"
            rx="2"
            ry="2"
          ></rect>
        </g>
      </g>
      <a href="#3a">
        <g className="early">
          <rect
            width="10"
            height="20"
            className="node"
            data-tf-name="mixed3a_1x1"
            data-tf-op="Relu"
            rx="2"
            ry="2"
            transform="translate(144 6)"
          ></rect>
          <rect
            width="10"
            height="20"
            className="node"
            data-tf-name="mixed3a_3x3_bottleneck"
            data-tf-op="Relu"
            rx="2"
            ry="2"
            transform="translate(130 30)"
          ></rect>
          <rect
            width="10"
            height="20"
            className="node"
            data-tf-name="mixed3a_3x3"
            data-tf-op="Relu"
            rx="2"
            ry="2"
            transform="translate(144 30)"
          ></rect>
          <rect
            width="10"
            height="20"
            className="node"
            data-tf-name="mixed3a_5x5_bottleneck"
            data-tf-op="Relu"
            rx="2"
            ry="2"
            transform="translate(130 54)"
          ></rect>
          <rect
            width="10"
            height="20"
            className="node"
            data-tf-name="mixed3a_5x5"
            data-tf-op="Relu"
            rx="2"
            ry="2"
            transform="translate(144 54)"
          ></rect>
          <path
            d="M0 0L0 20 3 20 10 12 10 7 3 0 0 0z"
            className="node"
            data-tf-name="mixed3a_pool"
            data-tf-op="MaxPool"
            transform="translate(130 78)"
          ></path>
          <rect
            width="10"
            height="20"
            className="node"
            data-tf-name="mixed3a_pool_reduce"
            data-tf-op="Relu"
            rx="2"
            ry="2"
            transform="translate(144 78)"
          ></rect>
          <rect
            width="10"
            height="20"
            x="4"
            className="node"
            data-tf-name="mixed3a"
            data-tf-op="Concat"
            rx="2"
            ry="2"
            transform="translate(158 42)"
          ></rect>
          <g transform="translate(124)">
            <text transform="translate(17 -6)">3a</text>
            <rect
              width="54"
              height="104"
              className="background"
              data-group-tf-name="mixed3a"
              rx="2"
              ry="2"
            ></rect>
          </g>
        </g>
      </a>
      <a href="#4a">
        <g className="early">
          <rect
            width="10"
            height="20"
            className="node"
            data-tf-name="mixed4a_1x1"
            data-tf-op="Relu"
            rx="2"
            ry="2"
            transform="translate(286 6)"
          ></rect>
          <rect
            width="10"
            height="20"
            className="node"
            data-tf-name="mixed4a_3x3_bottleneck"
            data-tf-op="Relu"
            rx="2"
            ry="2"
            transform="translate(272 30)"
          ></rect>
          <rect
            width="10"
            height="20"
            className="node"
            data-tf-name="mixed4a_3x3"
            data-tf-op="Relu"
            rx="2"
            ry="2"
            transform="translate(286 30)"
          ></rect>
          <rect
            width="10"
            height="20"
            className="node"
            data-tf-name="mixed4a_5x5_bottleneck"
            data-tf-op="Relu"
            rx="2"
            ry="2"
            transform="translate(272 54)"
          ></rect>
          <rect
            width="10"
            height="20"
            className="node"
            data-tf-name="mixed4a_5x5"
            data-tf-op="Relu"
            rx="2"
            ry="2"
            transform="translate(286 54)"
          ></rect>
          <path
            d="M0 0L0 20 3 20 10 12 10 7 3 0 0 0z"
            className="node"
            data-tf-name="mixed4a_pool"
            data-tf-op="MaxPool"
            transform="translate(272 78)"
          ></path>
          <rect
            width="10"
            height="20"
            className="node"
            data-tf-name="mixed4a_pool_reduce"
            data-tf-op="Relu"
            rx="2"
            ry="2"
            transform="translate(286 78)"
          ></rect>
          <rect
            width="10"
            height="20"
            x="4"
            className="node"
            data-tf-name="mixed4a"
            data-tf-op="Concat"
            rx="2"
            ry="2"
            transform="translate(300 42)"
          ></rect>
          <g transform="translate(266)">
            <text transform="translate(17 -6)">4a</text>
            <rect
              width="54"
              height="104"
              className="background emph"
              data-group-tf-name="mixed4a"
              rx="2"
              ry="2"
            ></rect>
          </g>
        </g>
      </a>
    </g>
  </svg>
)
