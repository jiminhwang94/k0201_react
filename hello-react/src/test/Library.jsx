import React from "react";
import Book from "./Book";

function Library(props) {
    //Library , 함수형 컴포넌트를 만들었고,
    // 여기에 아까 만들었던, Book 컴포넌트를 사용하는 예제 코드.
    return(
        <div>
            <Book name="황지민1" numOfpage={100}/>
            <Book name="황지민2" numOfpage={200}/>
            <Book name="황지민3" numOfpage={300}/>
        </div>
    );
}
export default Library;