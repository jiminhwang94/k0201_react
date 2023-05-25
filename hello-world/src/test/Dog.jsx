import React from "react";

function Dog(props) { //함수형 컴포넌트.
    return ( //jsx 문법 형태,
        // jsx : javascript and xml hyml
        <div>
            <h1>{`강아지의 이름 : ${props.name}입니다. `}</h1>
            <h2>{`강아지의 나이 : ${props.age}입니다. `}</h2>
        </div>
    );
}

// 외부에 노출을 시켜야, 다른 컴포넌트에서도 임포트해서 재사용.
export default Dog;