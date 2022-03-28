import { useRef, useState } from "react";

const DiaryEditor = ({ onCreate }) => {
    const authorInput = useRef();
    const contentInput = useRef();

    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1,
    });

    // const [author, setAuthor] = useState("");
    // const [content, setContent] = useState("");

    const handleChangeState = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);

        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        if (state.author.length < 1) {
            // alert("작성자는 최소 1글자 이상 입력해주세요.");
            //focus
            authorInput.current.focus();
            return;
        }

        if (state.content.length < 5) {
            // alert("일기 본문은 최소 5글자 이상 입력해주세요.");
            //focus
            contentInput.current.focus();
            return;
        }

        onCreate(state.author, state.content, state.emotion);
        console.log(state);
        alert("저장 성공");
        setState({
            author: "",
            content: "",
            emotion: "1",
        });
    };

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input
                    ref={authorInput}
                    name="author"
                    type="text"
                    placeholder="작성자"
                    value={state.author}
                    // onChange={(e)=> {
                    //     // console.log(e.target.value);
                    //     setState({
                    //         //항목이 많아지면 밑에 줄줄이 써야되니까 스프레드시트로 가져오면 편함.
                    //         //...state(스프레드 연산자)는 무조건 먼저 나와야됨.
                    //         ...state,
                    //         author: e.target.value,
                    //         // content: state.content,
                    //     });
                    // }}
                    onChange={handleChangeState}
                />
            </div>

            <div>
                <textarea
                    ref={contentInput}
                    name="content"
                    type="text"
                    placeholder="일기"
                    value={state.content}
                    // onChange ={(e)=> {
                    //     // console.log(e.target.value);
                    //     // setState(e.target.value);
                    //     setState({
                    //         ...state,
                    //         // author: state.author,
                    //         content: e.target.value,
                    //     });
                    // }}
                    onChange={handleChangeState}
                />
            </div>

            <div>
                <select
                    name="emotion"
                    value={state.emotion}
                    onChange={handleChangeState}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>

            <div>
                <button onClick={handleSubmit}>일기 저장하기</button>
            </div>
        </div>
    );
};

export default DiaryEditor;
